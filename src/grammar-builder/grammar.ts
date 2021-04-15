
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

export function optional (
    rule : Rule,
) : OptionalRule {
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
) : FieldRule {
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

export interface SeqRule {
    ruleKind : "seq",
    rules : Rule[],
}

export interface ChoiceRule {
    ruleKind : "choice",
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
