import {CompiledShape} from "../compiled-grammar";
import {MyGrammar, MyRule, MyTokenSymbol} from "./grammar";
import {Fields, MySyntaxNode, MyToken, MyToken2} from "./syntax-node";

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
    errorCount : number;

    readonly ident : string;

    /**
     * Maps push edge to complete edges
     */
    readonly pushEdge : Map<MyState, MyState[]>;
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

export function acceptsToken (expect : MyTokenSymbol, token : MyToken) {
    if (expect.tokenKind == token.tokenKind) {
        return true;
    }
    if (expect.otherTokenKinds == undefined) {
        return false;
    }
    return expect.otherTokenKinds.includes(token.tokenKind);
}

export function consumesUnexpectedToken (expect : MyTokenSymbol, token : MyToken) {
    if (expect.consumeUnexpectedTokenKinds == undefined) {
        return false;
    }

    return expect.consumeUnexpectedTokenKinds.includes(token.tokenKind);
}

export function isFinished (state : MyState) {
    return state.dot == state.rule.symbols.length;
}

export function push (data : MySyntaxNode, token : MyToken2) : MySyntaxNode {
    return {
        syntaxKind : data.syntaxKind,
        children : [...data.children, token],

        start : data.start,
        end : token.end,

        fields : data.fields,
        precedence : data.precedence,
        errorKind : undefined,

        startTokenIndex : data.startTokenIndex,
        endTokenIndex : (
            token.tokenIndex >= 0 ?
            token.tokenIndex + 1 :
            data.endTokenIndex
        ),
    };

    /*
    const lastChild = (
        data.children.length == 0 ?
        undefined :
        data.children[data.children.length-1]
    );
    if (
        //token.errorKind == undefined ||
        lastChild == undefined ||
        "children" in lastChild ||
        lastChild.errorKind == undefined
    ) {
        return {
            syntaxKind : data.syntaxKind,
            children : [...data.children, token],

            start : data.start,
            end : data.end,

            fields : data.fields,
        };
    }

    if (
        token.errorKind == undefined &&
        lastChild.consecutiveErrors != undefined &&
        lastChild.consecutiveErrors.some(token => token.errorKind == undefined)
    ) {
        return {
            syntaxKind : data.syntaxKind,
            children : [...data.children, token],

            start : data.start,
            end : data.end,

            fields : data.fields,
        };
    }

    const leading = data.children.slice(0, data.children.length-1);
    if (lastChild.consecutiveErrors == undefined) {
        return {
            syntaxKind : data.syntaxKind,
            children : [
                ...leading,
                {
                    ...lastChild,
                    consecutiveErrors : [token],
                }
            ],

            start : data.start,
            end : data.end,

            fields : data.fields,
        };
    } else {
        return {
            syntaxKind : data.syntaxKind,
            children : [
                ...leading,
                {
                    ...lastChild,
                    consecutiveErrors : [...lastChild.consecutiveErrors, token],
                }
            ],

            start : data.start,
            end : data.end,

            fields : data.fields,
        };
    }
    //*/
}

export function pushChild (grammar : MyGrammar, parent : MySyntaxNode, child : MySyntaxNode) : MySyntaxNode {
    const childLabel = grammar.ruleName2Label[child.syntaxKind];

    if (childLabel == undefined) {
        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, child],

            start : parent.start,
            end : child.end,

            fields : parent.fields,
            precedence : parent.precedence,
            errorKind : undefined,

            startTokenIndex : parent.startTokenIndex,
            endTokenIndex : child.endTokenIndex,
        };
    } else {
        const parentShape = grammar.ruleName2Shape[grammar.ruleName2Alias[parent.syntaxKind] ?? parent.syntaxKind];
        const field = parentShape.fields[childLabel];
        const newFields : Fields = {};

        if (field.quantity.multiple) {
            newFields[childLabel] = [child];
        } else {
            newFields[childLabel] = child;
        }

        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, child],

            start : parent.start,
            end : child.end,

            fields : mergeFields(parentShape, parent.fields, newFields),
            precedence : parent.precedence,
            errorKind : undefined,

            startTokenIndex : parent.startTokenIndex,
            endTokenIndex : child.endTokenIndex,
        };
    }
}

