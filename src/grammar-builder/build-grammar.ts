import {CompiledField, CompiledGrammar, CompiledRule, CompiledShape, CompiledSymbol} from "../compiled-grammar";
import {choice, ChoiceRule, Grammar, optional, OptionalRule, repeat, Rule, seq, seqNoFlatten, SeqRule, tokenSymbol} from "./grammar";
import {getVariableInfo, isVisible} from "./node-types";

export interface BuilderState {
    grammar : Grammar,
    compiledRules : CompiledRule[],
    getUniqueName : (name : string) => string,

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    extras : string|undefined;
    extrasNoLineBreak : string|undefined;
}

export function buildChoice (
    state : BuilderState,
    ruleName : string,
    rules : Rule[],
    noLineBreak : boolean,
) : string {
    for (const rule of rules) {
        buildRule(state, ruleName, rule, noLineBreak);
    }
    return ruleName;
}

export function buildToken (
    state : BuilderState,
    ruleName : string,
    rule : Rule,
    noLineBreak : boolean,
) : CompiledSymbol {
    if (typeof rule == "string") {
        if (state.grammar.tokens.includes(rule)) {
            return {
                tokenKind : rule,
                otherTokenKinds : undefined,
                canExpect : true,
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
                rule,
                noLineBreak
            );
        }
        case "choice": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$choice"),
                rule.rules,
                noLineBreak
            );
        }
        case "oneOf": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$oneOf"),
                rule.rules,
                noLineBreak
            );
        }
        case "optional": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$optional"),
                [
                    seq(),
                    rule.rule,
                ],
                noLineBreak
            );
        }
        case "repeat1": {
            const myName = state.getUniqueName(ruleName + "$repeat1");
            const itemName = state.getUniqueName(myName + "$item");

            buildRule(
                state,
                itemName,
                rule.rule,
                noLineBreak
            );

            return buildChoice(
                state,
                myName,
                [
                    itemName,
                    seq(myName, itemName),
                ],
                noLineBreak
            );
        }
        case "field": {
            const myName = buildRule(
                state,
                state.getUniqueName(ruleName + "$field"),
                rule.rule,
                noLineBreak
            );
            state.ruleName2Label[myName] = rule.label;
            return myName;
        }
        case "tokenSymbol": {
            return {
                tokenKind : rule.tokenKind,
                otherTokenKinds : rule.otherTokenKinds,
                canExpect : rule.canExpect !== false,
            };
        }
        case "alias": {
            const myName = buildRule(
                state,
                state.getUniqueName(ruleName + "$alias"),
                rule.rule,
                noLineBreak
            );
            state.ruleName2Alias[myName] = rule.alias;
            return myName;
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

export function isOptionalRule (rule : Rule) : rule is OptionalRule {
    return typeof rule != "string" && rule.ruleKind == "optional";
}

export function isSeqRule (rule : Rule) : rule is SeqRule {
    return typeof rule != "string" && rule.ruleKind == "seq";
}

export function isChoiceRule (rule : Rule) : rule is ChoiceRule {
    return typeof rule != "string" && rule.ruleKind == "choice";
}

export function isEmptySequence (rule : Rule) {
    if (typeof rule == "string") {
        return false;
    } else {
        return rule.ruleKind == "seq" && rule.rules.length == 0;
    }
}

export function recursivePushFront (item : OptionalRule, extras : string) : OptionalRule {
    if (isSeqRule(item.rule)) {
        const first = item.rule.rules[0];
        if (isOptionalRule(first)) {
            return optional(seq(
                recursivePushFront(first, extras),
                ...item.rule.rules.slice(1),
            ));
        }
    }

    return optional(seq(
        extras,
        item.rule,
    ));
}

export function recursivePushBack (item : OptionalRule, extras : string) : OptionalRule {
    if (isSeqRule(item.rule)) {
        const last = item.rule.rules[item.rule.rules.length-1];
        if (isOptionalRule(last)) {
            return optional(seq(
                ...item.rule.rules.slice(0, item.rule.rules.length-1),
                recursivePushBack(last, extras),
            ));
        }
    }

    return optional(seq(
        item.rule,
        extras,
    ));
}

export function buildRule (
    state : BuilderState,
    ruleName : string,
    rule : Rule,
    noLineBreak : boolean,
) : string {
    if (noLineBreak && !state.grammar.noLineBreak.includes(ruleName)) {
        state.grammar.noLineBreak.push(ruleName);
    }

    const arr = (
        typeof rule != "string" && rule.ruleKind == "seq" ?
        rule.rules :
        [rule]
    );

    const symbols : CompiledSymbol[] = [];
    let insertExtrasAfter = 0;
    const myExtras = (
        noLineBreak ?
        state.extrasNoLineBreak :
        state.extras
    );

    //eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i=0; i<arr.length; ++i) {
        let item = arr[i];

        if (
            myExtras != undefined &&
            i == 0 &&
            arr.length > 1
        ) {
            if (typeof item == "string") {
                //TODO?
            } else {
                if (item.ruleKind == "optional") {
                    const nextRule = arr[i+1];
                    if (typeof nextRule == "string") {
                        if (isSeqRule(item.rule) && item.rule.rules.length > 0 && item.rule.rules[0] == myExtras) {
                            //Already starts with extra
                            //TODO?
                        } else {
                            //Put the extra inside the optional, after item.rule
                            insertExtrasAfter = 1;
                            item = recursivePushBack(item, myExtras);
                        }
                    } else {
                        if (nextRule.ruleKind == "optional") {
                            //Do nothing
                        } else {
                            if (isSeqRule(item.rule) && item.rule.rules.length > 0 && item.rule.rules[0] == myExtras) {
                                //Already starts with extra
                                //TODO?
                            } else {
                                //Put the extra inside the optional, after item.rule
                                insertExtrasAfter = 1;
                                item = recursivePushBack(item, myExtras);
                            }
                        }
                    }
                } else {
                    //TODO?
                }
            }
        }
        if (
            myExtras != undefined &&
            i > insertExtrasAfter &&
            arr[i] != myExtras &&
            arr[i-1] != myExtras
        ) {
            if (typeof item == "string") {
                symbols.push(myExtras);
            } else {
                if (item.ruleKind == "optional") {
                    item = recursivePushFront(item, myExtras);
                } else {
                    symbols.push(myExtras);
                }
            }
        }

        const symbol = buildToken(state, ruleName, item, noLineBreak);
        symbols.push(symbol);
    }

    state.compiledRules.push({
        name : ruleName,
        symbols,
    });
    return ruleName;
}

function fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T } {
    return [...entries]
        .reduce(
            (obj, [key, val]) => {
                obj[key as any] = val
                return obj
            },
            {} as Record<PropertyKey, T>
        )
}

export function buildRuleName2Shape (
    grammar : Pick<CompiledGrammar, "inline"|"rules"|"ruleName2Alias"|"ruleName2Label">,
    isVisibleDelegate : (grammar : Pick<CompiledGrammar, "inline"|"ruleName2Alias">, symbol : string, hasMultiStepProduction : boolean) => boolean
) {
    const variableInfos = getVariableInfo(grammar, isVisibleDelegate);

    const ruleName2Shape : Record<string, CompiledShape> = {};
    for (const [ruleName, variableInfo] of Object.entries(variableInfos)) {
        ruleName2Shape[ruleName] = {
            ruleName : variableInfo.ruleName,
            fields : fromEntries(
                Object.entries(variableInfo.fields)
                    .map(([label, field]) : [string, CompiledField] => {
                        return [
                            label,
                            {
                                ...field,
                                types : [...field.types],
                            }
                        ];
                    })
            ),
            children : {
                ...variableInfo.children,
                types : [...variableInfo.children.types]
            },
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
        ruleName2Alias : {},
        ruleName2Label : {},
        extras : undefined,
        extrasNoLineBreak : undefined,
    };

    if (grammar.extras.length > 0) {
        const extras = buildRule(
            state,
            state.getUniqueName("extras"),
            repeat(tokenSymbol(
                grammar.extras[0],
                ...(grammar.extras.slice(1))
            )),
            false
        );

        const extraTokensNoLineBreak = grammar.extras
            .filter(tokenKind => tokenKind != grammar.lineBreakToken)
        const extrasNoLineBreak = buildRule(
            state,
            state.getUniqueName("extrasNoLineBreak"),
            repeat(tokenSymbol(
                extraTokensNoLineBreak[0],
                ...(extraTokensNoLineBreak.slice(1))
            )),
            false
        );

        /**
         * We assign to `state.extras` and `state.extrasNoLineBreak`
         * **after** building the rules.
         */
        state.extras = extras;
        state.extrasNoLineBreak = extrasNoLineBreak;

    }

    for (const ruleName of Object.keys(grammar.rules)) {
        const rule = grammar.rules[ruleName];
        const noLineBreak = grammar.noLineBreak.includes(ruleName);
        const myExtras = (
            noLineBreak ?
            state.extrasNoLineBreak :
            state.extras
        );

        if (ruleName == grammar.start && myExtras != undefined) {
            if (typeof rule == "string") {
                buildRule(state, ruleName, seqNoFlatten(myExtras, rule, myExtras), noLineBreak);
            } else {
                if (rule.ruleKind == "seq") {
                    buildRule(state, ruleName, seqNoFlatten(myExtras, ...rule.rules, myExtras), noLineBreak);
                } else if (rule.ruleKind == "optional") {
                    buildRule(
                        state,
                        ruleName,
                        choice(
                            myExtras,
                            seqNoFlatten(myExtras, rule.rule, myExtras),
                        ),
                        noLineBreak
                    );
                } else {
                    buildRule(state, ruleName, seqNoFlatten(myExtras, rule, myExtras), noLineBreak);
                }
            }
        } else {
            if (isChoiceRule(rule)) {
                buildChoice(
                    state,
                    ruleName,
                    rule.rules,
                    noLineBreak
                );
            } else {
                buildRule(state, ruleName, rule, noLineBreak);
            }
        }
    }

    const ruleName2Shape = buildRuleName2Shape(
        {
            inline : grammar.inline,
            rules : state.compiledRules,

            ruleName2Alias : state.ruleName2Alias,
            ruleName2Label : state.ruleName2Label,
        },
        isVisible
    );

    return {
        tokens : grammar.tokens,
        extras : grammar.extras,
        lineBreakToken : grammar.lineBreakToken,
        cannotUnexpect : grammar.cannotUnexpect,

        noLineBreak : grammar.noLineBreak,
        inline : grammar.inline,
        start : grammar.start,
        extrasRuleName : state.extras,
        extrasNoLineBreakRuleName : state.extrasNoLineBreak,
        rules : state.compiledRules,

        ruleName2Alias : state.ruleName2Alias,
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
