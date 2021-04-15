import {CompiledShape} from "../compiled-grammar";
import {MyGrammar, MyRule, MyTokenSymbol} from "./grammar";
import {Fields, MySyntaxNode, MyToken} from "./syntax-node";

export interface MyState {
    readonly rule : MyRule;
    readonly dot : number;
    readonly tokenIndex : number;
    readonly startTokenIndex : number;

    readonly data : MySyntaxNode;
    readonly errorCount : number;

    readonly ident : string;
}

export interface MyStateSet {
    readonly states : MyState[];
    readonly completedNullStates : MyState[];
}

export function makeState0 (grammar : MyGrammar) : MyStateSet {
    const result : MyStateSet = {
        states : [],
        completedNullStates : [],
    };
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
        };
        result.states.push(state);
    }

    return result;
}

export function predict (
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState,
    expect : string,
    tryGetState : TryGetStateDelegate,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void
) {
    const rules = grammar.byName[expect];

    for (const rule of rules) {
        const existing = tryGetState(rule, 0, state.tokenIndex, state.tokenIndex, rule.runTimeId.toString());
        if (existing != undefined) {
            /**
             * If the state is a completed null-state,
             * then we need to run its completion on this state.
             */
            if (isFinished(existing)) {
                complete2(
                    grammar,
                    existing,
                    state,
                    hasState,
                    addState
                );
            }
            continue;
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
                    state.tokenIndex >= tokens.length ?
                    tokens[state.tokenIndex-1].end :
                    tokens[state.tokenIndex].start
                ),
                end : -1,

                fields : grammar.ruleName2Fields[expect],
            },
            errorCount : 0,

            ident : rule.runTimeId.toString(),
        };

        addState(nextState);
    }
}

export type TryGetStateDelegate = (
    rule : MyRule,
    dot : number,
    tokenIndex : number,
    startTokenIndex : number,
    ident : string
) => MyState|undefined;

export type HasStateDelegate = (
    rule : MyRule,
    dot : number,
    tokenIndex : number,
    startTokenIndex : number,
    ident : string
) => boolean;

export function parse (
    grammar : MyGrammar,
    tokens : MyToken[]
) : MySyntaxNode[] {
    const stateSets = new Map<number, MyStateSet>();
    stateSets.set(0, makeState0(grammar));

    function getStateSet (tokenIndex : number, expect : string) : MyStateSet {
        let stateSet = stateSets.get(tokenIndex);
        if (stateSet == undefined) {
            stateSet = {
                states : [],
                completedNullStates : [],
            };
            stateSets.set(tokenIndex, stateSet);
            //Empty
            return stateSet;
        }

        const states = stateSet.states.filter(state => {
            return state.rule.symbols[state.dot] === expect;
        });
        return {
            states,
            completedNullStates : stateSet.completedNullStates,
        };
    }

    function hasState (rule : MyRule, dot : number, tokenIndex : number, startTokenIndex : number, ident : string) {
        const stateSet = stateSets.get(tokenIndex);
        if (stateSet == undefined) {
            return false;
        }
        /**
         * @todo Rename this function to `hasStateWithoutError`
         */
        return stateSet.states.some(a => (
            a.rule == rule &&
            a.dot == dot &&
            a.startTokenIndex == startTokenIndex &&
            a.ident == ident
        ));
    }

    function tryGetState (rule : MyRule, dot : number, tokenIndex : number, startTokenIndex : number) {
        const stateSet = stateSets.get(tokenIndex);
        if (stateSet == undefined) {
            return undefined;
        }
        return stateSet.states.find(a => (
            a.rule == rule &&
            a.dot == dot &&
            a.startTokenIndex == startTokenIndex
        ));
    }

    function addState (state : MyState) {
        const stateSet = stateSets.get(state.tokenIndex);
        if (stateSet == undefined) {
            stateSets.set(state.tokenIndex, {
                states : [state],
                completedNullStates : [],
            });
            return;
        }

        stateSet.states.push(state);
    }

    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<tokens.length; ++i) {
        const stateSet = stateSets.get(i);
        if (stateSet == undefined) {
            throw new Error(`Unable to find state set for ${i}`);
        }
        if (stateSet.states.length == 0) {
            throw new Error(`State set ${i} is empty`);
        }

        processStateSet(
            grammar,
            tokens,
            stateSet,
            getStateSet,
            tryGetState,
            hasState,
            addState,
            0
        );

        const nextStateSet = stateSets.get(i+1);
        if (nextStateSet == undefined || nextStateSet.states.length == 0) {
            const stateSetLength = stateSet.states.length;

            //Adds stuff to the next state set
            //We *must* call this first.
            skipUnexpected(
                tokens,
                stateSet,
                hasState,
                addState
            );

            //Adds stuff to the current state set
            //We *must* call this second.
            skipExpectation(
                tokens,
                stateSet,
                hasState,
                addState
            );

            //We *must* call this last.
            processStateSet(
                grammar,
                tokens,
                stateSet,
                getStateSet,
                tryGetState,
                hasState,
                addState,
                stateSetLength
            );

        }
    }

    const resultStateSet = stateSets.get(tokens.length);
    if (resultStateSet == undefined) {
        throw new Error(`Unable to find state set for ${tokens.length}`);
    }
    if (resultStateSet.states.length == 0) {
        throw new Error(`State set ${tokens.length} is empty`);
    }

    processStateSet(
        grammar,
        tokens,
        resultStateSet,
        getStateSet,
        tryGetState,
        hasState,
        addState,
        0
    );

    const resultStates = resultStateSet.states
        .filter((state) => {
            return (
                state.startTokenIndex == 0 &&
                isFinished(state) &&
                state.rule.name == grammar.start
            );
        });
    const minErrorCount = resultStates.reduce(
        (min, cur) => Math.min(min, cur.errorCount),
        Infinity
    );
    const result = resultStates
        .filter(state => state.errorCount == minErrorCount)
        .map(state => state.data);

    if (result.length > 0) {
        return result as MySyntaxNode[];
    }

    let skipExpectationStart = 0;

    while (true) {
        const stateSetLength = resultStateSet.states.length;

        //Adds stuff to the current state set
        //We *must* call this second.
        skipExpectation(
            tokens,
            resultStateSet,
            hasState,
            addState,
            skipExpectationStart
        );

        skipExpectationStart = stateSetLength;

        //We *must* call this last.
        processStateSet(
            grammar,
            tokens,
            resultStateSet,
            getStateSet,
            tryGetState,
            hasState,
            addState,
            stateSetLength
        );

        const resultStates = resultStateSet.states
            .filter((state) => {
                return (
                    state.startTokenIndex == 0 &&
                    isFinished(state) &&
                    state.rule.name == grammar.start
                );
            });
        const minErrorCount = resultStates.reduce(
            (min, cur) => Math.min(min, cur.errorCount),
            Infinity
        );
        const result = resultStates
            .filter(state => state.errorCount == minErrorCount)
            .map(state => state.data);


        if (result.length > 0) {
            return result as MySyntaxNode[];
        }
    }
}