export function inlineChild (
    grammar : MyGrammar,
    parent : MySyntaxNode,
    child : MySyntaxNode,
    allowedSyntaxKinds : string[] | undefined
) : MySyntaxNode {
    const childLabel = grammar.ruleName2Label[child.syntaxKind];
    const parentShape = grammar.ruleName2Shape[grammar.ruleName2Alias[parent.syntaxKind] ?? parent.syntaxKind];

    const childChildren = (
        allowedSyntaxKinds == undefined ?
        child.children :
        child.children.map((c) : MySyntaxNode|MyToken2 => {
            if ("tokenKind" in c) {
                return c;
            }
            if (allowedSyntaxKinds.includes(c.syntaxKind)) {
                return c;
            }
            return {
                ...c,
                errorKind : "Unexpected",
            };
        })
    );
    if (childLabel == undefined) {
        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, ...childChildren],

            start : parent.start,
            end : child.end,

            fields : mergeFields(parentShape, parent.fields, child.fields),
            precedence : parent.precedence,
            errorKind : undefined,

            startTokenIndex : parent.startTokenIndex,
            endTokenIndex : child.endTokenIndex,
        };
    } else {
        const field = parentShape.fields[childLabel];
        const newFields : Fields = {};

        if (field.quantity.multiple) {
            newFields[childLabel] = [...childChildren];
        } else {
            const tmp = childChildren.filter(item => {
                return "children" in item || item.errorKind != "Unexpected";
            });
            if (tmp.length == 0) {
                if (field.quantity.required) {
                    throw new Error(`${parent.syntaxKind} inlining ${childLabel}:${child.syntaxKind} with ${childChildren.length}/${tmp.length} children; but field is required`);
                } else {
                    newFields[childLabel] = undefined;
                }
            } else if (tmp.length == 1) {
                newFields[childLabel] = tmp[0];
            } else {
                throw new Error(`${parent.syntaxKind} inlining ${childLabel}:${child.syntaxKind} with ${childChildren.length}/${tmp.length} children`);
            }
        }

        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, ...childChildren],

            start : parent.start,
            end : child.end,

            fields : mergeFields(
                parentShape,
                mergeFields(parentShape, parent.fields, child.fields),
                newFields
            ),
            precedence : parent.precedence,
            errorKind : undefined,

            startTokenIndex : parent.startTokenIndex,
            endTokenIndex : child.endTokenIndex,
        };
    }
}

function mergeFields (aShape : CompiledShape, a : Fields, b : Fields) : Fields {
    const result : Fields = {
        ...a,
    };

    for (const key of Object.keys(b)) {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue == undefined) {
            const field = aShape.fields[key];
            if (field.quantity.multiple) {
                if (bValue instanceof Array) {
                    result[key] = bValue;
                } else {
                    result[key] = bValue == undefined ? [] : [bValue];
                }
            } else {
                if (bValue instanceof Array) {
                    throw new Error(`${aShape.ruleName}.${key} cannot be single-value field; trying to merge with array`);
                } else {
                    result[key] = bValue;
                }
            }
        } else if (aValue instanceof Array) {
            if (bValue instanceof Array) {
                result[key] = [...aValue, ...bValue];
            } else {
                result[key] = bValue == undefined ? [...aValue] : [...aValue, bValue];
            }
        } else {
            if (bValue instanceof Array) {
                result[key] = [aValue, ...bValue];
            } else {
                result[key] = bValue == undefined ? [aValue] : [aValue, bValue];
            }
        }
    }

    return result;
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
    _ident : string
) : MyState|undefined {
    return states.find(a => (
        a.rule.runTimeId == rule.runTimeId &&
        a.startTokenIndex == startTokenIndex &&
        //a.ident == ident &&
        a.dot == dot
    ));
}

