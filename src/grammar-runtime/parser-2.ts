import {MyGrammar, MyRule, MyTokenSymbol} from "./grammar";
import {acceptsToken, inlineChild, isFinished, push, pushChild} from "./parser";
import {Fields, MySyntaxNode, MyToken} from "./syntax-node";

let addStateScan = 0;
let addStateSkipUnexpected = 0;
let addStateSkipExpectation = 0;
let addStateComplete2 = 0;
let addStatePredictRule = 0;

addStateScan;
addStateSkipExpectation;
addStateSkipUnexpected;
addStateComplete2;
addStatePredictRule;

export interface GetStatesExpectingDelegate {
    (tokenIndex : number, expect : string) : MyState[]
}

export type TryGetStateDelegate = (
    rule : MyRule,
    dot : number,
    tokenIndex : number,
    startTokenIndex : number,
    ident : string
) => MyState|undefined;

export type TryGetFinishedStatesDelegate = (
    rule : MyRule,
    startTokenIndex : number,
) => MyState[];

export type OnCloseFinishedStateDelegate = (state : MyState) => void;

export interface MyState {
    readonly rule : MyRule;
    readonly dot : number;
    readonly tokenIndex : number;
    readonly startTokenIndex : number;

    readonly data : MySyntaxNode;
    readonly errorCount : number;

    readonly ident : string;

    readonly edges : MyState[];
}

export interface MyStateSet {
    getStatesExpecting (expect : string) : MyState[];
    tryGetState (
        rule : MyRule,
        dot : number,
        startTokenIndex : number,
        ident : string
    ) : MyState|undefined;
    tryGetFinishedStates (
        rule : MyRule,
        startTokenIndex : number
    ) : MyState[];
    add (state : MyState) : void;

    hasOpenStates () : boolean;
    processLowestErrorCountStates (
        maxErrorCount : number,
        grammar : MyGrammar,
        tokens : MyToken[],
        getStatesExpecting : GetStatesExpectingDelegate,
        tryGetState : TryGetStateDelegate,
        tryGetFinishedStates : TryGetFinishedStatesDelegate,
        addState : (state : MyState) => void,
        onCloseFinishedState : OnCloseFinishedStateDelegate,
    ) : void;

    skipUnexpected (
        grammar : MyGrammar,
        tokens : MyToken[],
        tryGetState : TryGetStateDelegate,
        addState : (state : MyState) => void
    ) : void;
    skipExpectation (
        grammar : MyGrammar,
        tokens : MyToken[],
        tryGetState : TryGetStateDelegate,
        addState : (state : MyState) => void
    ) : void;

    getResults (grammar : MyGrammar) : MyState[];
}

export interface MyStateSetCollection {
    tryGetState (
        rule : MyRule,
        dot : number,
        tokenIndex : number,
        startTokenIndex : number,
        ident : string,
        finished : boolean
    ) : MyState|undefined;
}

export function binarySearch (start : number, end : number, isHigher : (i : number) => boolean) : number {
    start = Math.floor(start);
    end = Math.floor(end);
    while (start<end) {
        const mid = Math.floor((start+end)/2);
        if (isHigher(mid)) {
            start = mid+1;
        } else {
            end = mid;
        }
    }
    //console.log(start, end);
    return start;
}

function tryGetState (
    states : readonly MyState[],
    rule : MyRule,
    dot : number,
    startTokenIndex : number,
    ident : string
) : MyState|undefined {
    return states.find(a => (
        a.rule == rule &&
        a.startTokenIndex == startTokenIndex &&
        a.ident == ident &&
        a.dot == dot
    ));
}

function tryGetFinishedStates (
    states : readonly MyState[],
    rule : MyRule,
    startTokenIndex : number
) : MyState[] {
    const results = states.filter(a => (
        a.rule == rule &&
        a.startTokenIndex == startTokenIndex &&
        isFinished(a)
    ));
    if (results.length > 1) {
        results;
    }
    return results;
}


class MyStateSetImpl implements MyStateSet {
    /**
     * These states have already been processed.
     */
    private closed : MyState[] = [];
    private skipUnexpectedStartIndex = 0;
    private skipExpectationStartIndex = 0;

    /**
     * Sorted by `errorCount ASC`.
     *
     * These states have not been processed yet.
     */
    private states : MyState[] = [];

    getStatesExpecting (expect : string) : MyState[] {
        return [
            ...this.closed.filter(state =>
                state.rule.symbols[state.dot] === expect
            ),
            ...this.states.filter(state =>
                state.rule.symbols[state.dot] === expect
            ),
        ];
    }
    tryGetState (
        rule : MyRule,
        dot : number,
        startTokenIndex : number,
        ident : string
    ) : MyState|undefined {
        const result = tryGetState(
            this.closed,
            rule,
            dot,
            startTokenIndex,
            ident
        );

        if (result != undefined) {
            return result;
        }

        return tryGetState(
            this.states,
            rule,
            dot,
            startTokenIndex,
            ident
        );
    }
    tryGetFinishedStates (
        rule : MyRule,
        startTokenIndex : number
    ) : MyState[] {
        return [
            ...tryGetFinishedStates(
                this.closed,
                rule,
                startTokenIndex,
            ),
            ...tryGetFinishedStates(
                this.states,
                rule,
                startTokenIndex,
            ),
        ];
    }

