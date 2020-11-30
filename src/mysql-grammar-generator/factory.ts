import {ParserState} from "../mysql-grammar";
import {CustomSubstitutionToString, makeRuleFactory, TextRange} from "../nearley-wrapper";
import {
    BitLiteral,
    CreateTableDefinition,
    DataType,
    Expression,
    HexLiteral,
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
    TextString,
    StringList,
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
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12820-L12843
         */
        [CustomSyntaxKind.TextString] : StringLiteral|HexLiteral|BitLiteral,
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7488-L7490
         */
        [CustomSyntaxKind.StringList] : NodeArray<StringLiteral|HexLiteral|BitLiteral>,
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