function tryGetFinishedStates (
    states : readonly MyState[],
    rule : MyRule,
    startTokenIndex : number
) : MyState[] {
    const results = states.filter(a => (
        a.rule.runTimeId == rule.runTimeId &&
        a.startTokenIndex == startTokenIndex &&
        isFinished(a)
    ));
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
    let token = tokens[state.tokenIndex];
    if (token == undefined) {
        return;
    }

    const accepts = acceptsToken(expect, token);
    const consumesUnexpected = (
        accepts ?
        false :
        consumesUnexpectedToken(expect, token)
    );

    if (!accepts && !consumesUnexpected) {
        return;
    }

    if (consumesUnexpected) {
        token = {
            ...token,
            errorKind : "Unexpected",
            expectedTokenKind : expect.tokenKind,
        };
    }

    if (tryGetState(state.rule, state.dot+1, state.tokenIndex+1, state.startTokenIndex, state.ident) != undefined) {
        return;
    }
    const nextState : MyState = {
        rule : state.rule,
        dot : state.dot+1,
        tokenIndex : state.tokenIndex+1,
        startTokenIndex : state.startTokenIndex,

        data : push(state.data, {
            ...token,
            tokenIndex : state.tokenIndex,
        }),
        errorCount : (
            consumesUnexpected ?
            state.errorCount + 1 :
            state.errorCount
        ),

        ident : state.ident,

        pushEdge : new Map<MyState, MyState[]>([[state, []]]),
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

function isAllExpectedError (state : Pick<MyState["data"], "children">) : boolean {
    for (const child of state.children) {
        if ("tokenKind" in child) {
            if (child.errorKind != "Expected") {
                return false;
            }
        } else {
            if (!isAllExpectedError(child)) {
                return false;
            }
        }
    }

    return true;
}

export function complete3 (
    grammar : MyGrammar,
    _tokens : MyToken[],
    state : MyState,
    other : MyState,
) {
    const nextIdent = (
        //state.rule.name == grammar.extrasRuleName ?
        //other.ident :
        //grammar.extrasRuleName != undefined && state.rule.name.startsWith(grammar.extrasRuleName) ?
        //other.ident :
        other.ident + "-" + state.ident
    );

    const stateDataSyntaxKind = (
        grammar.ruleName2Alias[state.data.syntaxKind] ??
        state.data.syntaxKind
    );
    const stateData : MySyntaxNode = {
        ...state.data,
        end : (
            state.data.children.length == 0 ?
            state.data.start :
            state.data.children[state.data.children.length-1].end
        ),
        syntaxKind : stateDataSyntaxKind,
        errorKind : (
            state.rule.allowedSyntaxKinds == undefined ?
            undefined :
            state.rule.allowedSyntaxKinds.includes(state.data.syntaxKind) ?
            undefined :
            "Unexpected"
        ),
    };

    const shouldInline = (
        (state.data.syntaxKind.includes("$") && grammar.ruleName2Alias[state.data.syntaxKind] == undefined) ||
        grammar.inline.has(state.data.syntaxKind)
    );
    const nextData = (
        shouldInline ?
        inlineChild(grammar, other.data, stateData, state.rule.allowedSyntaxKinds) :
        pushChild(grammar, other.data, stateData)
    );

    const firstToken = tryGetFirstToken(stateData);

    let errorCount = other.errorCount + state.errorCount;

    const lastChild = other.data.children[other.data.children.length-1];
    if (
        lastChild != undefined &&
        "tokenKind" in lastChild &&
        firstToken != undefined &&
        grammar.extras.has(lastChild.tokenKind) &&
        firstToken.errorKind == "Expected"
    ) {
        if (lastChild.tokenKind == grammar.lineBreakToken) {
            errorCount += 0.01;
        } else {
            errorCount += firstToken.skipExpectationAfterExtraCost ?? -0.01;
        }
    }

    if (
        //!shouldInline &&
        //stateData.children.length > 1 &&
        state.rule.penalizeErrorStart &&
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
                    tokenIndex : firstChild.tokenIndex,
                }
            );
            const newStateData : MySyntaxNode = {
                ...state.data,
                children : state.data.children.slice(1),
                syntaxKind : stateDataSyntaxKind,
                start : firstChild.end,
                startTokenIndex : firstChild.tokenIndex+1,
            };

            const newNextData = (
                shouldInline ?
                inlineChild(grammar, newOtherData, newStateData, state.rule.allowedSyntaxKinds) :
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

                pushEdge : new Map<MyState, MyState[]>([[other, [state]]]),
            };

            return nextState;
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

        pushEdge : new Map<MyState, MyState[]>([[other, [state]]]),
    };

    return nextState;
}

