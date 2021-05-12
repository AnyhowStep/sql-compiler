
export interface CompiledTokenSymbol {
    tokenKind : string;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     */
    otherTokenKinds? : string[] | undefined;
    canExpect : boolean;
}

export type CompiledSymbol =
    | string
    | CompiledTokenSymbol
;

export interface CompiledRule {
    name : string;
    symbols : CompiledSymbol[];
    precedence : number;
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
    lineBreakToken : string;
    cannotUnexpect : string[];

    noLineBreak : string[];
    inline : string[];
    start : string;
    extrasRuleName : string|undefined;
    extrasNoLineBreakRuleName : string|undefined;
    rules : CompiledRule[];

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
}
