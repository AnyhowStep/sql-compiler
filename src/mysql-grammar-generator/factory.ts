import {ParserState} from "../mysql-grammar";
import {SelectOption} from "../mysql-grammar/custom-data";
import {CustomSubstitutionToString, makeRuleFactory, TextRange} from "../nearley-wrapper";
import {
    BitLiteral,
    CheckDefinition,
    CreateTableDefinition,
    DataType,
    DecimalLiteral,
    Expression,
    HexLiteral,
    Identifier,
    IndexHintClause,
    IndexHintDefinition,
    IndexPart,
    IntegerLiteral,
    JoinSpecification,
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
    TableReference,
    TableReferenceList,
    Union,
    UnionOrderLimit,
    ValueNode,
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
    DerivedTableFactorSelect,
    ParenthesizedSelect,
    ParenthesizedUnion,
    ParenthesizedUnion_UnionOrderLimit,
    UnionOrderLimit_Helper,
    LimitOption,
    SelectOption,
    IntegerLiteralOrDecimalLiteral,
    TableReference,
    TableReference_Unparenthesized,
    TableReference_Parenthesized,
    OdbcNestedTableReference,
    OdbcNestedTableReference_Unparenthesized,
    OdbcNestedTableReference_Parenthesized,
    JoinRhsTableReference,
    JoinRhsTableReference_Unparenthesized,
    JoinRhsTableReference_Parenthesized,
    UsePartition,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10772
     */
    TableAlias,
    JoinSpecification,
    IndexHintClause,
    TableReferenceList_2OrMore,
}

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData extends SyntaxKindToNode {
        [SyntaxKind.OrderExprList] : NodeArray<OrderExpr>,
        [SyntaxKind.TableReferenceList] : TableReferenceList,
        [SyntaxKind.IndexHintDefinitionList] : NodeArray<IndexHintDefinition>,
        [SyntaxKind.KeyUsageList] : NodeArray<Identifier|ValueNode<"PRIMARY">>,

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
        [CustomSyntaxKind.DerivedTableFactorSelect] : SelectStatement,
        [CustomSyntaxKind.ParenthesizedSelect] : Select,
        [CustomSyntaxKind.ParenthesizedUnion] : Union,
        [CustomSyntaxKind.ParenthesizedUnion_UnionOrderLimit] : UnionOrderLimit,
        [CustomSyntaxKind.UnionOrderLimit_Helper] : Omit<UnionOrderLimit, "select">,
        [CustomSyntaxKind.LimitOption] : Identifier|IntegerLiteral|ParamMarker,
        [CustomSyntaxKind.SelectOption] : SelectOption,
        [CustomSyntaxKind.IntegerLiteralOrDecimalLiteral] : IntegerLiteral|DecimalLiteral,
        [CustomSyntaxKind.TableReference] : TableReference,
        [CustomSyntaxKind.TableReference_Unparenthesized] : TableReference,
        [CustomSyntaxKind.TableReference_Parenthesized] : TableReference,
        [CustomSyntaxKind.OdbcNestedTableReference] : TableReference,
        [CustomSyntaxKind.OdbcNestedTableReference_Unparenthesized] : TableReference,
        [CustomSyntaxKind.OdbcNestedTableReference_Parenthesized] : TableReference,
        [CustomSyntaxKind.JoinRhsTableReference] : TableReference,
        [CustomSyntaxKind.JoinRhsTableReference_Unparenthesized] : TableReference,
        [CustomSyntaxKind.JoinRhsTableReference_Parenthesized] : TableReference,
        [CustomSyntaxKind.UsePartition] : NodeArray<Identifier>,
        [CustomSyntaxKind.TableAlias] : Identifier,
        [CustomSyntaxKind.JoinSpecification] : JoinSpecification,
        [CustomSyntaxKind.IndexHintClause] : ValueNode<IndexHintClause>,
        [CustomSyntaxKind.TableReferenceList_2OrMore] : TableReferenceList,
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
