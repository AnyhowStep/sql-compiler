import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {CustomTokenKind} from "./custom-token";
import {QuantifiedSubstitution} from "./quantified-substitution";
import {RuleReturnType} from "./rule-return-type";
import {Substitution} from "./substitution";
import {TokenObj} from "./token-obj";
import {UnionSubstitution} from "./union-substitution";

type Index = 0|1|2|3|4|5|6|7|8;
type MinusOne<I extends Index> = {
    0 : 0,
    1 : 0,
    2 : 1,
    3 : 2,
    4 : 3,
    5 : 4,
    6 : 5,
    7 : 6,
    8 : 7
}[I];

type SubstitutionToDataHack<
    SubstitutionT extends unknown,
    IndexT extends Index
> =
    SubstitutionToData<Extract<SubstitutionT, Substitution>, IndexT>
;

export type SubstitutionToData<
    SubstitutionT extends Substitution,
    IndexT extends Index=7
> =
    IndexT extends 0 ?
    never :

    SubstitutionT extends readonly Substitution[] ?
    {
        [k in keyof SubstitutionT] : SubstitutionToDataHack<SubstitutionT[k], MinusOne<IndexT>>
    } :

    SubstitutionT extends RuleReturnType<infer ReturnT> ?
    ReturnT :

    SubstitutionT extends null ?
    null :

    SubstitutionT extends QuantifiedSubstitution<infer SubSubstitutionT, infer QuantifierT> ?
    (
        QuantifierT extends "?" ?
        null|SubstitutionToData<SubSubstitutionT, MinusOne<IndexT>> :
        SubstitutionToData<SubSubstitutionT, MinusOne<IndexT>>[]
    ) :

    SubstitutionT extends UnionSubstitution<infer ArrT> ?
    [SubstitutionToData<ArrT[number], MinusOne<IndexT>>] :

    SubstitutionT extends keyof CustomSubstitutionToData ?
    CustomSubstitutionToData[SubstitutionT] :

    SubstitutionT extends CustomTokenKind ?
    TokenObj<SubstitutionT> :

    never
;