    add (state : MyState) : void {
        if (state.errorCount > 4) {
            state;
        }
        this.states.push(state);
    }

    hasOpenStates () : boolean {
        return this.states.length > 0;
    }

    processLowestErrorCountStates (
        maxErrorCount : number,
        grammar : MyGrammar,
        tokens : MyToken[],
        getStatesExpecting : GetStatesExpectingDelegate,
        tryGetState : TryGetStateDelegate,
        tryGetFinishedStates : TryGetFinishedStatesDelegate,
        addState : (state : MyState) => void,
        onCloseFinishedState : OnCloseFinishedStateDelegate,
    ) : void {
        const lowestErrorCount = this.states[0].errorCount;
        lowestErrorCount;

        /**
         * `stateSet.states` can grow during the loop
         */
        let index = 0;
        //while (this.states.length > 0 && this.states[0].errorCount <= lowestErrorCount) {
        while (index < this.states.length) {
            //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const state = this.states[index];

            if (isFinished(state)) {
                const completedAllExpecting = complete(
                    maxErrorCount,
                    grammar,
                    tokens,
                    state,
                    getStatesExpecting,
                    tryGetState,
                    tryGetFinishedStates,
                    addState
                );
                if (completedAllExpecting) {
                    this.states.splice(index, 1);
                    this.closed.push(state);
                    onCloseFinishedState(state);
                } else {
                    ++index;
                }
            } else {
                const expect = state.rule.symbols[state.dot];
                if (typeof expect == "string") {
                    if (state.rule.name == "BinLogStatement" && state.dot == 1) {
                        state;
                    }
                    const hasAllNextState = predict(maxErrorCount, grammar, tokens, state, expect, tryGetState, tryGetFinishedStates, addState);
                    if (hasAllNextState) {
                        this.states.splice(index, 1);
                        this.closed.push(state);
                    } else {
                        ++index;
                    }
                } else {
                    this.states.splice(index, 1);
                    this.closed.push(state);

                    scan(state, tokens, expect, tryGetState, addState);
                }
            }
        }
    }

    skipUnexpected (
        grammar : MyGrammar,
        tokens : MyToken[],
        tryGetState : TryGetStateDelegate,
        addState : (state : MyState) => void
    ) : void {
        skipUnexpected(
            grammar,
            tokens,
            this.closed,
            tryGetState,
            addState,
            this.skipUnexpectedStartIndex
        );
        this.skipUnexpectedStartIndex = this.closed.length;
    }

    skipExpectation (
        grammar : MyGrammar,
        tokens : MyToken[],
        tryGetState : TryGetStateDelegate,
        addState : (state : MyState) => void
    ) : void {
        skipExpectation(
            grammar,
            tokens,
            this.closed,
            tryGetState,
            addState,
            this.skipExpectationStartIndex
        );
        this.skipExpectationStartIndex = this.closed.length;
    }

    getResults (grammar : MyGrammar) : MyState[] {
        return [
            ...this.closed
                .filter((state) => {
                    return (
                        state.startTokenIndex == 0 &&
                        isFinished(state) &&
                        state.rule.name == grammar.start
                    );
                }),
            ...this.states
                .filter((state) => {
                    return (
                        state.startTokenIndex == 0 &&
                        isFinished(state) &&
                        state.rule.name == grammar.start
                    );
                }),
        ];
    }
}

export function scan (
    state : MyState,
    tokens : MyToken[],
    expect : MyTokenSymbol,
    tryGetState : TryGetStateDelegate,
    addState : (state : MyState) => void
) {
    const token = tokens[state.tokenIndex];
    if (token == undefined || !acceptsToken(expect, token)) {
        return;
    }
    if (tryGetState(state.rule, state.dot+1, state.tokenIndex+1, state.startTokenIndex, state.ident) != undefined) {
        return;
    }
    const nextState : MyState = {
        rule : state.rule,
        dot : state.dot+1,
        tokenIndex : state.tokenIndex+1,
        startTokenIndex : state.startTokenIndex,

        data : push(state.data, token),
        errorCount : state.errorCount,

        ident : state.ident,

        edges : [state],
    };
    ++addStateScan;
    addState(nextState);
}

function isAllError (state : Pick<MyState["data"], "children">) : boolean {
    for (const child of state.children) {
        if ("tokenKind" in child) {
            if (child.errorKind == undefined) {
                return false;
            }
        } else {
            if (!isAllError(child)) {
                return false;
            }
        }
    }

    return true;
}

