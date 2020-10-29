import {RuleReturnType} from "./rule-return-type";
import {Substitution} from "./substitution";
import {SubstitutionToData} from "./substitution-to-data";
import {CustomSubstitutionToString, substitutionArrToString} from "./substitution-to-string";
import {TextRange} from "./text-range";

export interface AnyRule {
    variable : string,
    generateNearlyGrammar (customSubstitutionToString : CustomSubstitutionToString) : string;
}

export interface Rule<ParserStateT, ReturnT extends TextRange> extends RuleReturnType<ReturnT> {
    variable : string,
    addSubstitution<
        SubstitutionT extends readonly Substitution[],
        NewReturnT extends TextRange
    > (
        substitution : SubstitutionT,
        func : (this : ParserStateT, data : SubstitutionToData<SubstitutionT>) => NewReturnT
    ) : Rule<ParserStateT, ReturnT|NewReturnT>;

    generateNearlyGrammar (customSubstitutionToString : CustomSubstitutionToString) : string;
}

export function makeRule<ParserStateT, InitialT extends TextRange=never> (variable : string) : Rule<ParserStateT, InitialT> {
    const substitutions : {
        substitution : readonly Substitution[],
        func : (this : ParserStateT, ...args : any) => unknown,
    }[] = [];

    const result : Rule<ParserStateT, InitialT> = {
        __returnType : undefined as any,
        variable,
        addSubstitution : (<SubstitutionT extends readonly Substitution[], NewReturnT extends TextRange>(
            substitution : SubstitutionT,
            func : (this : ParserStateT, data : SubstitutionToData<SubstitutionT>) => NewReturnT
        ) : any => {
            substitutions.push({
                substitution,
                func,
            });
            return result;
        }) as any,
        generateNearlyGrammar (customSubstitutionToString : CustomSubstitutionToString) {
            if (substitutions.length == 0) {
                return "";
            }
            const arr = [
                variable + " ->",
                ...substitutions.map(({ substitution, func }, index) => {
                    return (
                        "    " +
                        (
                            index > 0 ?
                            "| " :
                            ""
                        ) +
                        substitutionArrToString(substitution, customSubstitutionToString) +
                        " " +
                        `{% ${String(func)} %}`
                    )
                }),
            ];
            return arr.join("\n")
        }
    };

    return result;
}