export function processStateSet (
    grammar : MyGrammar,
    tokens : MyToken[],
    stateSet : MyStateSet,
    getStateSet : (tokenIndex : number, expect : string) => MyStateSet,
    tryGetState : TryGetStateDelegate,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void,
    startIndex : number
) {
    /**
     * `stateSet.states` can grow during the loop
     */
    for (let i=startIndex; i<stateSet.states.length; ++i) {
        const state = stateSet.states[i];

        if (isFinished(state)) {
            complete(grammar, stateSet, state, getStateSet, hasState, addState);
        } else {
            const expect = state.rule.symbols[state.dot];
            if (typeof expect == "string") {
                predict(grammar, tokens, state, expect, tryGetState, hasState, addState);
            } else {
                scan(state, tokens, expect, hasState, addState);
            }
        }
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

function push (data : MySyntaxNode, token : MyToken) : MySyntaxNode {
    return {
        syntaxKind : data.syntaxKind,
        children : [...data.children, token],

        start : data.start,
        end : data.end,

        fields : data.fields,
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

function pushChild (grammar : MyGrammar, parent : MySyntaxNode, child : MySyntaxNode) : MySyntaxNode {
    const childLabel = grammar.ruleName2Label[child.syntaxKind];

    if (childLabel == undefined) {
        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, child],

            start : parent.start,
            end : parent.end,

            fields : parent.fields,
        };
    } else {
        const parentShape = grammar.ruleName2Shape[parent.syntaxKind];
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
            end : parent.end,

            fields : mergeFields(parentShape, parent.fields, newFields),
        };
    }
}

function inlineChild (grammar : MyGrammar, parent : MySyntaxNode, child : MySyntaxNode) : MySyntaxNode {
    const childLabel = grammar.ruleName2Label[child.syntaxKind];
    const parentShape = grammar.ruleName2Shape[parent.syntaxKind];

    if (childLabel == undefined) {
        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, ...child.children],

            start : parent.start,
            end : child.end,

            fields : mergeFields(parentShape, parent.fields, child.fields),
        };
    } else {
        const field = parentShape.fields[childLabel];
        const newFields : Fields = {};

        if (field.quantity.multiple) {
            newFields[childLabel] = [...child.children];
        } else {
            const tmp = child.children.filter(item => {
                return "children" in item || item.errorKind != "Unexpected";
            });
            if (tmp.length == 0) {
                if (field.quantity.required) {
                    throw new Error(`${parent.syntaxKind} inlining ${childLabel}:${child.syntaxKind} with ${child.children.length}/${tmp.length} children; but field is required`);
                } else {
                    newFields[childLabel] = undefined;
                }
            } else if (tmp.length == 1) {
                newFields[childLabel] = tmp[0];
            } else {
                throw new Error(`${parent.syntaxKind} inlining ${childLabel}:${child.syntaxKind} with ${child.children.length}/${tmp.length} children`);
            }
        }

        return {
            syntaxKind : parent.syntaxKind,
            children : [...parent.children, ...child.children],

            start : parent.start,
            end : child.end,

            fields : mergeFields(
                parentShape,
                mergeFields(parentShape, parent.fields, child.fields),
                newFields
            ),
        };
    }
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

