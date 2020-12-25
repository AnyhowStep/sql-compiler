import {ParserState} from "../mysql-grammar";
import {
    FieldTerminatorOption,
    LineTerminatorOption,
    SelectOption,
    StoredProcedureCharacteristic,
} from "../mysql-grammar/custom-data";
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
    IntegerLiteral,
    JoinSpecification,
    ListPartitionDefinition,
    ParamMarker,
    Partition,
    Precision,
    RangePartitionDefinition,
    ReverseSyntaxKind,
    SelectStatement,
    Statement,
    StringLiteral,
    SubPartition,
    SyntaxKind,
    TableReference,
    TableReferenceList,
    Union,
    UnionOrderLimit,
    ValueNode,
    Select,
    IntoDestination,
    AccountIdentifierOrCurrentUser,
    StoredProcedureStatement,
    LabelStatement,
    TableIdentifierList,
    IdentifierList,
} from "../parser-node";
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
    IndexOption,
    IndexType,
    ColumnDefinitionModifier,
    NonDelimiterStatement,
    LeadingStatement,
    TrailingStatement,
    TextString,
    IdentifierList_2OrMore,
    ColumnCheckDefinition,
    CreateTableOption,
    TableIdentifierList_AllowEmpty,
    SubPartition,
    SingletonListPartitionDefinition,
    NonSingletonListPartitionDefinition,
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
    FieldTerminatorOption,
    LineTerminatorOption,
    CharacterSetNameOrDefault,
    IntoDestination,
    AccountIdentifierOrCurrentUser,
    StoredProcedureStatement,
    StoredProcedureCharacteristic,
    LabelIdentifier,
    LabelStatement,
    UnlabeledStatement,
}

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData extends SyntaxKindToNode {
        [CustomSyntaxKind.CharacterSetName] : Identifier|StringLiteral,
        [CustomSyntaxKind.Expression] : Expression,
        [CustomSyntaxKind.CharacterDataTypeModifier] : CharacterDataTypeModifier,
        [CustomSyntaxKind.DataType] : DataType,
        [CustomSyntaxKind.IntegerDataTypeModifier] : IntegerDataTypeModifier,
        [CustomSyntaxKind.Comment] : StringLiteral,
        [CustomSyntaxKind.Constraint] : Identifier|TextRange,
        [CustomSyntaxKind.RealPrecision] : Precision,
        [CustomSyntaxKind.DecimalPrecision] : Precision,
        [CustomSyntaxKind.CreateTableDefinition] : CreateTableDefinition,
        [CustomSyntaxKind.IndexOption] : IndexOption,
        [CustomSyntaxKind.IndexType] : IndexTypeNode,
        [CustomSyntaxKind.ColumnDefinitionModifier] : ColumnDefinitionModifier,
        [CustomSyntaxKind.NonDelimiterStatement] : Statement,
        [CustomSyntaxKind.LeadingStatement] : Statement,
        [CustomSyntaxKind.TrailingStatement] : Statement,
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L12820-L12843
         */
        [CustomSyntaxKind.TextString] : StringLiteral|HexLiteral|BitLiteral,
        [CustomSyntaxKind.IdentifierList_2OrMore] : IdentifierList,
        [CustomSyntaxKind.ColumnCheckDefinition] : CheckDefinition,
        [CustomSyntaxKind.CreateTableOption] : CreateTableOption,
        [CustomSyntaxKind.TableIdentifierList_AllowEmpty] : TableIdentifierList,
        [CustomSyntaxKind.SubPartition] : SubPartition,
        [CustomSyntaxKind.SingletonListPartitionDefinition] : ListPartitionDefinition,
        [CustomSyntaxKind.NonSingletonListPartitionDefinition] : ListPartitionDefinition,
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
        [CustomSyntaxKind.UsePartition] : IdentifierList,
        [CustomSyntaxKind.TableAlias] : Identifier,
        [CustomSyntaxKind.JoinSpecification] : JoinSpecification,
        [CustomSyntaxKind.IndexHintClause] : ValueNode<IndexHintClause>,
        [CustomSyntaxKind.TableReferenceList_2OrMore] : TableReferenceList,
        [CustomSyntaxKind.FieldTerminatorOption] : FieldTerminatorOption,
        [CustomSyntaxKind.LineTerminatorOption] : LineTerminatorOption,
        [CustomSyntaxKind.CharacterSetNameOrDefault] : Identifier|StringLiteral|ValueNode<"DEFAULT">,
        [CustomSyntaxKind.IntoDestination] : IntoDestination,
        [CustomSyntaxKind.AccountIdentifierOrCurrentUser] : AccountIdentifierOrCurrentUser,
        [CustomSyntaxKind.StoredProcedureStatement] : StoredProcedureStatement,
        [CustomSyntaxKind.StoredProcedureCharacteristic] : StoredProcedureCharacteristic,
        [CustomSyntaxKind.LabelIdentifier] : Identifier,
        [CustomSyntaxKind.LabelStatement] : LabelStatement|LabelStatement["statement"],
        [CustomSyntaxKind.UnlabeledStatement] : LabelStatement["statement"],
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
