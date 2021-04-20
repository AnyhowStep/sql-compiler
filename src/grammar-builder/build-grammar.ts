import {CompiledGrammar, CompiledRule, CompiledShape, CompiledSymbol} from "../compiled-grammar";
import {Grammar, oneOf, optional, repeat, Rule, seq, seqNoFlatten, tokenSymbol} from "./grammar";
import {getVariableInfo, isVisible} from "./node-types";

export interface BuilderState {
    grammar : Grammar,
    compiledRules : CompiledRule[],
    getUniqueName : (name : string) => string,

    ruleName2Label : Record<string, string>;
    extras : string|undefined;
}

export function buildChoice (
    state : BuilderState,
    ruleName : string,
    rules : Rule[],
) : string {
    for (const rule of rules) {
        buildRule(state, ruleName, rule);
    }
    return ruleName;
}

export function buildToken (
    state : BuilderState,
    ruleName : string,
    rule : Rule
) : CompiledSymbol {
    if (typeof rule == "string") {
        if (state.grammar.tokens.includes(rule)) {
            return {
                tokenKind : rule,
                otherTokenKinds : undefined,
            };
        } else {
            return rule;
        }
    }

    switch (rule.ruleKind) {
        case "seq": {
            return buildRule(
                state,
                state.getUniqueName(ruleName + "$seq"),
                rule
            );
        }
        case "choice": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$choice"),
                rule.rules
            );
        }
        case "oneOf": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$oneOf"),
                rule.rules
            );
        }
        case "optional": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$optional"),
                [
                    seq(),
                    rule.rule,
                ]
            );
        }
        case "repeat1": {
            const myName = state.getUniqueName(ruleName + "$repeat1");
            const itemName = state.getUniqueName(myName + "$item");

            buildRule(
                state,
                itemName,
                rule.rule
            );

            return buildChoice(
                state,
                myName,
                [
                    itemName,
                    seq(myName, itemName),
                ]
            );
        }
        case "field": {
            const myName = buildRule(
                state,
                state.getUniqueName(ruleName + "$field"),
                rule.rule
            );
            state.ruleName2Label[myName] = rule.label;
            return myName;
        }
        case "tokenSymbol": {
            return {
                tokenKind : rule.tokenKind,
                otherTokenKinds : rule.otherTokenKinds,
            };
        }
    }
}

export function isTokenRule (state : BuilderState, rule : Rule) {
    if (typeof rule == "string") {
        return state.grammar.tokens.includes(rule);
    } else {
        return rule.ruleKind == "tokenSymbol";
    }
}

export function isEmptySequence (rule : Rule) {
    if (typeof rule == "string") {
        return false;
    } else {
        return rule.ruleKind == "seq" && rule.rules.length == 0;
    }
}

export function buildRule (
    state : BuilderState,
    ruleName : string,
    rule : Rule,
) : string {
    const arr = (
        typeof rule != "string" && rule.ruleKind == "seq" ?
        rule.rules :
        [rule]
    );

    const symbols : CompiledSymbol[] = [];
    let insertExtrasAfter = 0;
    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<arr.length; ++i) {
        let item = arr[i];

        if (
            state.extras != undefined &&
            i == 0
        ) {
            if (typeof item == "string") {
                //TODO?
            } else {
                if (item.ruleKind == "optional") {
                    //Put the extra inside the optional, after item.rule
                    insertExtrasAfter = 1;
                    item = optional(seq(
                        item.rule,
                        state.extras,
                    ));
                } else if (item.ruleKind == "oneOf" && item.rules.some(isEmptySequence)) {
                    //Put the extra inside the optional, after item.rule
                    const extras = state.extras;
                    insertExtrasAfter = 1;
                    item = oneOf(
                        ...item.rules
                            .map(rule => {
                                if (isEmptySequence(rule)) {
                                    return rule;
                                } else {
                                    return seq(
                                        extras,
                                        rule,
                                    );
                                }
                            })
                    );
                } else {
                    //TODO?
                }
            }
        }
        if (
            state.extras != undefined &&
            i > insertExtrasAfter &&
            arr[i] != state.extras &&
            arr[i-1] != state.extras
        ) {
            if (typeof item == "string") {
                symbols.push(state.extras);
            } else {
                if (item.ruleKind == "optional") {
                    item = optional(seq(
                        state.extras,
                        item.rule,
                    ));
                } else if (item.ruleKind == "oneOf" && item.rules.some(isEmptySequence)) {
                    //Put the extra inside the optional, after item.rule
                    const extras = state.extras;
                    item = oneOf(
                        ...item.rules
                            .map(rule => {
                                if (isEmptySequence(rule)) {
                                    return rule;
                                } else {
                                    return seq(
                                        extras,
                                        rule,
                                    );
                                }
                            })
                    );
                } else {
                    symbols.push(state.extras);
                }
            }
        }

        const symbol = buildToken(state, ruleName, item);
        symbols.push(symbol);
    }

    state.compiledRules.push({
        name : ruleName,
        symbols,
    });
    return ruleName;
}

