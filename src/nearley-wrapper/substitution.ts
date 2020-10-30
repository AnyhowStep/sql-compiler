import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {CustomTokenKind} from "./custom-token";
import {QuantifiedSubstitution} from "./quantified-substitution";
import {AnyRule, Rule} from "./rule";
import {TextRange} from "./text-range";
import {UnionSubstitution} from "./union-substitution";

export type Substitution =
    | null
    | QuantifiedSubstitution
    | keyof CustomSubstitutionToData
    | CustomTokenKind
    | Rule<unknown, TextRange>
    | UnionSubstitution<readonly Substitution[]>
    | readonly Substitution[]
;

export type AnySubstitution =
    | null
    | QuantifiedSubstitution
    | string
    | number
    | CustomTokenKind
    | AnyRule
    | UnionSubstitution<readonly Substitution[]>
    | readonly Substitution[]
;
