import {Substitution} from "./substitution";

export interface UnionSubstitution<
    ArrT extends readonly Substitution[]
> {
    union : ArrT
}

export function union<ArrT extends readonly Substitution[]> (
    ...arr : ArrT
) : UnionSubstitution<readonly (ArrT[number])[]> {
    return {
        union : arr,
    };
}