export function complete2 (
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    other : MyState,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) {

    if (other.rule.name == "BinLogStatement" && other.dot == 1) {
        other;
    }
    if (grammar.extrasRuleName != undefined && state.errorCount > 0 && state.rule.name.startsWith(grammar.extrasRuleName)) {
        //return;
    }
    if (state.data.children.length > 1 && state.data.children.every(child => "errorKind" in child && child.errorKind == "Expected")) {
        /**
         * We don't want a syntax node with many expected tokens missing.
         * Maybe.
         *
         * This feel **VERY** hacky, however.
         *
         * See [this](test-fixture/parse-2/delimiter/custom-delimiter-alphabet-unintuitive-2.txt)
         * for the file that will create many `Expected` tokens in a row.
         */
        //return;
    }
    const nextIdent = (
        //state.rule.name == grammar.extrasRuleName ?
        //other.ident :
        //grammar.extrasRuleName != undefined && state.rule.name.startsWith(grammar.extrasRuleName) ?
        //other.ident :
        other.ident + "-" + state.ident
    );
    if (
        state.data.children.length > 0 &&
        isAllError(state.data)
    ) {
        if (/\$optional\$\d+$/.test(state.rule.name)) {
            return;
        } else if (/\$choice\$\d+$/.test(state.rule.name)) {
            /**
             * Collapse multiple errors into one.
             * Yes, this means we do lose the other errors.
             *
             * 1. State A has errors, nextIdent is X-Y
             * 2. nextIdent is added to state set
             * 3. State B has errors, nextIdent is X-Y
             * 4. But nextIdent already exists in state set. It is not added.
             *
             * So, we lose State B errors.
             */
            //nextIdent = other.ident + "-" + state.rule.runTimeId;
        } else if (/\$optional\$\d+\$repeat1\$\d+$/.test(state.rule.name)) {
            return;
        }
    }

    const existing = tryGetState(other.rule, other.dot+1, state.tokenIndex, other.startTokenIndex, nextIdent);
    if (existing != undefined) {
        const errorCount = existing.edges.reduce(
            (min, s) => Math.min(min, s.errorCount),
            Infinity
        );
        if (state.errorCount < errorCount) {
            existing.edges.push(state);
        } else if (state.errorCount == errorCount) {
            existing.edges.push(state);
        } else {
            existing.edges.push(state);
        }
        return;
    }

    if (state.errorCount > 0) {
        if (
            state.tokenIndex == tokens.length &&
            (
                other.rule.name == grammar.start ||
                other.rule.name.startsWith(grammar.start + "$")
            )
        ) {
            //Do nothing
            //This derivation may or may not be good,
            //But it does lead to a completed result.
        } else {
            const finished = tryGetFinishedStates(state.rule, state.startTokenIndex);
            if (finished.some(f => f.tokenIndex == state.tokenIndex && f.errorCount <= state.errorCount)) {

                //A derivation exists that has fewer errors than this derivation.
                return;
            }
        }
    }

    if (other.data.children.length > 0 && state.data.children.length > 0) {
        const lastChild = other.data.children[other.data.children.length-1];
        const firstChild = state.data.children[0];
        if (
            "tokenKind" in lastChild && grammar.extras.has(lastChild.tokenKind) &&
            "tokenKind" in firstChild && grammar.extras.has(firstChild.tokenKind) &&
            lastChild.errorKind == "Expected" &&
            firstChild.errorKind == "Expected"
        ) {
            /**
             * Last child of other.data is extra.
             * First child of state.data is extra.
             *
             * Both extras are missing/expected.
             *
             * If we concat (other, state), we get two missing/expected whitespaces in a row.
             * We do not want this.
             */
            //return;
        }
    }

    const stateData : MySyntaxNode = {
        ...state.data,
        end : (
            state.data.children.length == 0 ?
            state.data.start :
            state.data.children[state.data.children.length-1].end
        ),
    };

    const shouldInline = stateData.syntaxKind.includes("$") || grammar.inline.has(stateData.syntaxKind);
    const nextData = (
        shouldInline ?
        inlineChild(grammar, other.data, stateData) :
        pushChild(grammar, other.data, stateData)
    );

    const lastToken = tryGetLastLineBreakToken(grammar, other.data);
    const firstToken = tryGetFirstNonExtraToken(grammar, stateData);

    if (
        lastToken != undefined &&
        firstToken != undefined &&
        lastToken.tokenKind == grammar.lineBreakToken &&
        firstToken.errorKind == "Expected"
    ) {
        /**
         * Give,
         * ```sql
         *  CREATE SCHEMA 0e0
         *
         * ```
         *
         * We can either error before the line break, or after the line break.
         * We prefer to error before line breaks.
         */
        return;
    }

    let errorCount = other.errorCount + state.errorCount;
    if (
        !shouldInline &&
        firstToken != undefined &&
        firstToken.errorKind != undefined
    ) {
        //Penalize starting a syntaxNode with an error
        errorCount += 0.1;
    } else if (
        other.rule.name == grammar.start &&
        other.dot == 0 &&
        firstToken != undefined &&
        firstToken.errorKind != undefined
    ) {
        //Penalize starting start syntaxNode with an error
        errorCount += 0.1;
    }

    if (state.rule.name == "StatementTail") {
        other;
    }
    if (
        other.data.children.length > 0 &&
        state.data.children.length > 0
    ) {
        const lastToken = getLastToken(other.data);
        const firstChild = state.data.children[0];

        if (
            "tokenKind" in firstChild &&
            lastToken.errorKind == "Expected" &&
            firstChild.errorKind == "Unexpected" &&
            lastToken.start == lastToken.end &&
            firstChild.start != firstChild.end
        ) {
            /**
             * We can combine the two errors into one.
             */
            const newOtherData : MySyntaxNode = replaceLastToken(
                other.data,
                {
                    ...lastToken,
                    end : firstChild.end,
                    text : firstChild.text,
                }
            );
            const newStateData : MySyntaxNode = {
                ...state.data,
                children : state.data.children.slice(1),
            };

            const newNextData = (
                shouldInline ?
                inlineChild(grammar, newOtherData, newStateData) :
                pushChild(grammar, newOtherData, newStateData)
            );
            //Combined two errors into one
            errorCount -= 1;

            const nextState : MyState = {
                rule : other.rule,
                dot : other.dot+1,
                tokenIndex : state.tokenIndex,
                startTokenIndex : other.startTokenIndex,

                data : newNextData,
                errorCount,

                ident : nextIdent,
                edges : [state],
            };

            ++addStateComplete2;
            addState(nextState);
            return;
        }
    }

    const nextState : MyState = {
        rule : other.rule,
        dot : other.dot+1,
        tokenIndex : state.tokenIndex,
        startTokenIndex : other.startTokenIndex,

        data : nextData,
        errorCount,

        ident : nextIdent,
        edges : [state],
    };

    ++addStateComplete2;
    addState(nextState);
}

