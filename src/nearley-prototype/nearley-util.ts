import {ReverseTokenKind, TokenKind} from "../scanner";
import {Node, NodeArray, ReverseSyntaxKind, SyntaxKind} from "../parser-node";
import {SyntaxKindToNode} from "./syntax-kind-to-node.generated";

export interface TokenObj<TokenKindT extends TokenKind> {
    start : number,
    end : number,
    tokenKind : TokenKindT;
    value : string,
}

export type Quantifier =
    | "?"
    | "*"
    | "+"
;

export interface QuantifiedSubstitution<
    SubstitutionT extends Substitution=Substitution,
    QuantifierT extends Quantifier=Quantifier
> {
    substitution : SubstitutionT,
    quantifier : QuantifierT,
}

export type Substitution =
    | null
    | SyntaxKind
    | TokenKind
    | QuantifiedSubstitution
    | UnionRule<unknown>
    | readonly Substitution[]
;

export type SubstitutionToData<
    SubstitutionT extends Substitution
> =
    SubstitutionT extends readonly Substitution[] ?
    {
        [k in keyof SubstitutionT] : SubstitutionToData<Extract<SubstitutionT[k], Substitution>>
    } :
    SubstitutionT extends TokenKind ?
    TokenObj<SubstitutionT> :
    SubstitutionT extends SyntaxKind ?
    SyntaxKindToNode[SubstitutionT] :
    SubstitutionT extends UnionRule<infer ReturnT> ?
    ReturnT :
    SubstitutionT extends null ?
    null :
    SubstitutionT extends QuantifiedSubstitution<infer SubSubstitutionT, infer QuantifierT> ?
    (
        QuantifierT extends "?" ?
        null|SubstitutionToData<SubSubstitutionT> :
        SubstitutionToData<SubSubstitutionT>[]
    ) :
    "Cannot infer"
;

export function substitutionToString (sub : Substitution) : string {
    if (sub instanceof Array) {
        return "(" + substitutionArrToString(sub) + ")";
    }
    if (sub == null) {
        return "null";
    }
    if (typeof sub == "number") {
        if (sub < 1000) {
            //token
            return "%" + (ReverseTokenKind as any)[sub]
        } else {
            //syntax
            return (ReverseSyntaxKind as any)[sub]
        }
    }
    if ("variable" in sub) {
        return sub.variable;
    }
    return substitutionToString(sub.substitution)+ ":" + sub.quantifier;
}

export function substitutionArrToString (substitution : readonly Substitution[]) : string {
    const str = substitution.map((sub) : string => {
        return substitutionToString(sub);
    }).join(" ");
    return str;
}

const rules : { generateNearlyGrammar () : string; }[] = [];

export function makeRule<
    VariableT extends SyntaxKind
> (variable : VariableT) : Rule<VariableT> {
    const substitutions : {
        substitution : readonly Substitution[],
        func : (...args : any) => unknown,
    }[] = [];
    const result : Rule<VariableT> = {
        variable,
        addSubstitution (
            substitution,
            func
        ) {
            substitutions.push({
                substitution,
                func,
            });
            return this;
        },
        generateNearlyGrammar () {
            const arr = [
                (
                    ReverseSyntaxKind[variable] + " ->"
                ),
                ...substitutions.map(({ substitution, func }, index) => {
                    return (
                        "    " +
                        (
                            index > 0 ?
                            "| " :
                            ""
                        ) +
                        substitutionArrToString(substitution) +
                        " " +
                        `{% ${String(func)} %}`
                    )
                }),
            ];
            return arr.join("\n")
        }
    };

    rules.push(result as any);

    return result;
}

export interface Rule<VariableT extends SyntaxKind> {
    variable : VariableT;
    addSubstitution<
        SubstitutionT extends readonly Substitution[]
    > (
        substitution : SubstitutionT,
        func : (data : SubstitutionToData<SubstitutionT>) => SyntaxKindToNode[VariableT]
    ) : this;

    generateNearlyGrammar () : string;
}

export function makeUnionRule (variable : string) : UnionRule<never> {
    const substitutions : {
        substitution : readonly Substitution[],
        func : (...args : any) => unknown,
    }[] = [];
    const result : UnionRule<never> = {
        variable,
        addSubstitution (
            substitution,
            func
        ) {
            substitutions.push({
                substitution,
                func,
            });
            return this;
        },
        generateNearlyGrammar () {
            const arr = [
                (
                    variable + " ->"
                ),
                ...substitutions.map(({ substitution, func }, index) => {
                    return (
                        "    " +
                        (
                            index > 0 ?
                            "| " :
                            ""
                        ) +
                        substitutionArrToString(substitution) +
                        " " +
                        `{% ${String(func)} %}`
                    )
                }),
            ];
            return arr.join("\n")
        }
    };

    rules.push(result as any);

    return result;
}

export interface UnionRule<ReturnT> {
    variable : string,
    addSubstitution<
        SubstitutionT extends readonly Substitution[],
        NewReturnT
    > (
        substitution : SubstitutionT,
        func : (data : SubstitutionToData<SubstitutionT>) => NewReturnT
    ) : UnionRule<ReturnT|NewReturnT>;

    generateNearlyGrammar () : string;
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

export function toNodeArray<T extends Node> (arr : readonly T[], syntaxKind : SyntaxKind, start : number) : NodeArray<T> {
    const end = arr[arr.length-1]?.end ?? start;

    (arr as NodeArray<T>).start = start;
    (arr as NodeArray<T>).end = end;
    (arr as NodeArray<T>).syntaxKind = syntaxKind;

    return arr as NodeArray<T>;
}

export function emitNearleyGrammar () {
    return [...rules]
        .reverse()
        .map(rule => rule.generateNearlyGrammar())
        .join("\n\n");
}
