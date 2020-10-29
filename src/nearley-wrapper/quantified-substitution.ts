import {Quantifier} from "./quantifier";
import {Substitution} from "./substitution";

export interface QuantifiedSubstitution<
    SubstitutionT extends Substitution=Substitution,
    QuantifierT extends Quantifier=Quantifier
> {
    substitution : SubstitutionT,
    quantifier : QuantifierT,
}

export function optional<SubstitutionT extends Substitution> (
    substitution : SubstitutionT
) : QuantifiedSubstitution<SubstitutionT, "?"> {
    return {
        substitution,
        quantifier : "?",
    };
}

export function zeroOrMore<SubstitutionT extends Substitution> (
    substitution : SubstitutionT
) : QuantifiedSubstitution<SubstitutionT, "*"> {
    return {
        substitution,
        quantifier : "*",
    };
}

export function oneOrMore<SubstitutionT extends Substitution> (
    substitution : SubstitutionT
) : QuantifiedSubstitution<SubstitutionT, "+"> {
    return {
        substitution,
        quantifier : "+",
    };
}