/**
 * @returns true if `state` completes all expecting states, false if not
 */
export function complete (
    maxErrorCount : number,
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    getStatesExpecting : GetStatesExpectingDelegate,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) : boolean {
    let completedAllExpecting = true;


    if (
        state.startTokenIndex == 4 &&
        state.rule.name == "extras$1$optional$2$repeat1$3$item$4" &&
        state.errorCount == 1
    ) {
        state;
    }

    if (
        state.startTokenIndex == 3 &&
        state.rule.name == "extras$1$optional$2$repeat1$3"
    ) {
        state;
    }

    if (
        state.startTokenIndex == 3 &&
        state.rule.name == "extras$1" &&
        state.errorCount == 0
    ) {
        state;
    }

    const expecting = getStatesExpecting(state.startTokenIndex, state.rule.name);
    for (const other of expecting) {
        if (state.errorCount + other.errorCount > maxErrorCount) {
            /**
             * This complicates things.
             * When we "close" a state, we assume we've created all possible "next states" for it.
             *
             * But, now, there is a chance we only "partially" close a state.
             */
            completedAllExpecting = false;
            continue;
        }
        complete2(
            grammar,
            tokens,
            state,
            other,
            tryGetState,
            tryGetFinishedStates,
            addState
        );
    }

    return completedAllExpecting;
}

export function predictRule (
    maxErrorCount : number,
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    expect : string,
    rule : MyRule,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) : boolean {
    const existing = tryGetState(rule, 0, state.tokenIndex, state.tokenIndex, rule.runTimeId.toString());
    const hasExisting = existing != undefined;
    if (hasExisting) {
        let handledAllFinished = true;
        const finished = tryGetFinishedStates(rule, state.tokenIndex);
        for (const f of finished) {
            if (f.errorCount + state.errorCount > maxErrorCount) {
                /**
                 * This complicates things.
                 * When we "close" a state, we assume we've created all possible "next states" for it.
                 *
                 * But, now, there is a chance we only "partially" close a state.
                 */
                handledAllFinished = false;
                continue;
            }

            complete2(
                grammar,
                tokens,
                f,
                state,
                tryGetState,
                tryGetFinishedStates,
                addState
            );
        }

        return handledAllFinished;
    }

    const nextState : MyState = {
        rule,
        dot : 0,
        tokenIndex : state.tokenIndex,
        startTokenIndex : state.tokenIndex,

        data : {
            syntaxKind : expect,
            children : [],
            start : (
                state.tokenIndex < tokens.length ?
                tokens[state.tokenIndex].start :
                tokens.length == 0 ?
                0 :
                tokens[state.tokenIndex-1].end
            ),
            end : -1,

            fields : grammar.ruleName2Fields[expect],
        },
        errorCount : 0,

        ident : rule.runTimeId.toString(),

        edges : [state],
    };

    ++addStatePredictRule;
    addState(nextState);
    return true;
}

