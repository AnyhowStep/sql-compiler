import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {RuleReturnType} from "./rule-return-type";
import {Substitution} from "./substitution";
import {SubstitutionToData} from "./substitution-to-data";
import {CustomSubstitutionToString, substitutionArrToString} from "./substitution-to-string";
import {TextRange} from "./text-range";

export interface CustomRule<
    ParserStateT,
    VariableT extends keyof CustomSubstitutionToData
> extends RuleReturnType<Extract<CustomSubstitutionToData[VariableT], TextRange>> {
    variable : VariableT;
    addSubstitution<
        SubstitutionT extends readonly Substitution[]
    > (
        substitution : SubstitutionT,
        func : (this : ParserStateT, data : SubstitutionToData<SubstitutionT>) => CustomSubstitutionToData[VariableT]
    ) : this;

    generateNearlyGrammar (customSubstitutionToString : CustomSubstitutionToString) : string;
}

export function makeCustomRuleImpl<
    ParserStateT,
    VariableT extends keyof CustomSubstitutionToData
> (variable : VariableT) : CustomRule<ParserStateT, VariableT> {
    const substitutions : {
        substitution : readonly Substitution[],
        func : (...args : any) => unknown,
    }[] = [];
    const result : CustomRule<ParserStateT, VariableT> = {
        __returnType : undefined as any,
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
        generateNearlyGrammar (customSubstitutionToString : CustomSubstitutionToString) {
            if (substitutions.length == 0) {
                return "";
            }
            const arr = [
                customSubstitutionToString(variable) + " ->",
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
