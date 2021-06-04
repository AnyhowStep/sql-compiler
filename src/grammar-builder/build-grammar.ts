import {CompiledField, CompiledGrammar, CompiledRule, CompiledShape, CompiledSymbol} from "../compiled-grammar";
import {choice, ChoiceRule, consumeUnexpected, Grammar, optional, OptionalRule, repeat, Rule, seq, seqNoFlatten, SeqRule, tokenSymbol, TopLevelRuleModifier} from "./grammar";
import {getVariableInfo, isVisible} from "./node-types";

export interface BuilderState {
    grammar : Grammar,
    compiledRules : CompiledRule[],
    getUniqueName : (name : string) => string,

    inline : string[],
    allExtrasSubRuleNames : string[],

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    ruleName2Extras : Record<string, string|undefined>;
    extras : string|undefined;
    customExtrasNameMap : Record<string, string>;
}

export function buildChoice (
    state : BuilderState,
    ruleName : string,
    rules : Rule[],
    uniqueExtrasName : string|undefined,
) : string {
    for (const rule of rules) {
        buildRule(state, ruleName, rule, uniqueExtrasName);
    }
    return ruleName;
}

export function buildToken (
    state : BuilderState,
    ruleName : string,
    rule : Rule,
    uniqueExtrasName : string|undefined,
) : CompiledSymbol {
    if (rule instanceof Object && rule.customExtraName !== undefined) {
        uniqueExtrasName = state.customExtrasNameMap[rule.customExtraName];
    }
    if (typeof rule == "string") {
        if (state.grammar.tokens.includes(rule)) {
            return {
                tokenKind : rule,
                otherTokenKinds : undefined,
                canExpect : true,
                skipExpectationCost : undefined,
                skipExpectationAfterExtraCost : undefined,
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
                uniqueExtrasName
            );
        }
        case "choice": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$choice"),
                rule.rules,
                uniqueExtrasName
            );
        }
        case "oneOf": {
            return buildChoice(
                state,
                state.getUniqueName(ruleName + "$oneOf"),
                rule.rules,
                uniqueExtrasName
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
                uniqueExtrasName
            );
        }
        case "repeat1": {
            const myName = state.getUniqueName(ruleName + "$repeat1");
            const itemName = state.getUniqueName(myName + "$item");

            buildRule(
                state,
                itemName,
                rule.rule,
                uniqueExtrasName
            );

            return buildChoice(
                state,
                myName,
                [
                    itemName,
                    seq(myName, itemName),
                ],
                uniqueExtrasName
            );
        }
        case "field": {
            const myName = buildRule(
                state,
                state.getUniqueName(ruleName + "$field"),
                rule.rule,
                uniqueExtrasName
            );
            state.ruleName2Label[myName] = rule.label;
            return myName;
        }
        case "tokenSymbol": {
            return {
                tokenKind : rule.tokenKind,
                otherTokenKinds : rule.otherTokenKinds,
                canExpect : rule.canExpect !== false,
                consumeUnexpectedTokenKinds : rule.consumeUnexpectedTokenKinds,
                skipExpectationCost : rule.skipExpectationCost,
                skipExpectationAfterExtraCost : rule.skipExpectationAfterExtraCost,
            };
        }
        case "alias": {
            const myName = buildRule(
                state,
                state.getUniqueName(ruleName + "$alias"),
                rule.rule,
                uniqueExtrasName
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
    uniqueExtrasName : string|undefined,
) : string {
    if (rule instanceof Object && rule.customExtraName !== undefined) {
        uniqueExtrasName = state.customExtrasNameMap[rule.customExtraName];
    }
    state.ruleName2Extras[ruleName] = uniqueExtrasName;

    const arr = (
        typeof rule != "string" && rule.ruleKind == "seq" ?
        rule.rules :
        [rule]
    );

    const symbols : CompiledSymbol[] = [];
    let insertExtrasAfter = 0;
    const myExtras = uniqueExtrasName;

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
                        if (isSeqRule(item.rule) && item.rule.rules.length > 0 && typeof item.rule.rules[0] == "string" && state.allExtrasSubRuleNames.includes(item.rule.rules[0])) {
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
                            if (isSeqRule(item.rule) && item.rule.rules.length > 0 && typeof item.rule.rules[0] == "string" && state.allExtrasSubRuleNames.includes(item.rule.rules[0])) {
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

        const symbol = buildToken(state, ruleName, item, uniqueExtrasName);
        symbols.push(symbol);
    }

    state.compiledRules.push({
        name : ruleName,
        symbols,
        precedence : (
            typeof rule == "string" ?
            0 :
            (rule.precedence ?? 0)
        ),
        penalizeErrorStart : (
            typeof rule == "string" ?
            //TODO Maybe true?
            true :
            (rule.penalizeErrorStart ?? true)
        ),
        allowedSyntaxKinds : (
            typeof rule == "string" ?
            undefined :
            rule.allowedSyntaxKinds
        ),
    });
    return ruleName;
}

function fromEntries<T = any>(entries: Iterable<readonly [PropertyKey, T]>): { [k: string]: T } {
    return [...entries]
        .reduce(
            (obj, [key, val]) => {
                obj[key as any] = val;
                return obj;
            },
            {} as Record<PropertyKey, T>
        );
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

        inline : [...grammar.inline],
        allExtrasSubRuleNames : [],

        ruleName2Alias : {},
        ruleName2Label : {},
        ruleName2Extras : {},
        extras : undefined,
        customExtrasNameMap : {},
    };

    if (grammar.extras.length > 0) {
        const uniqueExtrasName = buildRule(
            state,
            state.getUniqueName("extras"),
            repeat(tokenSymbol(
                grammar.extras[0],
                ...(grammar.extras.slice(1))
            )),
            undefined
        );
        state.extras = uniqueExtrasName;

        for (const [customExtraName, customExtraTokens] of Object.entries(grammar.customExtras)) {
            const uniqueCustomExtraName = buildRule(
                state,
                state.getUniqueName(customExtraName),
                repeat(consumeUnexpected(
                    tokenSymbol(
                        /**
                         * @todo Find an appropriate token kind for the case where `customExtraTokens` is empty array.
                         */
                        customExtraTokens[0] ?? "",
                        ...(customExtraTokens.slice(1))
                    ),
                    grammar.extras
                        .filter(e => !customExtraTokens.includes(e))
                )),
                undefined
            );
            state.customExtrasNameMap[customExtraName] = uniqueCustomExtraName;
            state.customExtrasNameMap[uniqueCustomExtraName] = customExtraName;
        }

        //All rules built so far are extras
        state.allExtrasSubRuleNames.push(
            ...state.compiledRules.map(rule => rule.name),
        );
    }

    for (const ruleName of Object.keys(grammar.rules)) {
        const ruleOrModifier = grammar.rules[ruleName];

        const modifier : TopLevelRuleModifier = (
            ruleOrModifier instanceof Object && "isTopLevelRuleModifier" in ruleOrModifier ?
            ruleOrModifier :
            {
                isTopLevelRuleModifier : true,
                rule : ruleOrModifier,
            }
        );
        const rule = modifier.rule;

        const myExtras = (
            typeof rule == "string" || rule.customExtraName == undefined ?
            state.extras :
            state.customExtrasNameMap[rule.customExtraName]
        );

        if (modifier.inline === true) {
            state.inline.push(ruleName);
        }

        if (ruleName == grammar.start && myExtras != undefined) {
            if (typeof rule == "string") {
                buildRule(state, ruleName, seqNoFlatten(myExtras, rule, myExtras), myExtras);
            } else {
                if (rule.ruleKind == "seq") {
                    buildRule(state, ruleName, seqNoFlatten(myExtras, ...rule.rules, myExtras), myExtras);
                } else if (rule.ruleKind == "optional") {
                    buildRule(
                        state,
                        ruleName,
                        choice(
                            myExtras,
                            seqNoFlatten(myExtras, rule.rule, myExtras),
                        ),
                        myExtras
                    );
                } else {
                    buildRule(state, ruleName, seqNoFlatten(myExtras, rule, myExtras), myExtras);
                }
            }
        } else {
            if (isChoiceRule(rule)) {
                buildChoice(
                    state,
                    ruleName,
                    rule.rules,
                    myExtras
                );
            } else {
                buildRule(state, ruleName, rule, myExtras);
            }
        }
    }

    const ruleName2Shape = buildRuleName2Shape(
        {
            inline : state.inline,
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
        customExtras : grammar.customExtras,
        cannotUnexpect : grammar.cannotUnexpect,

        inline : state.inline,
        start : grammar.start,
        extrasRuleName : state.extras,
        customExtrasNameMap : state.customExtrasNameMap,
        allExtrasSubRuleNames : state.allExtrasSubRuleNames,
        rules : state.compiledRules,

        ruleName2Alias : state.ruleName2Alias,
        ruleName2Label : state.ruleName2Label,
        ruleName2Shape,
        ruleName2Extras : state.ruleName2Extras,
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
