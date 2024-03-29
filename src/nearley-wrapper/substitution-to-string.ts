import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {CustomTokenKind} from "./custom-token";
import {AnySubstitution} from "./substitution";

export interface CustomSubstitutionToString {
    (substitution : (keyof CustomSubstitutionToData)|CustomTokenKind) : string;
}

export function substitutionToString (sub : AnySubstitution, customSubstitutionToString : CustomSubstitutionToString) : string {
    if (sub instanceof Array) {
        return "(" + substitutionArrToString(sub, customSubstitutionToString) + ")";
    }
    if (sub == null) {
        return "null";
    }
    if (typeof sub == "string") {
        return customSubstitutionToString(sub as never);
    }
    if (typeof sub == "number") {
        return customSubstitutionToString(sub as never);
    }
    if ("variable" in sub) {
        return sub.variable;
    }
    if ("union" in sub) {
        return (
            "(" +
            sub.union
                .map(ele => substitutionToString(ele, customSubstitutionToString))
                .join(" | ") +
            ")"
        );
    }
    return substitutionToString(sub.substitution, customSubstitutionToString)+ ":" + sub.quantifier;
}

export function substitutionArrToString (
    substitution : readonly AnySubstitution[],
    customSubstitutionToString : CustomSubstitutionToString
) : string {
    const str = substitution.map((sub) : string => {
        return substitutionToString(sub, customSubstitutionToString);
    }).join(" ");
    return str;
}