export function buildRuleName2Shape (
    grammar : Pick<CompiledGrammar, "inline"|"rules"|"ruleName2Label">,
    isVisibleDelegate : (grammar : Pick<CompiledGrammar, "inline">, symbol : string, hasMultiStepProduction : boolean) => boolean
) {
    const variableInfos = getVariableInfo(grammar, isVisibleDelegate);

    const ruleName2Shape : Record<string, CompiledShape> = {};
    for (const [ruleName, variableInfo] of Object.entries(variableInfos)) {
        ruleName2Shape[ruleName] = {
            ruleName : variableInfo.ruleName,
            fields : variableInfo.fields,
            children : variableInfo.children,
            hasMultiStepProduction : variableInfo.hasMultiStepProduction,
        };
    }

    return ruleName2Shape;
}

export function buildGrammar (grammar : Grammar) : CompiledGrammar {
    let uniqueId = 0;
    const state : BuilderState = {
        grammar,
        compiledRules : [],
        getUniqueName : (str : string) => {
            ++uniqueId;
            return str + "$" + uniqueId;
        },
        ruleName2Label : {},
        extras : undefined,
    };

    if (grammar.extras.length > 0) {
        state.extras = buildRule(
            state,
            state.getUniqueName("extras"),
            repeat(tokenSymbol(
                grammar.extras[0],
                ...(grammar.extras.slice(1))
            ))
        );
    }

    for (const ruleName of Object.keys(grammar.rules)) {
        const rule = grammar.rules[ruleName];

        if (ruleName == grammar.start && state.extras != undefined) {
            if (typeof rule == "string") {
                buildRule(state, ruleName, seqNoFlatten(seq(), rule, state.extras));
            } else {
                if (rule.ruleKind == "seq") {
                    buildRule(state, ruleName, seqNoFlatten(seq(), ...rule.rules, state.extras));
                } else {
                    buildRule(state, ruleName, seqNoFlatten(seq(), rule, state.extras));
                }
            }
        } else {
            buildRule(state, ruleName, rule);
        }
    }

    const ruleName2Shape = buildRuleName2Shape(
        {
            inline : grammar.inline,
            rules : state.compiledRules,

            ruleName2Label : state.ruleName2Label,
        },
        isVisible
    );

    return {
        tokens : grammar.tokens,
        extras : grammar.extras,

        inline : grammar.inline,
        start : grammar.start,
        extrasRuleName : state.extras,
        rules : state.compiledRules,

        ruleName2Label : state.ruleName2Label,
        ruleName2Shape,
    };
}
/*
const compiled = buildGrammar({
    tokens : ["A", "B", "comment", "whitespace", "linebreak"],
    extras : ["comment", "whitespace", "linebreak"],
    inline : ["foo3", "foo5"],
    start : "start",
    rules : {
        start : choice(
            repeat("foo"),
            seq(repeat("bar"), "B"),
        ),
        foo : seq("A", field("myB", "B")),
        bar : seq("A"),
        foo2 : seq("A", field("myB", optional("B"))),
        foo3 : seq("A", optional(field("myB", "B"))),
        foo4 : seq("foo3"),
        foo5 : seq(field("myField", "A")),
        foo6 : seq(repeat1("foo5")),
        foo7 : seq(field("parent", repeat("foo5"))),
    },
});
const varInfos = getVariableInfo(compiled);
console.log(require("util").inspect(compiled, {
    colors: true,
    depth : 10
}));
console.log(require("util").inspect(varInfos, {
    colors: true,
    depth : 10
}));
console.log("==");
*/