function getTokens (syntaxNode : MySyntaxNode) : MyToken2[] {
    const result : MyToken2[] = [];
    for (const child of syntaxNode.children) {
        if ("tokenKind" in child) {
            result.push(child);
        } else {
            result.push(...getTokens(child));
        }
    }
    return result;
}

function offsetSyntaxTokenIndex (syntaxNode : MySyntaxNode, offset : number) : MySyntaxNode {
    const children : MySyntaxNode["children"] = [];

    for (const child of syntaxNode.children) {
        if ("tokenKind" in child) {
            children.push({
                ...child,
                tokenIndex : offset + child.tokenIndex,
            });
        } else {
            children.push(offsetSyntaxTokenIndex(child, offset));
        }
    }

    return {
        ...syntaxNode,
        children,

        startTokenIndex : offset + syntaxNode.startTokenIndex,
        endTokenIndex : offset + syntaxNode.endTokenIndex,
    };
}

function offsetStateTokenIndex (state : MyState, offset : number) : MyState {
    const pushEdge : MyState["pushEdge"] = new Map<MyState, MyState[]>();

    for (const [p, completeEdges] of state.pushEdge) {
        pushEdge.set(
            offsetStateTokenIndex(p, offset),
            completeEdges.map(completeEdge => {
                return offsetStateTokenIndex(completeEdge, offset);
            })
        );
    }

    return {
        ...state,
        tokenIndex : state.tokenIndex + offset,
        startTokenIndex : state.startTokenIndex + offset,
        data : offsetSyntaxTokenIndex(state.data, offset),
        pushEdge,
    };
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
    if (state.rule.postParse != undefined) {
        try {
            const postParseStates = parse(
                {
                    ...grammar,
                    start : state.rule.postParse,
                },
                getTokens(state.data)
                    .filter(token => {
                        return token.tokenIndex >= 0;
                    })
                    .map(token => {
                        return {
                            ...token,
                            tokenIndex : undefined,
                            errorKind : undefined,
                            expectedTokenKind : undefined,
                            skipExpectationAfterExtraCost : undefined,
                        };
                    }),
            );
            for (const postParseState of postParseStates) {
                const postParseState2 = offsetStateTokenIndex(
                    postParseState,
                    state.startTokenIndex
                );
                if (postParseState2.startTokenIndex == 0) {
                    postParseState2;
                }
                complete2(
                    grammar,
                    tokens,
                    postParseState2,
                    other,
                    tryGetState,
                    tryGetFinishedStates,
                    addState
                );
            }
            if (postParseStates.length > 0) {
                return;
            }
        } catch (error) {
            error;
        }
    }

    const nextIdent = other.ident + "-" + state.ident;

    const isExtra = grammar.allExtrasSubRuleNames.has(state.rule.name);
    if (
        state.data.children.length > 0 &&
        (
            isExtra ?
            isAllExpectedError(state.data) :
            isAllError(state.data)
        )
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
                //return;
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

    const stateDataSyntaxKind = (
        grammar.ruleName2Alias[state.data.syntaxKind] ??
        state.data.syntaxKind
    );
    const stateData : MySyntaxNode = {
        ...state.data,
        end : (
            state.data.children.length == 0 ?
            state.data.start :
            state.data.children[state.data.children.length-1].end
        ),
        syntaxKind : stateDataSyntaxKind,
    };

    const shouldInline = (
        (state.data.syntaxKind.includes("$") && grammar.ruleName2Alias[state.data.syntaxKind] == undefined) ||
        grammar.inline.has(state.data.syntaxKind)
    );
    const nextData = (
        shouldInline ?
        inlineChild(grammar, other.data, stateData, state.rule.allowedSyntaxKinds) :
        pushChild(grammar, other.data, stateData)
    );

    const lastToken = tryGetLastLineBreakToken(grammar, other.data);
    const firstToken = tryGetFirstToken(stateData);

    if (
        lastToken != undefined &&
        firstToken != undefined &&
        lastToken.tokenKind == grammar.lineBreakToken &&
        firstToken.errorKind == "Expected"
    ) {
        /**
         * Given,
         * ```sql
         *  CREATE SCHEMA 0e0
         *
         * ```
         *
         * We can either error before the line break, or after the line break.
         * We prefer to error before line breaks.
         */
        /**
         * However, there are cases where there is no chance to report
         * the error after a line break. For example,
         * ```
         * DELIMITER A
         * TE SCHEM
         * ```
         *
         * If the above is interpreted as,
         * ```
         * DELIMITER A
         * SELECT TE SCHEM
         * ```
         *
         * Then, we can't report "Expected SELECT" before the line break.
         */
        //return;
    }

    let errorCount = other.errorCount + state.errorCount;

    const lastChild = other.data.children[other.data.children.length-1];
    if (
        lastChild != undefined &&
        "tokenKind" in lastChild &&
        firstToken != undefined &&
        grammar.extras.has(lastChild.tokenKind) &&
        firstToken.errorKind == "Expected"
    ) {
        if (lastChild.tokenKind == grammar.lineBreakToken) {
            errorCount += 0.01;
        } else {
            errorCount += firstToken.skipExpectationAfterExtraCost ?? -0.01;
        }
    }

    if (
        //!shouldInline &&
        //stateData.children.length > 1 &&
        state.rule.penalizeErrorStart &&
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

    const existing = tryGetState(other.rule, other.dot+1, state.tokenIndex, other.startTokenIndex, nextIdent);

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
            //Combined two errors into one
            errorCount -= 1;

            const newOtherData : MySyntaxNode = replaceLastToken(
                other.data,
                {
                    ...lastToken,
                    end : firstChild.end,
                    text : firstChild.text,
                    tokenIndex : firstChild.tokenIndex,
                }
            );
            const newStateData : MySyntaxNode = {
                ...state.data,
                children : state.data.children.slice(1),
                syntaxKind : stateDataSyntaxKind,
                start : firstChild.end,
                startTokenIndex : firstChild.tokenIndex+1,
            };

            //Check if we have (Expected T ... Unexpected T)
            //after combining errors
            // {
            //     const firstNonExtraToken = tryGetFirstNonExtraToken(grammar, newStateData);
            //     if (
            //         firstNonExtraToken != undefined &&
            //         firstNonExtraToken.errorKind == "Unexpected" &&
            //         firstNonExtraToken.tokenKind == lastToken.tokenKind
            //     ) {
            //         //Skip
            //         return;
            //     }
            // }

            if (existing != undefined) {
                // const completeEdges = existing.pushEdge.get(other);
                // if (completeEdges == undefined) {
                //     existing.pushEdge.set(other, [state]);
                // } else {
                //     if (!completeEdges.includes(state)) {
                //         completeEdges.push(state);
                //     }
                // }
                if (errorCount == existing.errorCount) {
                    const completeEdges = existing.pushEdge.get(other);
                    if (completeEdges == undefined) {
                        existing.pushEdge.set(other, [state]);
                    } else {
                        if (!completeEdges.includes(state)) {
                            completeEdges.push(state);
                        }
                    }
                } else if (errorCount < existing.errorCount) {
                    existing.errorCount = errorCount;
                    existing.pushEdge.clear();
                    existing.pushEdge.set(other, [state]);
                }
                return;
            }


            const newNextData = (
                shouldInline ?
                inlineChild(grammar, newOtherData, newStateData, state.rule.allowedSyntaxKinds) :
                pushChild(grammar, newOtherData, newStateData)
            );

            const nextState : MyState = {
                rule : other.rule,
                dot : other.dot+1,
                tokenIndex : state.tokenIndex,
                startTokenIndex : other.startTokenIndex,

                data : newNextData,
                errorCount,

                ident : nextIdent,

                pushEdge : new Map<MyState, MyState[]>([[other, [state]]]),
            };

            ++addStateComplete2;
            addState(nextState);
            return;
        }
    }

    if (existing != undefined) {
        // const completeEdges = existing.pushEdge.get(other);
        // if (completeEdges == undefined) {
        //     existing.pushEdge.set(other, [state]);
        // } else {
        //     if (!completeEdges.includes(state)) {
        //         completeEdges.push(state);
        //     }
        // }
        if (errorCount == existing.errorCount) {
            const completeEdges = existing.pushEdge.get(other);
            if (completeEdges == undefined) {
                existing.pushEdge.set(other, [state]);
            } else {
                if (!completeEdges.includes(state)) {
                    completeEdges.push(state);
                }
            }
        } else if (errorCount < existing.errorCount) {
            existing.errorCount = errorCount;
            existing.pushEdge.clear();
            existing.pushEdge.set(other, [state]);
        }
        return;
    }
    const nextState : MyState = {
        rule : other.rule,
        dot : other.dot+1,
        tokenIndex : state.tokenIndex,
        startTokenIndex : other.startTokenIndex,

        data : nextData,
        errorCount,

        ident : nextIdent,

        pushEdge : new Map<MyState, MyState[]>([[other, [state]]]),
    };

    ++addStateComplete2;
    addState(nextState);
}

