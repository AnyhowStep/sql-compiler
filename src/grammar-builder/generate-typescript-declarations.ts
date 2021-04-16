import {CompiledGrammar} from "../compiled-grammar";

export function generateTypeScriptDeclarations (grammar : CompiledGrammar) : string {
    const result : string[] = [];

    for (const token of grammar.tokens) {
        result.push(`
export interface ${token} {
    tokenKind : ${JSON.stringify(token)};
}
`);
    }

    for (const [ruleName, shape] of Object.entries(grammar.ruleName2Shape)) {
        if (ruleName.includes("$")) {
            //auto-generated name
            continue;
        }

        if (grammar.inline.includes(ruleName)) {
            //We want to inline this rule.
            //May become an enum
            if (shape.hasMultiStepProduction) {
                continue;
            }
            result.push(`
export type ${ruleName} = ${shape.children.types.join(" | ")};
`);
            continue;
        }

        result.push(`
export interface ${ruleName} {
    syntaxKind : ${JSON.stringify(ruleName)};
    ${Object.entries(shape.fields)
        .filter(([_label, field]) => field.quantity.exists)
        .map(([label, field]) => {
            const optionalStr = (
                !field.quantity.required && !field.quantity.multiple ?
                    "?" :
                    ""
            );
            const arrayStr = field.quantity.multiple ? "[]" : "";

            return `${label}${optionalStr} : (${field.types.join(" | ")})${arrayStr}`;
        })
        .join(";\n    ")
    }
}
`);
    }

    return result.join("");
}
