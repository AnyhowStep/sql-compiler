import {CustomSubstitutionToString, makeRuleFactory} from "../../nearley-wrapper";
import {Identifier, ReverseSyntaxKind, SyntaxKind} from "../../parser-node";

declare module "../../nearley-wrapper" {
    interface CustomSubstitutionToData {
        [SyntaxKind.Identifier] : Identifier,
    }
}

const customSubstitutionToString : CustomSubstitutionToString = (substitution) => {
    return ReverseSyntaxKind[substitution];
}

export const ruleFactory = makeRuleFactory<{ sourceText : string }>(customSubstitutionToString);

export const {
    makeCustomRule,
    makeRule,
    emitNearleyGrammar,
} = ruleFactory;
