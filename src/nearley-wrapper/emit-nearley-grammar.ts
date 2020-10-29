import {AnyRule} from "./rule";
import {CustomSubstitutionToString} from "./substitution-to-string";

export function emitNearleyGrammar (
    startRule : string,
    rules : readonly AnyRule[],
    customSubstitutionToString : CustomSubstitutionToString
) {
const startRuleStr = `
Start ->
    ${startRule} {% data => data[0] %}

`;

    const trailingRuleStr = rules
        .map(rule => rule.generateNearlyGrammar(customSubstitutionToString))
        .join("\n\n");

    return startRuleStr + trailingRuleStr;
}
