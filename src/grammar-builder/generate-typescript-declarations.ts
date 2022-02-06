import {CompiledGrammar} from "../compiled-grammar";
import {buildRuleName2Shape} from "./build-grammar";
import {isVisible_PreserveEnum} from "./node-types";

export function generateTypeScriptDeclarations (grammar : CompiledGrammar) : string {
    const ruleName2Shape = buildRuleName2Shape(
        grammar,
        isVisible_PreserveEnum
    );

    const result : string[] = [];

    result.push(`import {MyToken, MySyntaxNode} from "../grammar-runtime-3";`);

    for (const token of grammar.tokens) {
        result.push(`
export interface ${token} extends MyToken<${JSON.stringify(token)}> {}`);
    }

    for (const [ruleName, shape] of Object.entries(ruleName2Shape)) {
        if (ruleName.includes("$")) {
            //auto-generated name
            continue;
        }

        if (grammar.inline.includes(ruleName)) {
            //We want to inline this rule.
            //May become an enum
            if (!shape.hasMultiStepProduction) {
                result.push(`
export type ${ruleName} = ${shape.children.types.join(" | ")};
`);
                continue;
            } else {
                continue;
            }
        }

        result.push(`
export interface ${ruleName} extends MySyntaxNode {
    syntaxKind : ${JSON.stringify(ruleName)};
    fields : {
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
            .join(";\n        ")
        }
    };
}
`);
    }

    return result.join("");
}
