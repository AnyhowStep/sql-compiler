import {ReverseTokenKind, TokenKind} from "../scanner";
import {Node, ReverseSyntaxKind, SyntaxKind, TextRange} from "../parser-node";
import {SyntaxKindToNode} from "./syntax-kind-to-node.generated";
import {ParserState} from "./parser-state";

export interface TokenObj<TokenKindT extends TokenKind> {
    start : number,
    end : number,
    tokenKind : TokenKindT;
    value : string,
    getTokenSourceText : () => string,
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

export type Substitution =
    | null
    | SyntaxKind
    | TokenKind
    | QuantifiedSubstitution
    | CustomRule<TextRange>
    | UnionSubstitution<readonly Substitution[]>
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
    SubstitutionT extends CustomRule<infer ReturnT> ?
    ReturnT :
    SubstitutionT extends null ?
    null :
    SubstitutionT extends QuantifiedSubstitution<infer SubSubstitutionT, infer QuantifierT> ?
    (
        QuantifierT extends "?" ?
        null|SubstitutionToData<SubSubstitutionT> :
        SubstitutionToData<SubSubstitutionT>[]
    ) :
    SubstitutionT extends UnionSubstitution<infer ArrT> ?
    [SubstitutionToData<ArrT[number]>] :
    "Cannot infer"
;

export type Data =
    | TokenObj<TokenKind>
    | Node
    | TextRange
    | null
    | undefined
    | readonly Data[]
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
    if ("union" in sub) {
        return (
            "(" +
            sub.union
                .map(ele => substitutionToString(ele))
                .join(" | ") +
            ")"
        );
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
        func : (this : ParserState, data : SubstitutionToData<SubstitutionT>) => SyntaxKindToNode[VariableT]
    ) : this;

    generateNearlyGrammar () : string;
}

export function makeCustomRule<InitialT extends TextRange=never> (variable : string) : CustomRule<InitialT> {
    const substitutions : {
        substitution : readonly Substitution[],
        func : (this : ParserState, ...args : any) => unknown,
    }[] = [];
    const result : CustomRule<InitialT> = {
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

export interface CustomRule<ReturnT extends TextRange> {
    variable : string,
    addSubstitution<
        SubstitutionT extends readonly Substitution[],
        NewReturnT extends TextRange
    > (
        substitution : SubstitutionT,
        func : (this : ParserState, data : SubstitutionToData<SubstitutionT>) => NewReturnT
    ) : CustomRule<ReturnT|NewReturnT>;

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

export function emitNearleyGrammar () {
    return [...rules]
        .reverse()
        .map(rule => rule.generateNearlyGrammar())
        .join("\n\n");
}