export function earleyPredict (
    maxErrorCount : number,
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    expect : string,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) : boolean {
    let hasAllNextState = true;
    const rules = grammar.byName[expect];

    for (const rule of rules) {
        const hasNextState = predictRule(
            maxErrorCount,
            grammar,
            tokens,
            state,
            expect,
            rule,
            tryGetState,
            tryGetFinishedStates,
            addState
        );
        hasAllNextState = hasAllNextState && hasNextState;
    }

    return hasAllNextState;
}

export function predict (
    maxErrorCount : number,
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    expect : string,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) : boolean {
    return earleyPredict(
        maxErrorCount,
        grammar,
        tokens,
        state,
        expect,
        tryGetState,
        tryGetFinishedStates,
        addState
    );
}

export function makeStateSet0 (grammar : MyGrammar) : MyStateSet {
    const result : MyStateSet = new MyStateSetImpl();
    const rules = grammar.byName[grammar.start];
    for (const rule of rules) {
        const state : MyState = {
            rule,
            dot : 0,
            tokenIndex : 0,
            startTokenIndex : 0,

            data : {
                syntaxKind : grammar.start,
                children : [],
                start : 0,
                end : -1,

                fields : grammar.ruleName2Fields[grammar.start],
            },
            errorCount : 0,

            ident : rule.runTimeId.toString(),
            edges : [],
        };
        result.add(state);
    }

    return result;
}

export function getResults (
    grammar : MyGrammar,
    resultStateSet : MyStateSet
) {
    const resultStates = resultStateSet.getResults(grammar);
    const minErrorCount = resultStates.reduce(
        (min, cur) => Math.min(min, cur.errorCount),
        Infinity
    );
    const result = resultStates
        .filter(state => state.errorCount == minErrorCount);
        //.map(state => state.data);

    return result;
}

export function parse (
    grammar : MyGrammar,
    tokens : MyToken[]
) : MyState[] {
    const stateSets = new Map<number, MyStateSet>();
    stateSets.set(0, makeStateSet0(grammar));

    function getStatesExpecting (tokenIndex : number, expect : string) : MyState[] {
        let stateSet = stateSets.get(tokenIndex);
        if (stateSet == undefined) {
            stateSet = new MyStateSetImpl();
            stateSets.set(tokenIndex, stateSet);
            //Empty
            return [];
        }

        return stateSet.getStatesExpecting(expect);
    }

    const finishedCompletedStates = new Map<number, MyState[]>();

    function onCloseFinishedState (state : MyState) {
        let arr = finishedCompletedStates.get(state.startTokenIndex);
        if (arr == undefined) {
            arr = [];
            finishedCompletedStates.set(state.startTokenIndex, arr);
        }
        arr.push(state);
    }

    function tryGetFinishedStates (rule : MyRule, startTokenIndex : number) : MyState[] {
        const arr = finishedCompletedStates.get(startTokenIndex);
        if (arr == undefined) {
            return [];
        }
        return arr.filter(item => item.rule == rule);
        // /**
        //  * @todo Store finished rules in some other data structure.
        //  * Like `Map<startTokenIndex, MyState[]>`
        //  *
        //  * Iterating with `while (true)` will cause **very** unnecessary loops to be run.
        //  * Especially when files become thousands of tokens long.
        //  */
        // const results : MyState[] = [];
        // let tokenIndex : number = startTokenIndex;

        // while (true) {
        //     const stateSet = stateSets.get(tokenIndex);
        //     if (stateSet == undefined) {
        //         return results;
        //     }

        //     const arr = stateSet.tryGetFinishedStates(rule, startTokenIndex);
        //     results.push(...arr);

        //     ++tokenIndex;
        // }
    }
    function tryGetState (rule : MyRule, dot : number, tokenIndex : number, startTokenIndex : number, _ident : string) {
        const stateSet = stateSets.get(tokenIndex);
        if (stateSet == undefined) {
            return undefined;
        }

        return stateSet.tryGetState(rule, dot, startTokenIndex, _ident);
    }

    function addState (state : MyState) {
        const stateSet = stateSets.get(state.tokenIndex);
        if (stateSet == undefined) {
            const x = new MyStateSetImpl();
            x.add(state);
            stateSets.set(state.tokenIndex, x);
            return;
        }

        stateSet.add(state);
    }

    let redoCount = 0;
    redoCount;
    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<=tokens.length; ++i) {

        addStateScan;
        addStateSkipExpectation;
        addStateSkipUnexpected;
        addStateComplete2;
        addStatePredictRule;

        const stateSet = stateSets.get(i);
        if (stateSet == undefined) {
            throw new Error(`Unable to find state set for ${i}`);
        }
        if (!stateSet.hasOpenStates()) {
            //throw new Error(`State set ${i} is empty`);
            // for (let j=0; j<=i; ++j) {
            // //for (let j=i-1; j<=i; ++j) {
            //     const tmp = stateSets.get(j);
            //     if (tmp == undefined) {
            //         throw new Error(`State ${j} should be set`);
            //     }
            //     tmp.skipUnexpected(
            //         grammar,
            //         tokens,
            //         tryGetState,
            //         addState
            //     );
            //     tmp.skipExpectation(
            //         grammar,
            //         tokens,
            //         tryGetState,
            //         addState
            //     );
            // }

            // //Start from zero
            // i = -1;
            // ++redoCount;
            // //Go back to previous token
            // //i -= 2;
            continue;
        }

        stateSet.processLowestErrorCountStates(
            redoCount,
            grammar,
            tokens,
            getStatesExpecting,
            tryGetState,
            tryGetFinishedStates,
            addState,
            onCloseFinishedState
        );

        if (i == tokens.length) {
            const result = getResults(grammar, stateSet);
            if (result.length > 0) {
                return result;
            } else {
                for (let j=0; j<=i; ++j) {
                //for (let j=i-1; j<=i; ++j) {
                    const tmp = stateSets.get(j);
                    if (tmp == undefined) {
                        throw new Error(`State ${j} should be set`);
                    }

                    if (j<i) {
                        tmp.skipUnexpected(
                            grammar,
                            tokens,
                            tryGetState,
                            addState
                        );
                    }
                    tmp.skipExpectation(
                        grammar,
                        tokens,
                        tryGetState,
                        addState
                    );
                }

                //Start from zero
                i = -1;
                ++redoCount;
                //Go back to previous token
                //i -= 2;
                continue;
            }
        }

        const nextStateSet = stateSets.get(i+1);
        if (nextStateSet == undefined || !nextStateSet.hasOpenStates()) {
            for (let j=0; j<=i; ++j) {
            //for (let j=i-1; j<=i; ++j) {
                const tmp = stateSets.get(j);
                if (tmp == undefined) {
                    throw new Error(`State ${j} should be set`);
                }
                tmp.skipUnexpected(
                    grammar,
                    tokens,
                    tryGetState,
                    addState
                );
                tmp.skipExpectation(
                    grammar,
                    tokens,
                    tryGetState,
                    addState
                );
            }

            //Start from zero
            i = -1;
            ++redoCount;
            //Go back to previous token
            //i -= 2;
            continue;
        }
    }

    throw new Error(`How did we get here?`);
}

