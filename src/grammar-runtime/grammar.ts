import {CompiledGrammar, CompiledShape} from "../compiled-grammar";
import {Fields} from "./syntax-node";

export interface MyTokenSymbol {
    tokenKind : string;
    otherTokenKinds : string[] | undefined;
}

export type MySymbol =
    | string
    | MyTokenSymbol
;

export interface MyRule {
    name : string;
    symbols : MySymbol[];

    runTimeId : number;
}

export interface MyGrammar {
    tokens : Set<string>;
    extras : Set<string>;

    inline : Set<string>;
    start: string;
    extrasRuleName : string|undefined;
    byName: Record<string, MyRule[]>;

    ruleName2Label : Record<string, string>;
    ruleName2Shape : Record<string, CompiledShape>;
    ruleName2Fields : Record<string, Fields>;
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

    const inline = new Set<string>(compiled.inline);
    const start = compiled.start;
    const extrasRuleName = compiled.extrasRuleName;
    const byName : Record<string, MyRule[]> = {};

    const ruleName2Label = compiled.ruleName2Label;
    const ruleName2Shape = compiled.ruleName2Shape;
    const ruleName2Fields : Record<string, Fields> = {};

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

        ruleName2Fields[rule.name] = initFields(ruleName2Shape[rule.name]);
    }

    return {
        tokens,
        extras,

        inline,
        start,
        extrasRuleName,
        byName,

        ruleName2Label,
        ruleName2Shape,
        ruleName2Fields,
    };
}
