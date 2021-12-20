
export function seqNoFlatten (
    ...rules : Rule[]
) : RuleObj {
    return {
        ruleKind : "seq",
        rules,
    };
}

function canFlatten (ruleObj : RuleObj) {
    return ruleObj.precedence == undefined && ruleObj.customExtraName == undefined;
}

export function seq<R extends Rule> (
    rule : R
) : R;
export function seq (
    ...rules : Rule[]
) : RuleObj;
export function seq (
    ...rules : Rule[]
) : Rule {
    const flattened : Rule[] = [];
    for (const rule of rules) {
        if (typeof rule != "string" && rule.ruleKind == "seq" && canFlatten(rule)) {
            flattened.push(...rule.rules);
        } else {
            flattened.push(rule);
        }
    }

    if (flattened.length == 1) {
        return flattened[0];
    }

    return {
        ruleKind : "seq",
        rules : flattened,
    };
}

export function choice<R extends Rule> (
    rule : R
) : R;
export function choice (
    ...rules : Rule[]
) : RuleObj;
export function choice (
    ...rules : Rule[]
) : Rule {
    const flattened : Rule[] = [];
    for (const rule of rules) {
        if (typeof rule != "string" && rule.ruleKind == "choice" && canFlatten(rule)) {
            flattened.push(...rule.rules);
        } else {
            flattened.push(rule);
        }
    }

    if (flattened.length == 1) {
        return flattened[0];
    }

    return {
        ruleKind : "choice",
        rules : flattened,
    };
}

export function optional (
    rule : Rule,
) : OptionalRule {
    if (typeof rule != "string" && rule.ruleKind == "optional") {
        return rule;
    }

    return {
        ruleKind : "optional",
        rule,
    };
}

export function optionalNoSkipAllErrors (
    rule : Rule,
) : OptionalRule {
    if (typeof rule != "string" && rule.ruleKind == "optional") {
        return rule;
    }

    return {
        ruleKind : "optional",
        rule,
        noSkipIfAllError : true,
    };
}

export function repeat (
    rule : Rule,
) : RuleObj {
    return optional(repeat1(rule));
}

export function repeatNoSkipIfAllError (
    rule : Rule,
) : RuleObj {
    return optionalNoSkipAllErrors(repeat1(rule));
}

export function repeat1 (
    rule : Rule,
) : Repeat1Rule {
    return {
        ruleKind : "repeat1",
        rule,
    };
}

export function field (
    label : string,
    rule : Rule,
) : RuleObj {
    if (typeof rule != "string" && rule.ruleKind == "optional") {
        return optional(field(label, rule.rule));
    }

    if (typeof rule != "string" && rule.ruleKind == "repeat1") {
        return repeat1(field(label, rule.rule));
    }

    return {
        ruleKind : "field",
        label,
        rule,
    };
}

export function getTokenKinds (rule : TokenSymbolRule) {
    return [
        rule.tokenKind,
        ...(rule.otherTokenKinds ?? []),
    ];
}

export function tokenSymbol (
    tokenKind : string,
    ...otherTokenKinds : string[]
) : TokenSymbolRule {
    if (otherTokenKinds.length == 0) {
        return {
            ruleKind : "tokenSymbol",
            tokenKind,
            otherTokenKinds : undefined,
            consumeUnexpectedTokenKinds : undefined,
            consumeUnexpectedCost : undefined,
            skipExpectationCost : undefined,
            skipExpectationAfterExtraCost : undefined,
        };
    } else {
        return {
            ruleKind : "tokenSymbol",
            tokenKind,
            otherTokenKinds,
            consumeUnexpectedTokenKinds : undefined,
            consumeUnexpectedCost : undefined,
            skipExpectationCost : undefined,
            skipExpectationAfterExtraCost : undefined,
        };
    }
}

export function consumeUnexpected (
    tokenSymbolRule : TokenSymbolRule,
    consumeUnexpectedTokenKinds : string[],
    consumeUnexpectedCost? : number
) : TokenSymbolRule {
    return {
        ...tokenSymbolRule,
        consumeUnexpectedTokenKinds : [
            ...(
                tokenSymbolRule.consumeUnexpectedTokenKinds == undefined ?
                [] :
                tokenSymbolRule.consumeUnexpectedTokenKinds
            ),
            ...consumeUnexpectedTokenKinds,
        ],
        consumeUnexpectedCost : (consumeUnexpectedCost ?? tokenSymbolRule.consumeUnexpectedCost),
    };
}