/**
 * This adds states to the next `stateSet`
 */
export function skipUnexpected (
    grammar : MyGrammar,
    tokens : MyToken[],
    states : MyState[],
    tryGetState : TryGetStateDelegate,
    addState : (state : MyState) => void,
    startIndex : number = 0
) {
    grammar;

    for (let i=startIndex; i<states.length; ++i) {
        const state = states[i];

        if (isFinished(state)) {
            continue;
        }

        if (grammar.extrasRuleName != undefined && state.rule.name.startsWith(grammar.extrasRuleName)) {
            //continue;
        }

        const expect = state.rule.symbols[state.dot];
        if (expect == undefined) {
            continue;
        }

        const skippedToken = tokens[state.tokenIndex];

        if (typeof expect == "string") {
            // if (!/\$optional\$\d+$/.test(state.rule.name)) {
            //     continue;
            // }
            // if (tryGetState(state.rule, state.dot, state.tokenIndex+1, state.startTokenIndex, state.ident, false) != undefined) {
            //     continue;
            // }
            // const nextState : MyState = {
            //     rule : state.rule,
            //     dot : state.dot,
            //     tokenIndex : state.tokenIndex+1,
            //     startTokenIndex : state.startTokenIndex,

            //     data : push(
            //         state.data,
            //         {
            //             ...skippedToken,
            //             errorKind : "Unexpected",
            //             text : skippedToken.text,
            //             expectedTokenKind : undefined,
            //         }
            //     ),
            //     errorCount : state.errorCount+1,

            //     ident : state.ident,
            //     edges : [state],
            // };
            // nextState;
            // //state.hasNextState = true;
            // addState(nextState);
            continue;
        }

        if (grammar.cannotUnexpect.has(skippedToken.tokenKind)) {
            continue;
        }

        if (acceptsToken(expect, skippedToken)) {
            //scan() would have accepted the token.
            //There is no error because the token is valid for the expectation.
            continue;
        }

        {
            let i = state.data.children.length-1;
            for (; i>=0; --i) {
                const child = state.data.children[i];
                if ("tokenKind" in child && child.errorKind == "Unexpected") {
                    continue;
                } else {
                    break;
                }
            }

            if (i >= 0) {
                const child = state.data.children[i];
                if ("tokenKind" in child && child.errorKind == "Expected") {
                    if (child.tokenKind == skippedToken.tokenKind) {
                        continue;
                    }
                }
            }
        }

        if (
            (
                grammar.extrasRuleName != undefined && state.rule.name.startsWith(grammar.extrasRuleName) ||
                grammar.extrasNoLineBreakRuleName != undefined && state.rule.name.startsWith(grammar.extrasNoLineBreakRuleName)
            ) &&
            /\$item\$\d+$/.test(state.rule.name)
        ) {
            /**
             * Edge case with extras.
             * `(LineBreak)(Identifier)`
             *
             * If we use `state.dot`, we will still expect an extra token.
             * We will always have `(Unexpected Identifier)(Expected WhiteSpace)`
             *
             * So, we just skip the expectation entirely.
             *
             * This sort-of combines `skipUnexpected()` and `skipExpectation()`.
             * @todo Maybe add a `skipUnexpectedExpectation()` function?
             * @todo Could this be useful for other rules?
             *
             * We need to add **two** next states for extras here.
             */

            if (tryGetState(state.rule, state.dot+1, state.tokenIndex+1, state.startTokenIndex, state.ident) == undefined) {
                const nextState : MyState = {
                    rule : state.rule,
                    dot : state.dot+1,
                    tokenIndex : state.tokenIndex+1,
                    startTokenIndex : state.startTokenIndex,

                    data : push(
                        state.data,
                        {
                            ...skippedToken,
                            errorKind : "Unexpected",
                            text : skippedToken.text,
                            expectedTokenKind : expect.tokenKind,
                        }
                    ),
                    errorCount : state.errorCount+1,

                    ident : state.ident,
                    edges : [state],
                };
                //state.hasNextState = true;
                ++addStateSkipUnexpected;
                addState(nextState);
            }
        }

        if (tryGetState(state.rule, state.dot, state.tokenIndex+1, state.startTokenIndex, state.ident) != undefined) {
            continue;
        }

        const nextState : MyState = {
            rule : state.rule,
            dot : state.dot,
            tokenIndex : state.tokenIndex+1,
            startTokenIndex : state.startTokenIndex,

            data : push(
                state.data,
                {
                    ...skippedToken,
                    errorKind : "Unexpected",
                    text : skippedToken.text,
                    expectedTokenKind : expect.tokenKind,
                }
            ),
            errorCount : state.errorCount+1,

            ident : state.ident,
            edges : [state],
        };
        //state.hasNextState = true;
        ++addStateSkipUnexpected;
        addState(nextState);
    }
}

