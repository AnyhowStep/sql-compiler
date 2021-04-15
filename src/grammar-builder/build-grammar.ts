import {CompiledGrammar, CompiledRule, CompiledShape, CompiledSymbol} from "../compiled-grammar";
import {Grammar, Rule, seq} from "./grammar";
import {getVariableInfo} from "./node-types";

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
    for (let i=0; i<arr.length; ++i) {
        const item = arr[i];
        const symbol = buildToken(state, ruleName, item);
        symbols.push(symbol);
        if (state.extras != undefined && i < arr.length-1) {
            if (i+1 < arr.length && arr[i+1] === state.extras) {
                /**
                 * Do not push the extras.
                 * We do not want two extras side-by-side.
                 * It makes the grammar ambiguous.
                 *
                 * `extras:* extras:*` is ambiguous.
                 */
            } else if (typeof symbol == "string" && /\$optional\$\d+$/.test(symbol)) {
                /**
                 * We have the following cases,
                 * + `R -> (A):? B C`
                 * + `R -> A (B):? C`
                 *
                 * In these cases, we want to generate,
                 * + `R -> (A extras:*):? B extras:* C`
                 * + `R -> A extras:* (B extras:*):? C`
                 *
                 * Not,
                 * + `R -> (A):? extras:* B extras:* C`
                 * + `R -> A extras:* (B):? extras:* C`
                 *
                 * Otherwise, we might end up with,
                 * + `R -> extras:* B extras:* C`
                 *   We *do not* want to start `R` with `extras:*` because if `R`
                 *   is part of another rule `Q -> X extras:* R`,
                 *   this expands to `Q -> X extras:* extras:* B extras:* C`,
                 *   which is the same as the second case.
                 *
                 * + `R -> A extras:* extras:* C`
                 *   We do not want two `extras:*` side-by-side
                 *   because this makes the grammar ambiguous.
                 *
                 *   Given `A extra C`, did the `extra` match the
                 *   first or second occurrence of `extras:*`?
                 */
                /**
                 * This **should** be the correct rule to modify.
                 */
                const optionalRule = state.compiledRules[state.compiledRules.length - 1];
                optionalRule.symbols.push(state.extras);
            } else {
                symbols.push(state.extras);
            }
        }
    }

    state.compiledRules.push({
        name : ruleName,
        symbols,
    });
    return ruleName;
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
        state.extras = buildChoice(
            state,
            state.getUniqueName("extras"),
            [seq(), ...grammar.extras]
        );
    }

    for (const ruleName of Object.keys(grammar.rules)) {
        const rule = grammar.rules[ruleName];

        buildRule(state, ruleName, rule);
    }

    const variableInfos = getVariableInfo({
        inline : grammar.inline,
        rules : state.compiledRules,

        ruleName2Label : state.ruleName2Label,
    });

    const ruleName2Shape : Record<string, CompiledShape> = {};
    for (const [ruleName, variableInfo] of Object.entries(variableInfos)) {
        ruleName2Shape[ruleName] = {
            ruleName : variableInfo.ruleName,
            fields : variableInfo.fields,
            children : variableInfo.children,
            hasMultiStepProduction : variableInfo.hasMultiStepProduction,
        };
    }

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