export function tokenSymbol2 (
    tokenSymbolRule : TokenSymbolRule,
    ...otherTokenKinds : string[]
) : TokenSymbolRule {
    if (otherTokenKinds.length == 0) {
        return tokenSymbolRule;
    }

    if (tokenSymbolRule.otherTokenKinds == undefined) {
        return {
            ...tokenSymbolRule,
            otherTokenKinds,
        };
    } else {
        return {
            ...tokenSymbolRule,
            otherTokenKinds : [...tokenSymbolRule.otherTokenKinds, ...otherTokenKinds],
        };
    }
}

export function cannotExpect (
    tokenSymbolRule : string|TokenSymbolRule
) : TokenSymbolRule {
    if (typeof tokenSymbolRule == "string") {
        tokenSymbolRule = tokenSymbol(tokenSymbolRule);
    }

    return {
        ...tokenSymbolRule,
        canExpect : false,
    };
}

export function skipExpectationCost (skipExpectationCost : number, tokenSymbolRule : string|TokenSymbolRule) : TokenSymbolRule {
    if (typeof tokenSymbolRule == "string") {
        tokenSymbolRule = tokenSymbol(tokenSymbolRule);
    }

    return {
        ...tokenSymbolRule,
        skipExpectationCost,
    };
}

export function skipExpectationAfterExtraCost (skipExpectationAfterExtraCost : number, tokenSymbolRule : string|TokenSymbolRule) : TokenSymbolRule {
    if (typeof tokenSymbolRule == "string") {
        tokenSymbolRule = tokenSymbol(tokenSymbolRule);
    }

    return {
        ...tokenSymbolRule,
        skipExpectationAfterExtraCost,
    };
}

export function alias (alias : string, rule : Rule) : AliasRule {
    return {
        ruleKind : "alias",
        alias,
        rule,
    };
}

export function precedence (prec : number, rule : RuleObj) : RuleObj {
    return {
        ...rule,
        precedence : prec,
    };
}

export function disablePenalizeErrorStart (rule : RuleObj) : RuleObj {
    return {
        ...rule,
        penalizeErrorStart : false,
    };
}
/**
 *
 * This should only ever be used like so,
 * `allowedSyntaxKinds(choice())` or,
 * `allowedSyntaxKinds(seq())` or,
 * `allowedSyntaxKinds(SyntaxKind.SomeChoiceRule)`
 */
export function allowedSyntaxKinds (
    allowedSyntaxKinds : string[],
    rule : Rule
) : RuleObj {
    if (typeof rule == "string") {
        return {
            ...seqNoFlatten(rule),
            allowedSyntaxKinds,
        };
    } else {
        return {
            ...rule,
            allowedSyntaxKinds,
        };
    }
}

/**
 *
 * This should only ever be used like so,
 * `disallowedSyntaxKinds(choice())` or,
 * `disallowedSyntaxKinds(seq())` or,
 * `disallowedSyntaxKinds(SyntaxKind.SomeChoiceRule)`
 */
export function disallowedSyntaxKinds (
    disallowedSyntaxKinds : string[],
    rule : Rule
) : RuleObj {
    if (typeof rule == "string") {
        return {
            ...seqNoFlatten(rule),
            disallowedSyntaxKinds,
        };
    } else {
        return {
            ...rule,
            disallowedSyntaxKinds,
        };
    }
}

export function greedySkipExpectation (rule : Rule) : RuleObj {
    if (typeof rule == "string") {
        rule = tokenSymbol(rule);
    }
    return {
        ...rule,
        greedySkipExpectation : true,
    };
}

export function fieldLengthCheck (
    field : string,
    minLength : number,
    maxLength : number,
    rule : Rule
) : RuleObj {
    if (typeof rule == "string") {
        rule = seqNoFlatten(rule);
    }

    const fieldCheckArr = rule.fieldCheckArr ?? [];
    return {
        ...rule,
        fieldCheckArr : [
            ...fieldCheckArr,
            {
                type : "FieldLengthCheck",
                field,
                minLength,
                maxLength,
            },
        ],
    };
}

