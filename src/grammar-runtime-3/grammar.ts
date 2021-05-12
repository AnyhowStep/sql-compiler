import {CompiledGrammar, CompiledShape} from "../compiled-grammar";
import {Fields} from "./syntax-node";

export interface MyTokenSymbol {
    tokenKind : string;
    otherTokenKinds? : string[] | undefined;
    /**
     * Defaults to `true`.
     */
    canExpect : boolean,
}

export type MySymbol =
    | string
    | MyTokenSymbol
;

export interface MyRule {
    name : string;
    symbols : MySymbol[];

    runTimeId : number;
    precedence : number;
}

export interface MyGrammar {
    tokens : Set<string>;
    extras : Set<string>;
    lineBreakToken : string;
    cannotUnexpect : Set<string>;

    noLineBreak : Set<string>;
    inline : Set<string>;
    start: string;
    extrasRuleName : string|undefined;
    extrasNoLineBreakRuleName : string|undefined;
    byName: Record<string, MyRule[]>;

    ruleName2Alias : Record<string, string>;
    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
    ruleName2Fields : Record<string, Fields>;

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

export function loadGrammar (compiled : CompiledGrammar) : MyGrammar {
    const tokens = new Set<string>(compiled.tokens);
    const extras = new Set<string>(compiled.extras);
    const lineBreakToken = compiled.lineBreakToken;
    const cannotUnexpect = new Set<string>(compiled.cannotUnexpect);

    const noLineBreak = new Set<string>(compiled.noLineBreak);
    const inline = new Set<string>(compiled.inline);
    const start = compiled.start;
    const extrasRuleName = compiled.extrasRuleName;
    const extrasNoLineBreakRuleName = compiled.extrasNoLineBreakRuleName;
    const byName : Record<string, MyRule[]> = {};

    const ruleName2Alias = compiled.ruleName2Alias;
    const ruleName2Label = compiled.ruleName2Label;
    const ruleName2Shape = compiled.ruleName2Shape;
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
        });
        ruleRunTimeId2Precedence.push(rule.precedence);

        ruleName2Fields[rule.name] = initFields(ruleName2Shape[ruleName2Alias[rule.name] ?? rule.name]);
    }

    return {
        tokens,
        extras,
        lineBreakToken,
        cannotUnexpect,

        noLineBreak,
        inline,
        start,
        extrasRuleName,
        extrasNoLineBreakRuleName,
        byName,

        ruleName2Alias,
        ruleName2Label,
        ruleName2Shape,
        ruleName2Fields,
        ruleRunTimeId2Precedence,
    };
}