export function tryGetLastLineBreakToken (grammar : MyGrammar, node : MySyntaxNode) : MyToken|undefined {
    if (node.children.length == 0) {
        return undefined;
    }

    for (let i=node.children.length-1; i>=0; --i) {
        const child = node.children[i];
        if ("tokenKind" in child) {
            if (child.tokenKind == grammar.lineBreakToken) {
                return child;
            }

            if (grammar.extras.has(child.tokenKind)) {
                continue;
            }

            return undefined;
        } else {
            const result = tryGetLastLineBreakToken(grammar, child);
            if (result != undefined) {
                return result;
            }
        }
    }

    return undefined;
}

export function tryGetFirstNonExtraToken (grammar : MyGrammar, node : MySyntaxNode) : MyToken|undefined {
    if (node.children.length == 0) {
        return undefined;
    }

    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<node.children.length; ++i) {
        const child = node.children[i];
        if ("tokenKind" in child) {
            if (grammar.extras.has(child.tokenKind)) {
                continue;
            }
            return child;
        } else {
            const result = tryGetFirstNonExtraToken(grammar, child);
            if (result != undefined) {
                return result;
            }
        }
    }

    return undefined;
}

/**
 * Assumes `MySyntaxNode` always has at least one child
 */
export function getLastToken (node : MySyntaxNode) : MyToken {
    const child = node.children[node.children.length-1];
    if ("tokenKind" in child) {
        return child;
    } else {
        return getLastToken(child);
    }
}

export function tryGetFirstToken (node : MySyntaxNode) : MyToken|undefined {
    if (node.children.length == 0) {
        return undefined;
    }

    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<node.children.length; ++i) {
        const child = node.children[i];
        if ("tokenKind" in child) {
            return child;
        } else {
            const result = tryGetFirstToken(child);
            if (result != undefined) {
                return result;
            }
        }
    }

    return undefined;
}

export function replaceField (fields : Fields, needle : MySyntaxNode|MyToken, newValue : MySyntaxNode|MyToken) : Fields {
    const copy = {...fields};

    for (const [key, value] of Object.entries(copy)) {
        if (value == undefined) {
            continue;
        }

        if (value instanceof Array) {
            for (let i=0; i<value.length; ++i) {
                const item = value[i];
                if (item == needle) {
                    copy[key] = [
                        ...value.slice(0, i),
                        newValue,
                        ...value.slice(i+1),
                    ];
                    return copy;
                }
            }
        } else {
            if (value == needle) {
                copy[key] = newValue;
                return copy;
            }
        }
    }

    return copy;
}

/**
 * Assumes `MySyntaxNode` always has at least one child
 */
export function replaceLastToken (node : MySyntaxNode, newLastToken : MyToken) : MySyntaxNode {
    const child = node.children[node.children.length-1];
    if ("tokenKind" in child) {
        return {
            ...node,
            children : [
                ...node.children.slice(0, node.children.length-1),
                newLastToken,
            ],
            end : newLastToken.end,
            fields : replaceField(
                node.fields,
                child,
                newLastToken,
            ),
        };
    } else {
        const newLastSyntaxNode = replaceLastToken(child, newLastToken);
        return {
            ...node,
            children : [
                ...node.children.slice(0, node.children.length-1),
                newLastSyntaxNode,
            ],
            end : newLastToken.end,
            fields : replaceField(
                node.fields,
                child,
                newLastSyntaxNode,
            ),
        };
    }
}
/**
 * This adds states to the current `stateSet`
 */