export function fieldRequiredCheck (
    field : string,
    rule : Rule
) : RuleObj {
    if (typeof rule == "string") {
        rule = seqNoFlatten(rule);
    }

    const fieldCheckArr = rule.fieldCheckArr ?? [];
    return {
        ...rule,
        fieldCheckArr : [
            ...fieldCheckArr,
            {
                type : "FieldRequiredCheck",
                field,
            },
        ],
    };
}

export interface FieldLengthCheck {
    type : "FieldLengthCheck",
    field : string,
    minLength : number,
    maxLength : number,
}

export interface FieldRequiredCheck {
    type : "FieldRequiredCheck",
    field : string,
}

export type FieldCheck =
    | FieldLengthCheck
    | FieldRequiredCheck
;

export interface RuleBase {
    precedence? : number;
    customExtraName? : string;
    penalizeErrorStart? : boolean;
    allowedSyntaxKinds? : string[];
    disallowedSyntaxKinds? : string[];
    fieldCheckArr? : FieldCheck[];
    greedySkipExpectation? : boolean;
}

export interface SeqRule extends RuleBase {
    ruleKind : "seq",
    rules : Rule[],
}

export interface ChoiceRule extends RuleBase {
    ruleKind : "choice",
    rules : Rule[],
}

export interface OneOfRule extends RuleBase {
    ruleKind : "oneOf",
    rules : Rule[],
}

export interface OptionalRule extends RuleBase {
    ruleKind : "optional",
    rule : Rule,
    noSkipIfAllError? : undefined|true,
}

export interface Repeat1Rule extends RuleBase {
    ruleKind : "repeat1",
    rule : Rule,
}

export interface FieldRule extends RuleBase {
    ruleKind : "field",
    label : string,
    rule : Rule,
}

export interface TokenSymbolRule extends RuleBase {
    ruleKind : "tokenSymbol",
    tokenKind : string,
    otherTokenKinds : string[] | undefined,
    /**
     * Defaults to `true`.
     */
    canExpect? : false,

    consumeUnexpectedTokenKinds : string[] | undefined,
    consumeUnexpectedCost : number | undefined,

    skipExpectationCost : number | undefined,

    skipExpectationAfterExtraCost : number | undefined,
}

export interface AliasRule extends RuleBase {
    ruleKind : "alias",
    alias : string,
    rule : Rule,
}

export type RuleObj =
    | SeqRule
    | ChoiceRule
    | OneOfRule
    | OptionalRule
    | Repeat1Rule
    | FieldRule
    | TokenSymbolRule
    | AliasRule
;

export type Rule =
    | string
    | RuleObj
;

export interface TopLevelRuleModifier {
    isTopLevelRuleModifier : true,

    rule : Rule;

    //customExtraName? : string;
    inline? : boolean;
}
/*
export function useCustomExtra (
    customExtraName : string,
    rule : Rule|TopLevelRuleModifier
) : TopLevelRuleModifier {
    if (rule instanceof Object && "isTopLevelRuleModifier" in rule) {
        return {
            ...rule,
            customExtraName,
        };
    } else {
        return {
            isTopLevelRuleModifier : true,

            rule,
            customExtraName,
        };
    }
}
*/

export function useCustomExtra (
    customExtraName : string,
    rule : RuleObj
) : RuleObj {
    return {
        ...rule,
        customExtraName,
    };
}

export function inline (
    rule : Rule|TopLevelRuleModifier
) : TopLevelRuleModifier {
    if (rule instanceof Object && "isTopLevelRuleModifier" in rule) {
        return {
            ...rule,
            inline : true,
        };
    } else {
        return {
            isTopLevelRuleModifier : true,

            rule,
            inline : true,
        };
    }
}

export interface GrammarConfig {
    tokens : string[];
    /**
     * Extras including line break token
     */
    extras : string[];
    lineBreakToken : string;
    singleLineCommentToken : string;
    customExtras : Record<string, string[]>;
    cannotUnexpect : string[];

    inline : string[];
    start : string;
}

export interface Grammar extends GrammarConfig {
    rules : Record<string, Rule|TopLevelRuleModifier>;
}