/**
 * @returns true if `state` completes all expecting states, false if not
 */
export function complete (
    _maxErrorCount : number,
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    getStatesExpecting : GetStatesExpectingDelegate,
    tryGetState : TryGetStateDelegate,
    tryGetFinishedStates : TryGetFinishedStatesDelegate,
    addState : (state : MyState) => void
) : boolean {
    const expecting = getStatesExpecting(state.startTokenIndex, state.rule.name);
    for (const other of expecting) {
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

    return true;
}

export function predictRule (
    _maxErrorCount : number,
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
        //let handledAllFinished = true;
        const finished = tryGetFinishedStates(rule, state.tokenIndex);
        for (const f of finished) {
            //if (f.errorCount + state.errorCount > maxErrorCount) {
                /**
                 * This complicates things.
                 * When we "close" a state, we assume we've created all possible "next states" for it.
                 *
                 * But, now, there is a chance we only "partially" close a state.
                 */
                //handledAllFinished = false;
                //continue;
            //}

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

        //return handledAllFinished;
        return true;
    }

    const start = (
        state.tokenIndex < tokens.length ?
        tokens[state.tokenIndex].start :
        tokens.length == 0 ?
        0 :
        tokens[state.tokenIndex-1].end
    );

    const nextState : MyState = {
        rule,
        dot : 0,
        tokenIndex : state.tokenIndex,
        startTokenIndex : state.tokenIndex,

        data : {
            syntaxKind : expect,
            children : [],
            start,
            end : start,

            fields : grammar.ruleName2Fields[expect],
            precedence : rule.precedence,
            errorKind : undefined,

            startTokenIndex : state.tokenIndex,
            endTokenIndex : state.tokenIndex,
        },
        errorCount : 0,

        ident : rule.runTimeId.toString(),

        pushEdge : new Map(),
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
                end : 0,

                fields : grammar.ruleName2Fields[grammar.start],
                precedence : rule.precedence,
                errorKind : undefined,

                startTokenIndex : 0,
                endTokenIndex : 0,
            },
            errorCount : 0,

            ident : rule.runTimeId.toString(),

            pushEdge : new Map(),
        };
        result.add(state);
    }

    return result;
}

