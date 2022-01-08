
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
    consumeUnexpectedCost? : number | undefined;
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

    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     */
    omitCost? : number;
}

export type CompiledSymbol =
    | string
    | CompiledTokenSymbol
;

export interface FieldLengthCheck {
    type : "FieldLengthCheck",
    field : string,
    minLength : number|null,
    maxLength : number|null,
}

export interface FieldRequiredCheck {
    type : "FieldRequiredCheck",
    field : string,
}

export type FieldCheck =
    | FieldLengthCheck
    | FieldRequiredCheck
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
     * `allowedSyntaxKinds(seq())` or,
     * `allowedSyntaxKinds(SyntaxKind.SomeChoiceRule)`
     */
    allowedSyntaxKinds? : string[] | undefined;
    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     * @see compiled-grammar-generator
     *
     * This should only ever be used like so,
     * `disallowedSyntaxKinds(choice())` or,
     * `disallowedSyntaxKinds(seq())` or,
     * `disallowedSyntaxKinds(SyntaxKind.SomeChoiceRule)`
     */
    disallowedSyntaxKinds? : string[] | undefined;

    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     */
    fieldCheckArr? : FieldCheck[];

    greedySkipExpectation : boolean;

    /**
     * I don't like optional properties.
     * This is a HACK to get JSON.stringify() output to be assignable statically.
     */
    omitCost? : number;
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
    singleLineCommentToken : string;
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
