import {TokenKind} from "../scanner";
import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {QuantifiedSubstitution} from "./quantified-substitution";
import {AnyRule, Rule} from "./rule";
import {TextRange} from "./text-range";
import {UnionSubstitution} from "./union-substitution";

export type Substitution =
    | null
    | QuantifiedSubstitution
    | keyof CustomSubstitutionToData
    | TokenKind
    | Rule<unknown, TextRange>
    | UnionSubstitution<readonly Substitution[]>
    | readonly Substitution[]
;

export type AnySubstitution =
    | null
    | QuantifiedSubstitution
    | string
    | number
    | TokenKind
    | AnyRule
    | UnionSubstitution<readonly Substitution[]>
    | readonly Substitution[]
;