function getPrecedenceAtTokenIndex (state : MyState, tokenIndex : number) {
    const child = state.data.children.find(child => {
        if ("tokenKind" in child) {
            return child.tokenIndex == tokenIndex;
        }
        return tokenIndex < child.endTokenIndex;
    });
    if (child == undefined) {
        throw new Error(`No child with tokenIndex ${tokenIndex}`);
    }
    if ("tokenKind" in child) {
        return 0;
    }
    return child.precedence;
}

function cmpPrecedence (
    a : MyState,
    b : MyState,
) : number {
    if (
        a.data.children.length == 1 &&
        b.data.children.length == 1 &&
        !("tokenKind" in a.data.children[0]) &&
        !("tokenKind" in b.data.children[0])
    ) {
        const aFirst = a.data.children[0];
        const bFirst = b.data.children[0];
        const aPrec = aFirst.precedence;
        const bPrec = bFirst.precedence;
        if (aPrec != bPrec) {
            if (
                aFirst.children
                    .some(c => "syntaxKind" in c && c.syntaxKind == bFirst.syntaxKind) ||
                bFirst.children
                    .some(c => "syntaxKind" in c && c.syntaxKind == aFirst.syntaxKind)
            ) {
                //Reverse the -1 and 1
                return aPrec < bPrec ? 1 : -1;
            } else {
                return aPrec < bPrec ? -1 : 1;
            }
        }
        return 0;
    }
    //for (let tokenIndex=a.tokenIndex-1; tokenIndex>=a.startTokenIndex; --tokenIndex) {
    for (let tokenIndex=a.startTokenIndex; tokenIndex<a.tokenIndex; ++tokenIndex) {
        const aPrec = getPrecedenceAtTokenIndex(a, tokenIndex);
        const bPrec = getPrecedenceAtTokenIndex(b, tokenIndex);
        if (aPrec == bPrec) {
            continue;
        }
        return aPrec < bPrec ? -1 : 1;
    }
    return 0;
}

