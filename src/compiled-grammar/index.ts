
export interface CompiledTokenSymbol {
    tokenKind : string;
    otherTokenKinds : string[] | undefined;
}

export type CompiledSymbol =
    | string
    | CompiledTokenSymbol
;

export interface CompiledRule {
    name : string;
    symbols : CompiledSymbol[];
}

export interface CompiledQuantity {
    exists : boolean;
    required : boolean;
    multiple : boolean;
}

export interface CompiledField {
    quantity : CompiledQuantity;
    types : string[];
}

export interface CompiledShape {
    ruleName : string;
    fields : Record<string, CompiledField>;
    children : CompiledField;
    hasMultiStepProduction : boolean;
}

export interface CompiledGrammar {
    tokens : string[];
    extras : string[];

    inline : string[];
    start : string;
    extrasRuleName : string|undefined;
    rules : CompiledRule[];

    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
}