export function skipExpectation (
    grammar : MyGrammar,
    tokens : MyToken[],
    states : MyState[],
    tryGetState : TryGetStateDelegate,
    addState : (state : MyState) => void,
    startIndex : number = 0
) {
    /**
     * We go backwards so we do not iterate over our new insertions
     */
    //for (let i=states.length-1; i>=startIndex; --i) {
    for (let i=startIndex; i<states.length; ++i) {
        const state = states[i];
        if (isFinished(state)) {
            continue;
        }
        const expect = state.rule.symbols[state.dot];
        if (expect == undefined || typeof expect == "string") {
            continue;
        }
        if (state.data.children.length > 0) {
            const lastChild = state.data.children[state.data.children.length-1];
            if ("tokenKind" in lastChild) {
                if (lastChild.tokenKind != undefined && grammar.extras.has(lastChild.tokenKind)) {
                    //We do not want to "expect" extras twice in a row
                    //continue;
                }
            }
        }

        if (expect.canExpect === false) {
            continue;
        }

        const token : MyToken = (
            state.tokenIndex < tokens.length ?
            tokens[state.tokenIndex] :
            tokens.length == 0 ?
            {
                tokenKind : "EndOfFile",
                text : "",
                start : 0,
                end : 0,
            } :
            {
                tokenKind : "EndOfFile",
                text : "",
                start : tokens[tokens.length-1].end,
                end : tokens[tokens.length-1].end,
            }
        );

        if (acceptsToken(expect, token)) {
            //scan() would have accepted the token.
            //There is no error because the token is valid for the expectation.
            continue;
        }

        if (grammar.extrasRuleName != undefined && state.rule.name.startsWith(grammar.extrasRuleName)) {
            //continue;
        }

        if (grammar.noLineBreak.has(state.rule.name)) {
            if (token.tokenKind != grammar.lineBreakToken && grammar.extras.has(token.tokenKind)) {
                continue;
            }
        } else {
            if (grammar.extras.has(token.tokenKind)) {
                continue;
            }
        }
        // if (!grammar.noExtras.has(state.rule.name) && grammar.extras.has(token.tokenKind)) {
        //     /**
        //      * Given the SQL, `DELIMITER   `
        //      * We get the tokens `DelimiterSpace, WhiteSpace`
        //      *
        //      * We have the following parses,
        //      * + `DelimiterSpace, (Expected CustomDelimiter), WhiteSpace`
        //      * + `DelimiterSpace, WhiteSpace, (Expected CustomDelimiter)`
        //      *
        //      * We should prefer the latter.
        //      */
        //     continue;
        // }

        {
            /**
             * We increment the `dot` and `tokenIndex` at the same time.
             * This **should** give us "better" errors.
             *
             * Given `(BINLOG)(BINLOG)`, we can get,
             * `(BINLOG)(Expected StringLiteral)`
             *
             * instead of,
             * `(BINLOG)(Expected StringLiteral)(Unexpected BINLOG)`
             *
             * This could possibly a perf nightmare, though
             */

            if (
                !grammar.extras.has(token.tokenKind) &&
                tryGetState(state.rule, state.dot+1, state.tokenIndex+1, state.startTokenIndex, state.ident) == undefined
            ) {

                // const nextState : MyState = {
                //     rule : state.rule,
                //     dot : state.dot+1,
                //     tokenIndex : state.tokenIndex+1,
                //     startTokenIndex : state.startTokenIndex,

                //     data : push(
                //         state.data,
                //         {
                //             tokenKind : expect.tokenKind,
                //             text : token.text,
                //             errorKind : "Expected",
                //             start : token.start,
                //             end : token.end,
                //         }
                //     ),
                //     errorCount : state.errorCount+1,

                //     ident : state.ident,
                //     edges : [state],
                // };

                // ++addStateSkipExpectation;
                // addState(nextState);
            }
        }

        if (tryGetState(state.rule, state.dot+1, state.tokenIndex, state.startTokenIndex, state.ident) != undefined) {
            continue;
        }
        const nextState : MyState = {
            rule : state.rule,
            dot : state.dot+1,
            tokenIndex : state.tokenIndex,
            startTokenIndex : state.startTokenIndex,

            data : push(
                state.data,
                {
                    tokenKind : expect.tokenKind,
                    text : "",
                    errorKind : "Expected",
                    start : token.start,
                    end : token.start,
                }
            ),
            errorCount : state.errorCount+1,

            ident : state.ident,
            edges : [state],
        };

        ++addStateSkipExpectation;
        addState(nextState);
    }
}
