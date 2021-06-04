
export interface CompiledTokenSymbol {
    tokenKind : string;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     */
    otherTokenKinds? : string[] | undefined;
    canExpect : boolean;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     */
    consumeUnexpectedTokenKinds? : string[] | undefined;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     */
    skipExpectationCost? : number|undefined;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     */
    skipExpectationAfterExtraCost? : number|undefined;
}

export type CompiledSymbol =
    | string
    | CompiledTokenSymbol
;

export interface CompiledRule {
    name : string;
    symbols : CompiledSymbol[];
    precedence : number;
    penalizeErrorStart : boolean;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     *
     * This should only ever be used like so,
     * `allowedSyntaxKinds(choice())` or,
     * `allowedSyntaxKinds(SyntaxKind.SomeChoiceRule)`
     */
     allowedSyntaxKinds? : string[] | undefined;
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
    customExtras : Record<string, string[]>;
    cannotUnexpect : string[];

    inline : string[];
    start : string;
    extrasRuleName : string|undefined;
    customExtrasNameMap : Record<string, string>;
    allExtrasSubRuleNames : string[];
    rules : CompiledRule[];

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
    ruleName2Extras : Record<string, string|undefined>;
}
