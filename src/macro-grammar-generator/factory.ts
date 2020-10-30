import {CustomSubstitutionToString, makeRuleFactory} from "../nearley-wrapper";
import {Identifier, ReverseSyntaxKind, SyntaxKind} from "../parser-node";
import {ReverseTokenKind, TokenKind} from "../scanner";

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData {
        [SyntaxKind.Identifier] : Identifier,
    }

    interface CustomToken extends Array<TokenKind> {

    }
}

const customSubstitutionToString : CustomSubstitutionToString = (substitution) => {
    if (substitution < 1000) {
        return "%" + ReverseTokenKind[substitution as TokenKind];
    } else {
        return ReverseSyntaxKind[substitution as SyntaxKind];
    }
}

export const ruleFactory = makeRuleFactory<{ sourceText : string }>(customSubstitutionToString);

export const {
    makeCustomRule,
    makeRule,
    emitNearleyGrammar,
} = ruleFactory;
