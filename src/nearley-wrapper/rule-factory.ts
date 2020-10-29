import {CustomRule, makeCustomRule} from "./custom-rule";
import {emitNearleyGrammar} from "./emit-nearley-grammar";
import {AnyRule, makeRule, Rule} from "./rule";
import {CustomSubstitutionToData} from "./custom-substitution-to-data";
import {CustomSubstitutionToString} from "./substitution-to-string";
import {TextRange} from "./text-range";

export interface RuleFactory<ParserStateT extends unknown> {
    makeCustomRule<VariableT extends keyof CustomSubstitutionToData> (variable : VariableT) : CustomRule<ParserStateT, VariableT>;

    makeRule<InitialT extends TextRange=never> (variable : string) : Rule<ParserStateT, InitialT>;

    emitNearleyGrammar (startRule : string) : string;
}

export function makeRuleFactory<ParserStateT extends unknown> (
    customSubstitutionToString : CustomSubstitutionToString
) : RuleFactory<ParserStateT> {
    const rules : AnyRule[] = [];
    const factory : RuleFactory<ParserStateT> = {
        makeCustomRule : (
            <VariableT extends keyof CustomSubstitutionToString> (variable : VariableT) : CustomRule<ParserStateT, VariableT> => {
                const rule = makeCustomRule<ParserStateT, VariableT>(variable);
                rules.push(rule);
                return rule;
            }
        ) as any,
        makeRule : (
            <InitialT extends TextRange=never>(variable : string) : Rule<ParserStateT, InitialT> => {
                const rule = makeRule<ParserStateT, InitialT>(variable);
                rules.push(rule);
                return rule;
            }
        ) as any,
        emitNearleyGrammar (startRule) {
            return emitNearleyGrammar(
                startRule,
                rules,
                customSubstitutionToString
            );
        }
    };
    return factory;
}