function blah (
    grammar : MyGrammar,
    state : MyState,
    depth : number,
    closed : Set<MyState>
) : MyState[] {
    if (closed.has(state)) {
        return [];
    }

    if (state.pushEdge.size == 0) {
        return [state];
    }

    const result : MyState[] = [];

    const nextSet = new Set([...closed, state]);
    for (const [pushEdge, completeEdges] of state.pushEdge) {
        const others = blah(grammar, pushEdge, depth+1, nextSet);

        if (completeEdges.length == 0) {
            for (const other of others) {
                const lastChild = state.data.children[state.data.children.length-1] as MyToken2;
                let expect = other.rule.symbols[other.dot];

                if (lastChild.errorKind == "Expected" && !(expect instanceof Object && "tokenKind" in expect)) {
                    let unexpectedCount = 0;
                    for (const child of state.data.children) {
                        if ("tokenKind" in child && child.errorKind == "Unexpected") {
                            ++unexpectedCount;
                        }
                    }
                    //TODO Why does this happen?
                    expect = other.rule.symbols[other.dot-unexpectedCount];
                }
                if (lastChild.errorKind == "Expected" && !(expect instanceof Object && "tokenKind" in expect)) {
                    throw new Error(JSON.stringify(other));
                }
                const nextState : MyState = {
                    rule : other.rule,
                    dot : other.dot+1,
                    tokenIndex : (
                        lastChild.tokenIndex >= 0 ?
                        other.tokenIndex+1 :
                        other.tokenIndex
                    ),
                    startTokenIndex : other.startTokenIndex,

                    data : push(other.data, lastChild),
                    errorCount : (
                        other.errorCount +
                        (
                            lastChild.errorKind == undefined ?
                            0 :
                            (lastChild.errorKind == "Expected" && expect instanceof Object && "skipExpectationCost" in expect) ?
                            (expect.skipExpectationCost ?? 1) :
                            1
                        )
                    ),

                    ident : other.ident,

                    pushEdge : new Map<MyState, MyState[]>([[other, []]]),
                };
                result.push(nextState);
            }
            continue;
        }

        for (const completeEdge of completeEdges) {
            if (
                completeEdge.startTokenIndex != pushEdge.tokenIndex
            ) {
                continue;
            }
            const states = blah(grammar, completeEdge, depth+1, nextSet);
            for (const other of others) {
                for (const state of states) {
                    result.push(complete3(
                        grammar,
                        [],
                        state,
                        other
                    ));
                }
            }
        }
    }

    let precResult = result;
    if (result.length > 1) {
        precResult = [result[0]];
        for (let i=1; i<result.length; ++i) {
            const r = result[i];

            const cmp = cmpPrecedence(r, precResult[0]);
            if (cmp > 0) {
                precResult = [r];
            } else if (cmp == 0) {
                if (r.ident.includes(result[0].ident)) {
                    //This is a longer path to the same precedence
                } else if (result[0].ident.includes(r.ident)) {
                    /**
                     * This is a shorter path to the same precedence
                     */
                    precResult = [r];
                } else {
                    //Paths are unrelated to the same precedence
                    precResult.push(r);
                }
            }
        }
    }

    const minErrorCount = precResult.reduce(
        (min, cur) => Math.min(min, cur.errorCount),
        Infinity
    );

    const minErrorResult = precResult
        .filter(state => state.errorCount == minErrorCount);

    return minErrorResult;
}

