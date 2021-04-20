
export function seqNoFlatten (
    ...rules : Rule[]
) : Rule {
    return {
        ruleKind : "seq",
        rules,
    };
}

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

export function oneOf (
    ...rules : Rule[]
) : Rule {
    return {
        ruleKind : "oneOf",
        rules,
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
) : Rule {
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
) : Rule {
    if (typeof rule != "string" && rule.ruleKind == "optional") {
        return optional(field(label, rule.rule));
    }

    if (typeof rule != "string" && rule.ruleKind == "repeat1") {
        return repeat1(field(label, rule.rule));
    }

    if (typeof rule != "string" && rule.ruleKind == "oneOf") {
        return oneOf(
            ...rule.rules.map(r => {
                if (typeof r != "string" && r.ruleKind == "seq" && r.rules.length == 0) {
                    return r;
                }
                return field(label, r);
            }),
        );
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



export interface SeqRule {
    ruleKind : "seq",
    rules : Rule[],
}

export interface ChoiceRule {
    ruleKind : "choice",
    rules : Rule[],
}

export interface OneOfRule {
    ruleKind : "oneOf",
    rules : Rule[],
}

export interface OptionalRule {
    ruleKind : "optional",
    rule : Rule,
}

export interface Repeat1Rule {
    ruleKind : "repeat1",
    rule : Rule,
}

export interface FieldRule {
    ruleKind : "field",
    label : string,
    rule : Rule,
}

export interface TokenSymbolRule {
    ruleKind : "tokenSymbol",
    tokenKind : string,
    otherTokenKinds : string[] | undefined,
}

export type Rule =
    | string
    | SeqRule
    | ChoiceRule
    | OneOfRule
    | OptionalRule
    | Repeat1Rule
    | FieldRule
    | TokenSymbolRule
;

export interface Grammar {
    tokens : string[];
    extras : string[];

    inline : string[];
    start : string;
    rules : Record<string, Rule>;
}
