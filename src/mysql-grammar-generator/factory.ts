import {ParserState} from "../mysql-grammar";
import {SelectOption} from "../mysql-grammar/custom-data";
import {CustomSubstitutionToString, makeRuleFactory, TextRange} from "../nearley-wrapper";
import {
    BitLiteral,
    CheckDefinition,
    CreateTableDefinition,
    DataType,
    Expression,
    HexLiteral,
    Identifier,
    IndexPart,
    IntegerLiteral,
    ListPartitionDefinition,
    NodeArray,
    OrderExpr,
    ParamMarker,
    Partition,
    Precision,
    RangePartitionDefinition,
    ReverseSyntaxKind,
    SelectStatement,
    Statement,
    StringLiteral,
    SubPartition,
    SubPartitionDefinition,
    SyntaxKind,
    TableIdentifier,
    UnionOrderLimit,
} from "../parser-node";
import {Select} from "../parser-node/statement/select-statement/select";
import {ReverseTokenKind, TokenKind} from "../scanner";
import {
    CharacterDataTypeModifier,
    ColumnDefinitionModifier,
    IndexOption,
    IndexTypeNode,
    IntegerDataTypeModifier,
    CreateTableOption,
    PartitionDefinitionOption,
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
    IdentifierList,
    IdentifierList_2OrMore,
    ColumnCheckDefinition,
    CreateTableOption,
    TableIdentifierList,
    TableIdentifierList_AllowEmpty,
    SubPartition,
    SubPartitionDefinitionList,
    SingletonListPartitionDefinition,
    NonSingletonListPartitionDefinition,
    ExpressionList,
    ExpressionListList,
    PartitionDefinitionOption,
    Partition,
    SingletonRangePartitionDefinition,
    NonSingletonRangePartitionDefinition,
    SelectStatement,
    ParenthesizedSelect,
    UnionOrderLimit_Helper,
    LimitOption,
    SelectOption,
}

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData extends SyntaxKindToNode {
        [SyntaxKind.OrderExprList] : NodeArray<OrderExpr>,

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
        [CustomSyntaxKind.IdentifierList] : NodeArray<Identifier>,
        [CustomSyntaxKind.IdentifierList_2OrMore] : NodeArray<Identifier>,
        [CustomSyntaxKind.ColumnCheckDefinition] : CheckDefinition,
        [CustomSyntaxKind.CreateTableOption] : CreateTableOption,
        [CustomSyntaxKind.TableIdentifierList] : NodeArray<TableIdentifier>,
        [CustomSyntaxKind.TableIdentifierList_AllowEmpty] : NodeArray<TableIdentifier>,
        [CustomSyntaxKind.SubPartition] : SubPartition,
        [CustomSyntaxKind.SingletonListPartitionDefinition] : ListPartitionDefinition,
        [CustomSyntaxKind.NonSingletonListPartitionDefinition] : ListPartitionDefinition,
        [CustomSyntaxKind.SubPartitionDefinitionList] : NodeArray<SubPartitionDefinition>,
        [CustomSyntaxKind.ExpressionList] : NodeArray<Expression>,
        [CustomSyntaxKind.ExpressionListList] : NodeArray<NodeArray<Expression>>,
        [CustomSyntaxKind.PartitionDefinitionOption] : PartitionDefinitionOption,
        [CustomSyntaxKind.Partition] : Partition,
        [CustomSyntaxKind.SingletonRangePartitionDefinition] : RangePartitionDefinition,
        [CustomSyntaxKind.NonSingletonRangePartitionDefinition] : RangePartitionDefinition,
        [CustomSyntaxKind.SelectStatement] : SelectStatement,
        [CustomSyntaxKind.ParenthesizedSelect] : Select,
        [CustomSyntaxKind.UnionOrderLimit_Helper] : Omit<UnionOrderLimit, "select">,
        [CustomSyntaxKind.LimitOption] : Identifier|IntegerLiteral|ParamMarker,
        [CustomSyntaxKind.SelectOption] : SelectOption,
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
