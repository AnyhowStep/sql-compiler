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
    readonly parent : MyState|undefined;
}

export interface StateCollection {
    addState(state : MyState) : void;
    removeBestState() : MyState|undefined;
}

export class MyStateCollection implements StateCollection {
    private errorCount2Arr : {
        start : number,
        arr : MyState[],
    }[] = [];

    addState(state : MyState) : void {
        while (this.errorCount2Arr.length <= state.errorCount) {
            this.errorCount2Arr.push({
                start : 0,
                arr : [],
            });
        }
        const arr = this.errorCount2Arr[state.errorCount];
        if (arr.arr.some(other => {
            return (
                other.rule.runTimeId == state.rule.runTimeId &&
                other.startTokenIndex == state.startTokenIndex &&
                other.dot == state.dot &&
                other.ident == state.ident
            )
        })) {
            //Don't insert duplicates?
            return;
        }
        arr.arr.push(state);
    }

    removeBestState() : MyState|undefined {
        for (const arr of this.errorCount2Arr) {
            const state = arr.arr[arr.start];
            if (state != undefined) {
                ++arr.start;
                return state;
            }
        }

        return undefined;
    }
}

export function makeStateSet0 (grammar : MyGrammar) : MyState[] {
    const result : MyState[] = [];
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
            parent : undefined,
        };
        result.push(state);
    }

    return result;
}

export function recursiveComplete (
    grammar : MyGrammar,
    tokens : MyToken[],
    state : MyState
) : MyState {
    while (state.parent != undefined) {
        state = complete2(
            grammar,
            tokens,
            state,
            state.parent
        );
    }

    return state;
}

export function parse (
    grammar : MyGrammar,
    tokens : MyToken[]
) : MyState {
    const stateSet0 = makeStateSet0(grammar);
    const collection : StateCollection = new MyStateCollection();

    for (const state of stateSet0) {
        collection.addState(state);
    }

    while (true) {
        const state = collection.removeBestState();
        if (state == undefined) {
            break;
        }

        const dfsResult = dfs(grammar, tokens, collection, state);
        if (dfsResult != undefined) {
            const result = recursiveComplete(
                grammar,
                tokens,
                dfsResult
            );
            if (result.rule.name == grammar.start && result.tokenIndex == tokens.length) {
                return result;
            } else {
                collection.addState(result);
            }
        }
    }

    throw new Error(`Could not parse`);
}

export function isFinished (state : MyState) {
    return state.dot == state.rule.symbols.length;
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

export function push (data : MySyntaxNode, token : MyToken) : MySyntaxNode {
    return {
        syntaxKind : data.syntaxKind,
        children : [...data.children, token],

        start : data.start,
        end : data.end,

        fields : data.fields,
    };
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

export function pushChild (grammar : MyGrammar, parent : MySyntaxNode, child : MySyntaxNode) : MySyntaxNode {
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
            end : parent.end,

            fields : mergeFields(parentShape, parent.fields, newFields),
        };
    }
}

export function inlineChild (grammar : MyGrammar, parent : MySyntaxNode, child : MySyntaxNode) : MySyntaxNode {
    const childLabel = grammar.ruleName2Label[child.syntaxKind];
    const parentShape = grammar.ruleName2Shape[grammar.ruleName2Alias[parent.syntaxKind] ?? parent.syntaxKind];

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
export function complete2 (
    grammar : MyGrammar,
    _tokens : MyToken[],
    state : MyState,
    other : MyState,
) : MyState {
    const nextIdent = other.ident + "-" + state.ident;

    const shouldInline = (
        (state.data.syntaxKind.includes("$") && grammar.ruleName2Alias[state.data.syntaxKind] == undefined) ||
        grammar.inline.has(state.data.syntaxKind)
    );
    let errorCount = other.errorCount + state.errorCount;

    const stateDataSyntaxKind = (
        grammar.ruleName2Alias[state.data.syntaxKind] ??
        state.data.syntaxKind
    );

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
                syntaxKind : stateDataSyntaxKind,
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
                parent : other.parent,
            };

            return nextState;
        }
    }

    const stateData : MySyntaxNode = {
        ...state.data,
        end : (
            state.data.children.length == 0 ?
            state.data.start :
            state.data.children[state.data.children.length-1].end
        ),
        syntaxKind : stateDataSyntaxKind,
    };
    const nextData = (
        shouldInline ?
        inlineChild(grammar, other.data, stateData) :
        pushChild(grammar, other.data, stateData)
    );
    const nextState : MyState = {
        rule : other.rule,
        dot : other.dot+1,
        tokenIndex : state.tokenIndex,
        startTokenIndex : other.startTokenIndex,

        data : nextData,
        errorCount,

        ident : nextIdent,
        parent : other.parent,
    };

    return nextState;
}

export function dfs (
    grammar : MyGrammar,
    tokens : MyToken[],
    collection : StateCollection,
    state : MyState,
    depth = 0
) : MyState|undefined {
    if (isFinished(state)) {
        return state;
    }

    if (depth > 30) {
        depth;
    }
    while (!isFinished(state)) {
        const expect = state.rule.symbols[state.dot];
        if (typeof expect == "string") {
            const rules = grammar.byName[expect];

            for (const rule of rules) {
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
                    parent : state,
                };
                if (rule.runTimeId == state.rule.runTimeId) {
                    collection.addState(nextState);
                } else {
                    const nextStateResult = dfs(grammar, tokens, collection, nextState, depth + 1);

                    if (nextStateResult != undefined) {
                        collection.addState(complete2(
                            grammar,
                            tokens,
                            nextStateResult,
                            state
                        ));
                    }
                }
            }

            return undefined;
        } else {
            const token = tokens[state.tokenIndex];
            if (token == undefined || !acceptsToken(expect, token)) {
                //Unexpected/Expected token error
                {
                    const nextState : MyState = {
                        rule : state.rule,
                        dot : state.dot,
                        tokenIndex : state.tokenIndex+1,
                        startTokenIndex : state.startTokenIndex,

                        data : push(
                            state.data,
                            {
                                ...token,
                                errorKind : "Unexpected",
                                text : token.text,
                                expectedTokenKind : expect.tokenKind,
                            }
                        ),
                        errorCount : state.errorCount+1,

                        ident : state.ident,
                        parent : state.parent,
                    };
                    collection.addState(nextState);
                }
                {
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
                        parent : state.parent,
                    };
                    collection.addState(nextState);
                }
                return undefined;
            } else {
                const nextState : MyState = {
                    rule : state.rule,
                    dot : state.dot+1,
                    tokenIndex : state.tokenIndex+1,
                    startTokenIndex : state.startTokenIndex,

                    data : push(state.data, token),
                    errorCount : state.errorCount,

                    ident : state.ident,
                    parent : state.parent,
                };
                state = nextState;
            }
        }
    }

    return state;
}