export function scan (
    state : MyState,
    tokens : MyToken[],
    expect : MyTokenSymbol,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void
) {
    const token = tokens[state.tokenIndex];
    if (token == undefined || !acceptsToken(expect, token)) {
        return;
    }
    if (hasState(state.rule, state.dot+1, state.tokenIndex+1, state.startTokenIndex, state.ident)) {
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
    };
    addState(nextState);
}

export function skipUnexpected (
    tokens : MyToken[],
    stateSet : MyStateSet,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void
) {
    for (const state of stateSet.states) {
        if (isFinished(state)) {
            continue;
        }
        const expect = state.rule.symbols[state.dot];
        if (expect == undefined || typeof expect == "string") {
            continue;
        }
        if (hasState(state.rule, state.dot, state.tokenIndex+1, state.startTokenIndex, state.ident)) {
            continue;
        }

        const skippedToken = tokens[state.tokenIndex];
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
        };
        addState(nextState);
    }
}

/**
 * This adds states to the current `stateSet`
 */
export function skipExpectation (
    tokens : MyToken[],
    stateSet : MyStateSet,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void,
    startIndex : number = 0
) {
    /**
     * We go backwards so we do not iterate over our new insertions
     */
    for (let i=stateSet.states.length-1; i>=startIndex; --i) {
        const state = stateSet.states[i];
        if (isFinished(state)) {
            continue;
        }
        const expect = state.rule.symbols[state.dot];
        if (expect == undefined || typeof expect == "string") {
            continue;
        }
        if (hasState(state.rule, state.dot+1, state.tokenIndex, state.startTokenIndex, state.ident)) {
            continue;
        }

        const token : MyToken = (
            state.tokenIndex < tokens.length ?
            tokens[state.tokenIndex] :
            {
                tokenKind : "EndOfFile",
                text : "",
                start : tokens[tokens.length-1].end,
                end : tokens[tokens.length-1].end,
            }
        );

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
        };
        addState(nextState);
    }
}

export function isFinished (state : MyState) {
    return state.dot == state.rule.symbols.length;
}

export function complete2 (
    grammar : MyGrammar,
    state : MyState,
    other : MyState,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void
) {
    const nextIdent = (
        state.rule.name == grammar.extrasRuleName ?
        other.ident :
        other.ident + "-" + state.ident
    );
    if (hasState(other.rule, other.dot+1, state.tokenIndex, other.startTokenIndex, nextIdent)) {
        return;
    }

    const stateData : MySyntaxNode = {
        ...state.data,
        end : (
            state.data.children.length == 0 ?
            state.data.start :
            state.data.children[state.data.children.length-1].end
        ),
    };

    const nextState : MyState = {
        rule : other.rule,
        dot : other.dot+1,
        tokenIndex : state.tokenIndex,
        startTokenIndex : other.startTokenIndex,

        data : (
            stateData.syntaxKind.includes("$") || grammar.inline.has(stateData.syntaxKind) ?
            inlineChild(grammar, other.data, stateData) :
            pushChild(grammar, other.data, stateData)
        ),
        errorCount : other.errorCount + state.errorCount,

        ident : nextIdent,
    };
    addState(nextState);
}

export function complete (
    grammar : MyGrammar,
    stateSet : MyStateSet,
    state : MyState,
    getStateSet : (tokenIndex : number, expect : string) => MyStateSet,
    hasState : HasStateDelegate,
    addState : (state : MyState) => void
) {
    if (state.tokenIndex == state.startTokenIndex) {
        stateSet.completedNullStates.push(state);
    }

    const startStateSet = getStateSet(state.startTokenIndex, state.rule.name);
    for (const other of startStateSet.states) {
        complete2(
            grammar,
            state,
            other,
            hasState,
            addState
        );
    }
}
