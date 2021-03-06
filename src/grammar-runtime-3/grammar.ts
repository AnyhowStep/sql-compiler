import {CompiledGrammar, CompiledShape} from "../compiled-grammar";
import {Fields} from "./syntax-node";

export interface MyTokenSymbol {
    tokenKind : string;
    otherTokenKinds? : string[] | undefined;
    /**
     * Defaults to `true`.
     */
    canExpect : boolean,

    consumeUnexpectedTokenKinds? : string[] | undefined;
    skipExpectationCost? : number | undefined;
    skipExpectationAfterExtraCost? : number | undefined;
}

export type MySymbol =
    | string
    | MyTokenSymbol
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

export interface MyRule {
    name : string;
    symbols : MySymbol[];

    runTimeId : number;
    precedence : number;
    penalizeErrorStart : boolean;
    allowedSyntaxKinds : string[] | undefined;
    disallowedSyntaxKinds : string[] | undefined;
    fieldCheckArr : FieldCheck[] | undefined;
    greedySkipExpectation : boolean;
}

export interface MyGrammar {
    tokens : Set<string>;
    extras : Set<string>;
    lineBreakToken : string;
    singleLineCommentToken : string;
    customExtras : Record<string, Set<string>>;
    cannotUnexpect : Set<string>;

    inline : Set<string>;
    start: string;
    extrasRuleName : string|undefined;
    customExtrasNameMap : Record<string, string|undefined>;
    allExtrasSubRuleNames : Set<String>;
    byName: Record<string, MyRule[]>;

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
    ruleName2Fields : Record<string, Fields>;
    ruleName2Extras : Record<string, string|undefined>;

    ruleRunTimeId2Precedence : number[];
}

export function initFields (shape : CompiledShape) {
    const result : Fields = {};
    for (const [label, field] of Object.entries(shape.fields)) {
        if (!field.quantity.exists) {
            //TODO Check this is correct
            continue;
        }
        if (field.quantity.multiple) {
            result[label] = [];
        } else {
            result[label] = undefined;
        }
    }

    return result;
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

export function loadGrammar (compiled : CompiledGrammar) : MyGrammar {
    const tokens = new Set<string>(compiled.tokens);
    const extras = new Set<string>(compiled.extras);
    const lineBreakToken = compiled.lineBreakToken;
    const singleLineCommentToken = compiled.singleLineCommentToken;
    const customExtras = fromEntries(
        Object.entries(compiled.customExtras).map(([extrasName, tokens]) => {
            return [
                extrasName,
                new Set(tokens),
            ];
        })
    );
    const cannotUnexpect = new Set<string>(compiled.cannotUnexpect);

    const inline = new Set<string>(compiled.inline);
    const start = compiled.start;
    const extrasRuleName = compiled.extrasRuleName;
    const customExtrasNameMap = compiled.customExtrasNameMap;
    const allExtrasSubRuleNames = new Set<string>(compiled.allExtrasSubRuleNames);
    const byName : Record<string, MyRule[]> = {};

    const ruleName2Alias = compiled.ruleName2Alias;
    const ruleName2Label = compiled.ruleName2Label;
    const ruleName2Shape = compiled.ruleName2Shape;
    const ruleName2Extras = compiled.ruleName2Extras;
    const ruleName2Fields : Record<string, Fields> = {};
    const ruleRunTimeId2Precedence : number[] = [];
    //runTimeId zero is not used
    ruleRunTimeId2Precedence.push(-Infinity);

    let runTimeId = 0;

    for (const rule of compiled.rules) {
        let rules = byName[rule.name];
        if (rules == undefined) {
            rules = [];
            byName[rule.name] = rules;
        }

        rules.push({
            ...rule,
            runTimeId : ++runTimeId,
            allowedSyntaxKinds : rule.allowedSyntaxKinds,
            disallowedSyntaxKinds : rule.disallowedSyntaxKinds,
            fieldCheckArr : rule.fieldCheckArr,
        });
        ruleRunTimeId2Precedence.push(rule.precedence);

        ruleName2Fields[rule.name] = initFields(ruleName2Shape[ruleName2Alias[rule.name] ?? rule.name]);
    }

    return {
        tokens,
        extras,
        lineBreakToken,
        singleLineCommentToken,
        customExtras,
        cannotUnexpect,

        inline,
        start,
        extrasRuleName,
        customExtrasNameMap,
        allExtrasSubRuleNames,
        byName,

        ruleName2Alias,
        ruleName2Label,
        ruleName2Shape,
        ruleName2Fields,
        ruleName2Extras,
        ruleRunTimeId2Precedence,
    };
}