export function getResults2 (
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

export function getResults (
    grammar : MyGrammar,
    resultStateSet : MyStateSet
) {
    const resultStates = resultStateSet.getResults(grammar);
    const arr : MyState[] = [];
    for (const state of resultStates) {
        arr.push(...blah(grammar, state, 0, new Set()));
    }
    const minErrorCount = arr.reduce(
        (min, cur) => Math.min(min, cur.errorCount),
        Infinity
    );
    const result = arr
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
        return arr.filter(item => item.rule.runTimeId == rule.runTimeId);
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
    let lastRedoAt = -1;
    let returnAtRedoCount : undefined|number = undefined;
    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<=tokens.length; ++i) {
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
            // lastRedoAt = i;
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
            const result = (
                returnAtRedoCount == undefined ?
                getResults(grammar, stateSet) :
                redoCount < returnAtRedoCount ?
                [] :
                getResults(grammar, stateSet)
            );
            if (result.length > 0 && returnAtRedoCount == undefined) {
                //TODO Figure ou thow to increase this without making time complexity explode
                returnAtRedoCount = redoCount + 0;
            }
            if (result.length > 0 && returnAtRedoCount != undefined && redoCount >= returnAtRedoCount) {
                return result;
            } else {
                if (i <= lastRedoAt) {
                    throw new Error(`How did we get here? Could not parse`);
                }
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
                lastRedoAt = i;
                i = -1;
                ++redoCount;
                //Go back to previous token
                //i -= 2;
                continue;
            }
        }

        const nextStateSet = stateSets.get(i+1);
        if ((nextStateSet == undefined || !nextStateSet.hasOpenStates()) && i > lastRedoAt) {
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
            lastRedoAt = i;
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
    for (let i=startIndex; i<states.length; ++i) {
        const state = states[i];

        if (isFinished(state)) {
            continue;
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
            grammar.allExtrasSubRuleNames.has(state.rule.name) &&
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
                            tokenIndex : state.tokenIndex,
                        }
                    ),
                    errorCount : state.errorCount + 2,

                    ident : state.ident,

                    pushEdge : new Map<MyState, MyState[]>([[state, []]]),
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
                    tokenIndex : state.tokenIndex,
                }
            ),
            errorCount : state.errorCount + 1,

            ident : state.ident,

            pushEdge : new Map<MyState, MyState[]>([[state, []]]),
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

export function tryGetLastNonExtraToken (grammar : MyGrammar, node : MySyntaxNode) : MyToken|undefined {
    if (node.children.length == 0) {
        return undefined;
    }

    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=node.children.length-1; i>=0; --i) {
        const child = node.children[i];
        if ("tokenKind" in child) {
            if (grammar.extras.has(child.tokenKind)) {
                continue;
            }
            return child;
        } else {
            const result = tryGetLastNonExtraToken(grammar, child);
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
export function replaceLastToken (node : MySyntaxNode, newLastToken : MyToken2) : MySyntaxNode {
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
            endTokenIndex : newLastToken.tokenIndex+1,
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
            endTokenIndex : newLastToken.tokenIndex+1,
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

        const uniqueExtrasName = grammar.ruleName2Extras[state.rule.name];
        const extrasName = (
            uniqueExtrasName == undefined ?
            undefined :
            grammar.customExtrasNameMap[uniqueExtrasName]
        );
        const extrasTokens = (
            extrasName == undefined ?
            grammar.extras :
            grammar.customExtras[extrasName]
        );
        if (uniqueExtrasName != undefined) {

            if (extrasTokens.has(token.tokenKind)) {
                //continue;
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

        if (
            !extrasTokens.has(expect.tokenKind) &&
            state.tokenIndex-1 >= 0 &&
            extrasTokens.has(token.tokenKind) &&
            extrasTokens.has(tokens[state.tokenIndex-1].tokenKind)
        ) {
            /**
             * We have extra . extra
             *
             * We do not want an expect T between two extras
             */
            continue;
        }

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
                    tokenIndex : -1,
                    skipExpectationAfterExtraCost : expect.skipExpectationAfterExtraCost,
                }
            ),
            errorCount : (
                state.errorCount +
                (expect.skipExpectationCost ?? 1)
            ),

            ident : state.ident,

            pushEdge : new Map<MyState, MyState[]>([[state, []]]),
        };

        ++addStateSkipExpectation;
        addState(nextState);
    }
}
