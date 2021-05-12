
export function seqNoFlatten (
    ...rules : Rule[]
) : RuleObj {
    return {
        ruleKind : "seq",
        rules,
    };
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
        if (typeof rule != "string" && rule.ruleKind == "seq") {
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
        if (typeof rule != "string" && rule.ruleKind == "choice") {
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

export function repeat (
    rule : Rule,
) : RuleObj {
    return optional(repeat1(rule));
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

export function tokenSymbol (
    tokenKind : string,
    ...otherTokenKinds : string[]
) : TokenSymbolRule {
    if (otherTokenKinds.length == 0) {
        return {
            ruleKind : "tokenSymbol",
            tokenKind,
            otherTokenKinds : undefined,
        };
    } else {
        return {
            ruleKind : "tokenSymbol",
            tokenKind,
            otherTokenKinds,
        };
    }
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
            ruleKind : "tokenSymbol",
            tokenKind : tokenSymbolRule.tokenKind,
            otherTokenKinds,
        };
    } else {
        return {
            ruleKind : "tokenSymbol",
            tokenKind : tokenSymbolRule.tokenKind,
            otherTokenKinds : [...tokenSymbolRule.otherTokenKinds, ...otherTokenKinds],
        };
    }
}

export function cannotExpect (
    tokenSymbolRule : string|TokenSymbolRule
) : TokenSymbolRule {
    if (typeof tokenSymbolRule == "string") {
        return {
            ruleKind : "tokenSymbol",
            tokenKind : tokenSymbolRule,
            otherTokenKinds : undefined,
            canExpect : false,
        };
    }
    return {
        ...tokenSymbolRule,
        canExpect : false,
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

export interface RuleBase {
    precedence? : number,
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

export interface GrammarConfig {
    tokens : string[];
    /**
     * Extras including line break token
     */
    extras : string[];
    lineBreakToken : string;
    cannotUnexpect : string[];

    /**
     * Extras for specified rules will not contain line break token
     */
    noLineBreak : string[];
    inline : string[];
    start : string;
}

export interface Grammar extends GrammarConfig {
    rules : Record<string, Rule>;
}
