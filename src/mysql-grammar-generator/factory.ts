import {ParserState} from "../mysql-grammar";
import {CustomSubstitutionToString, makeRuleFactory, TextRange} from "../nearley-wrapper";
import {
    CreateTableDefinition,
    DataType,
    Expression,
    Identifier,
    IndexPart,
    NodeArray,
    Precision,
    ReverseSyntaxKind,
    Statement,
    StringLiteral,
    SyntaxKind,
} from "../parser-node";
import {ReverseTokenKind, TokenKind} from "../scanner";
import {
    CharacterDataTypeModifier,
    ColumnDefinitionModifier,
    IndexOption,
    IndexTypeNode,
    IntegerDataTypeModifier,
} from "./custom-data";
import {SyntaxKindToNode} from "./syntax-kind-to-node.generated";

export enum CustomSyntaxKind {
    CharacterSetName = 3000,
    Expression,
    CharacterDataTypeModifier,
    DataType,
    IntegerDataTypeModifier,
    Comment,
    Constraint,
    RealPrecision,
    DecimalPrecision,
    CreateTableDefinition,
    CreateTableDefinitionList,
    IndexOption,
    IndexPartList,
    IndexType,
    ColumnDefinitionModifier,
    NonDelimiterStatement,
    LeadingStatement,
    TrailingStatement,
}

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData extends SyntaxKindToNode {
        [CustomSyntaxKind.CharacterSetName] : Identifier,
        [CustomSyntaxKind.Expression] : Expression,
        [CustomSyntaxKind.CharacterDataTypeModifier] : CharacterDataTypeModifier,
        [CustomSyntaxKind.DataType] : DataType,
        [CustomSyntaxKind.IntegerDataTypeModifier] : IntegerDataTypeModifier,
        [CustomSyntaxKind.Comment] : StringLiteral,
        [CustomSyntaxKind.Constraint] : Identifier|TextRange,
        [CustomSyntaxKind.RealPrecision] : Precision,
        [CustomSyntaxKind.DecimalPrecision] : Precision,
        [CustomSyntaxKind.CreateTableDefinition] : CreateTableDefinition,
        [CustomSyntaxKind.CreateTableDefinitionList] : NodeArray<CreateTableDefinition>,
        [CustomSyntaxKind.IndexOption] : IndexOption,
        [CustomSyntaxKind.IndexPartList] : NodeArray<IndexPart>,
        [CustomSyntaxKind.IndexType] : IndexTypeNode,
        [CustomSyntaxKind.ColumnDefinitionModifier] : ColumnDefinitionModifier,
        [CustomSyntaxKind.NonDelimiterStatement] : Statement,
        [CustomSyntaxKind.LeadingStatement] : Statement,
        [CustomSyntaxKind.TrailingStatement] : Statement,
    }

    interface CustomToken extends Array<TokenKind> {

    }
}

const customSubstitutionToString : CustomSubstitutionToString = (substitution) => {
    if (substitution < 1000) {
        return "%" + ReverseTokenKind[substitution as TokenKind];
    } else if (substitution >= 3000) {
        return CustomSyntaxKind[substitution];
    } {
        return ReverseSyntaxKind[substitution as SyntaxKind];
    }
}

export const ruleFactory = makeRuleFactory<ParserState>(customSubstitutionToString);

export const {
    makeCustomRule,
    makeRule,
    emitNearleyGrammar,
} = ruleFactory;
