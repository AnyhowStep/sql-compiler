import {SyntaxKind} from "./syntax-kind.generated";
import {Node} from "./node";
import {BinaryDataType} from "./data-type/binary-data-type";
import {BitDataType} from "./data-type/bit-data-type";
import {BlobDataType} from "./data-type/blob-data-type";
import {BooleanDataType} from "./data-type/boolean-data-type";
import {CharacterDataType} from "./data-type/character-data-type";
import {DateDataType} from "./data-type/date-data-type";
import {DateTimeDataType} from "./data-type/date-time-data-type";
import {DecimalDataType} from "./data-type/decimal-data-type";
import {EnumDataType} from "./data-type/enum-data-type";
import {GeometryCollectionDataType} from "./data-type/geometry-collection-data-type";
import {GeometryDataType} from "./data-type/geometry-data-type";
import {IntegerDataType} from "./data-type/integer-data-type";
import {JsonDataType} from "./data-type/json-data-type";
import {RealDataType} from "./data-type/real-data-type";
import {SetDataType} from "./data-type/set-data-type";
import {TextDataType} from "./data-type/text-data-type";
import {TimeDataType} from "./data-type/time-data-type";
import {TimestampDataType} from "./data-type/timestamp-data-type";
import {UnionDataType} from "./data-type/union-data-type";
import {UnknownDataType} from "./data-type/unknown-data-type";
import {YearDataType} from "./data-type/year-data-type";
import {BitLiteral} from "./expression/bit-literal";
import {DecimalLiteral} from "./expression/decimal-literal";
import {HexLiteral} from "./expression/hex-literal";
import {IntegerLiteral} from "./expression/integer-literal";
import {ParamMarker} from "./expression/param-marker";
import {RealLiteral} from "./expression/real-literal";
import {StringLiteral} from "./expression/string-literal";
import {UnknownExpression} from "./expression/unknown-expression";
import {UserVariableIdentifier} from "./expression/user-variable-identifier";
import {AccountIdentifier} from "./identifier/account-identifier";
import {ColumnIdentifier} from "./identifier/column-identifier";
import {Identifier} from "./identifier/identifier";
import {StoredProcedureIdentifier} from "./identifier/stored-procedure-identifier";
import {TableIdentifier} from "./identifier/table-identifier";
import {CurrentTimestamp} from "./misc/current-timestamp";
import {DefaultCharacterSet} from "./misc/default-character-set";
import {DefaultCollation} from "./misc/default-collation";
import {FieldLength} from "./misc/field-length";
import {Precision} from "./misc/precision";
import {SourceFile} from "./source-file";
import {SourceFileLite} from "./source-file";
import {CreateFunctionStatement} from "./statement/create-function-statement/create-function-statement";
import {StoredFunctionParameter} from "./statement/create-function-statement/stored-function-parameter";
import {StoredProcedureCharacteristics} from "./statement/create-function-statement/stored-procedure-characteristics";
import {CreateSchemaStatement} from "./statement/create-schema-statement";
import {CheckDefinition} from "./statement/create-table-definition/check-definition";
import {ColumnDefinition} from "./statement/create-table-definition/column-definition";
import {ForeignKeyDefinition} from "./statement/create-table-definition/foreign-key-definition";
import {ForeignKeyReferenceDefinition} from "./statement/create-table-definition/foreign-key-reference-definition";
import {GeneratedDefinition} from "./statement/create-table-definition/generated-definition";
import {IndexPart} from "./statement/create-table-definition/index-definition";
import {IndexDefinition} from "./statement/create-table-definition/index-definition";
import {PrimaryKeyDefinition} from "./statement/create-table-definition/primary-key-definition";
import {CreateTableOptions} from "./statement/create-table-options";
import {CreateTableStatement} from "./statement/create-table-statement";
import {DeclareFunctionParameter} from "./statement/declare-function-parameter";
import {DeclareFunctionStatement} from "./statement/declare-function-statement";
import {DelimiterStatement} from "./statement/delimiter-statement";
import {DerivedTableFactor} from "./statement/from-clause/derived-table-factor";
import {FromClause} from "./statement/from-clause/from-clause";
import {IndexHintDefinition} from "./statement/from-clause/index-hint-definition";
import {JoinSpecificationOn} from "./statement/from-clause/join-specification";
import {JoinSpecificationUsing} from "./statement/from-clause/join-specification";
import {Join} from "./statement/from-clause/join";
import {NamedTableFactor} from "./statement/from-clause/named-table-factor";
import {OdbcTableReference} from "./statement/from-clause/odbc-table-reference";
import {GroupByClause} from "./statement/group-by-clause/group-by-clause";
import {GroupingExpr} from "./statement/group-by-clause/grouping-expr";
import {FieldTerminatorOptions} from "./statement/into-clause/field-terminator-options";
import {IntoClause} from "./statement/into-clause/into-clause";
import {IntoDestinationDumpFile} from "./statement/into-clause/into-destination-dump-file";
import {IntoDestinationOutFile} from "./statement/into-clause/into-destination-out-file";
import {LineTerminatorOptions} from "./statement/into-clause/line-terminator-options";
import {HashPartition} from "./statement/partition/hash-partition";
import {HashSubPartition} from "./statement/partition/hash-sub-partition";
import {KeyPartition} from "./statement/partition/key-partition";
import {KeySubPartition} from "./statement/partition/key-sub-partition";
import {ListPartitionDefinition} from "./statement/partition/list-partition-definition";
import {ListPartition} from "./statement/partition/list-partition";
import {PartitionDefinitionOptions} from "./statement/partition/partition-definition-options";
import {RangePartitionDefinition} from "./statement/partition/range-partition-definition";
import {RangePartition} from "./statement/partition/range-partition";
import {SubPartitionDefinition} from "./statement/partition/sub-partition-definition";
import {AsteriskSelectItem} from "./statement/select-statement/asterisk-select-item";
import {HavingClause} from "./statement/select-statement/having-clause";
import {Limit} from "./statement/select-statement/limit";
import {OrderExpr} from "./statement/select-statement/order-expr";
import {ProcedureAnalyseClause} from "./statement/select-statement/procedure-analyse-clause";
import {SelectItem} from "./statement/select-statement/select-item";
import {SelectOptions} from "./statement/select-statement/select-options";
import {Select} from "./statement/select-statement/select";
import {TableAsteriskSelectItem} from "./statement/select-statement/table-asterisk-select-item";
import {UnionOrderLimit} from "./statement/select-statement/union-order-limit";
import {Union} from "./statement/select-statement/union";
import {WhereClause} from "./statement/select-statement/where-clause";
import {UnknownStatement} from "./statement/unknown-statement";
import {BlockStatement} from "./stored-procedure-statement/block-statement";
import {ElseIf} from "./stored-procedure-statement/if-statement";
import {IfStatement} from "./stored-procedure-statement/if-statement";
import {LabelStatement} from "./stored-procedure-statement/label-statement";
import {LoopStatement} from "./stored-procedure-statement/loop-statement";
import {RepeatStatement} from "./stored-procedure-statement/repeat-statement";
import {ReturnStatement} from "./stored-procedure-statement/return-statement";
import {WhileStatement} from "./stored-procedure-statement/while-statement";

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BinaryDataType) : node is BinaryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BitDataType) : node is BitDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BlobDataType) : node is BlobDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BooleanDataType) : node is BooleanDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CharacterDataType) : node is CharacterDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DateDataType) : node is DateDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DateTimeDataType) : node is DateTimeDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DecimalDataType) : node is DecimalDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.EnumDataType) : node is EnumDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryCollectionDataType) : node is GeometryCollectionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryDataType) : node is GeometryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntegerDataType) : node is IntegerDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.JsonDataType) : node is JsonDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RealDataType) : node is RealDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SetDataType) : node is SetDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TextDataType) : node is TextDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TimeDataType) : node is TimeDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TimestampDataType) : node is TimestampDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnionDataType) : node is UnionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownDataType) : node is UnknownDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.YearDataType) : node is YearDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BitLiteral) : node is BitLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DecimalLiteral) : node is DecimalLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.HexLiteral) : node is HexLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntegerLiteral) : node is IntegerLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ParamMarker) : node is ParamMarker;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RealLiteral) : node is RealLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.StringLiteral) : node is StringLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownExpression) : node is UnknownExpression;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UserVariableIdentifier) : node is UserVariableIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.AccountIdentifier) : node is AccountIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ColumnIdentifier) : node is ColumnIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Identifier) : node is Identifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.StoredProcedureIdentifier) : node is StoredProcedureIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TableIdentifier) : node is TableIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CurrentTimestamp) : node is CurrentTimestamp;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DefaultCharacterSet) : node is DefaultCharacterSet;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DefaultCollation) : node is DefaultCollation;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.FieldLength) : node is FieldLength;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Precision) : node is Precision;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SourceFile) : node is SourceFile;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SourceFileLite) : node is SourceFileLite;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateFunctionStatement) : node is CreateFunctionStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.StoredFunctionParameter) : node is StoredFunctionParameter;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.StoredProcedureCharacteristics) : node is StoredProcedureCharacteristics;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateSchemaStatement) : node is CreateSchemaStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CheckDefinition) : node is CheckDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ColumnDefinition) : node is ColumnDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ForeignKeyDefinition) : node is ForeignKeyDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition) : node is ForeignKeyReferenceDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeneratedDefinition) : node is GeneratedDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IndexPart) : node is IndexPart;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IndexDefinition) : node is IndexDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.PrimaryKeyDefinition) : node is PrimaryKeyDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateTableOptions) : node is CreateTableOptions;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateTableStatement) : node is CreateTableStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DeclareFunctionParameter) : node is DeclareFunctionParameter;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DeclareFunctionStatement) : node is DeclareFunctionStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DelimiterStatement) : node is DelimiterStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DerivedTableFactor) : node is DerivedTableFactor;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.FromClause) : node is FromClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IndexHintDefinition) : node is IndexHintDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.JoinSpecificationOn) : node is JoinSpecificationOn;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.JoinSpecificationUsing) : node is JoinSpecificationUsing;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Join) : node is Join;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.NamedTableFactor) : node is NamedTableFactor;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.OdbcTableReference) : node is OdbcTableReference;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GroupByClause) : node is GroupByClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GroupingExpr) : node is GroupingExpr;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.FieldTerminatorOptions) : node is FieldTerminatorOptions;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntoClause) : node is IntoClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntoDestinationDumpFile) : node is IntoDestinationDumpFile;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntoDestinationOutFile) : node is IntoDestinationOutFile;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.LineTerminatorOptions) : node is LineTerminatorOptions;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.HashPartition) : node is HashPartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.HashSubPartition) : node is HashSubPartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.KeyPartition) : node is KeyPartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.KeySubPartition) : node is KeySubPartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ListPartitionDefinition) : node is ListPartitionDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ListPartition) : node is ListPartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.PartitionDefinitionOptions) : node is PartitionDefinitionOptions;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RangePartitionDefinition) : node is RangePartitionDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RangePartition) : node is RangePartition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SubPartitionDefinition) : node is SubPartitionDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.AsteriskSelectItem) : node is AsteriskSelectItem;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.HavingClause) : node is HavingClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Limit) : node is Limit;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.OrderExpr) : node is OrderExpr;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ProcedureAnalyseClause) : node is ProcedureAnalyseClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SelectItem) : node is SelectItem;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SelectOptions) : node is SelectOptions;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Select) : node is Select;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TableAsteriskSelectItem) : node is TableAsteriskSelectItem;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnionOrderLimit) : node is UnionOrderLimit;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Union) : node is Union;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.WhereClause) : node is WhereClause;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownStatement) : node is UnknownStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BlockStatement) : node is BlockStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ElseIf) : node is ElseIf;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IfStatement) : node is IfStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.LabelStatement) : node is LabelStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.LoopStatement) : node is LoopStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RepeatStatement) : node is RepeatStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ReturnStatement) : node is ReturnStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.WhileStatement) : node is WhileStatement;

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean {
    return node.syntaxKind == syntaxKind;
}



export interface SwitchSyntaxKind<ReturnT> {

    case<ResultT> (syntaxKind : SyntaxKind.BinaryDataType, callback : (node : BinaryDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BitDataType, callback : (node : BitDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BlobDataType, callback : (node : BlobDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BooleanDataType, callback : (node : BooleanDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CharacterDataType, callback : (node : CharacterDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DateDataType, callback : (node : DateDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DateTimeDataType, callback : (node : DateTimeDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DecimalDataType, callback : (node : DecimalDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.EnumDataType, callback : (node : EnumDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryCollectionDataType, callback : (node : GeometryCollectionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryDataType, callback : (node : GeometryDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntegerDataType, callback : (node : IntegerDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.JsonDataType, callback : (node : JsonDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RealDataType, callback : (node : RealDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SetDataType, callback : (node : SetDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TextDataType, callback : (node : TextDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TimeDataType, callback : (node : TimeDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TimestampDataType, callback : (node : TimestampDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnionDataType, callback : (node : UnionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownDataType, callback : (node : UnknownDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.YearDataType, callback : (node : YearDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BitLiteral, callback : (node : BitLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DecimalLiteral, callback : (node : DecimalLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.HexLiteral, callback : (node : HexLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntegerLiteral, callback : (node : IntegerLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ParamMarker, callback : (node : ParamMarker) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RealLiteral, callback : (node : RealLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.StringLiteral, callback : (node : StringLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownExpression, callback : (node : UnknownExpression) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UserVariableIdentifier, callback : (node : UserVariableIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.AccountIdentifier, callback : (node : AccountIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ColumnIdentifier, callback : (node : ColumnIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Identifier, callback : (node : Identifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.StoredProcedureIdentifier, callback : (node : StoredProcedureIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TableIdentifier, callback : (node : TableIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CurrentTimestamp, callback : (node : CurrentTimestamp) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DefaultCharacterSet, callback : (node : DefaultCharacterSet) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DefaultCollation, callback : (node : DefaultCollation) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.FieldLength, callback : (node : FieldLength) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Precision, callback : (node : Precision) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SourceFile, callback : (node : SourceFile) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SourceFileLite, callback : (node : SourceFileLite) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateFunctionStatement, callback : (node : CreateFunctionStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.StoredFunctionParameter, callback : (node : StoredFunctionParameter) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.StoredProcedureCharacteristics, callback : (node : StoredProcedureCharacteristics) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateSchemaStatement, callback : (node : CreateSchemaStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CheckDefinition, callback : (node : CheckDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ColumnDefinition, callback : (node : ColumnDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ForeignKeyDefinition, callback : (node : ForeignKeyDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition, callback : (node : ForeignKeyReferenceDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeneratedDefinition, callback : (node : GeneratedDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IndexPart, callback : (node : IndexPart) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IndexDefinition, callback : (node : IndexDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.PrimaryKeyDefinition, callback : (node : PrimaryKeyDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateTableOptions, callback : (node : CreateTableOptions) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateTableStatement, callback : (node : CreateTableStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DeclareFunctionParameter, callback : (node : DeclareFunctionParameter) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DeclareFunctionStatement, callback : (node : DeclareFunctionStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DelimiterStatement, callback : (node : DelimiterStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DerivedTableFactor, callback : (node : DerivedTableFactor) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.FromClause, callback : (node : FromClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IndexHintDefinition, callback : (node : IndexHintDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.JoinSpecificationOn, callback : (node : JoinSpecificationOn) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.JoinSpecificationUsing, callback : (node : JoinSpecificationUsing) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Join, callback : (node : Join) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.NamedTableFactor, callback : (node : NamedTableFactor) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.OdbcTableReference, callback : (node : OdbcTableReference) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GroupByClause, callback : (node : GroupByClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GroupingExpr, callback : (node : GroupingExpr) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.FieldTerminatorOptions, callback : (node : FieldTerminatorOptions) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntoClause, callback : (node : IntoClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntoDestinationDumpFile, callback : (node : IntoDestinationDumpFile) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntoDestinationOutFile, callback : (node : IntoDestinationOutFile) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.LineTerminatorOptions, callback : (node : LineTerminatorOptions) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.HashPartition, callback : (node : HashPartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.HashSubPartition, callback : (node : HashSubPartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.KeyPartition, callback : (node : KeyPartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.KeySubPartition, callback : (node : KeySubPartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ListPartitionDefinition, callback : (node : ListPartitionDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ListPartition, callback : (node : ListPartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.PartitionDefinitionOptions, callback : (node : PartitionDefinitionOptions) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RangePartitionDefinition, callback : (node : RangePartitionDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RangePartition, callback : (node : RangePartition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SubPartitionDefinition, callback : (node : SubPartitionDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.AsteriskSelectItem, callback : (node : AsteriskSelectItem) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.HavingClause, callback : (node : HavingClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Limit, callback : (node : Limit) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.OrderExpr, callback : (node : OrderExpr) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ProcedureAnalyseClause, callback : (node : ProcedureAnalyseClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SelectItem, callback : (node : SelectItem) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SelectOptions, callback : (node : SelectOptions) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Select, callback : (node : Select) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TableAsteriskSelectItem, callback : (node : TableAsteriskSelectItem) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnionOrderLimit, callback : (node : UnionOrderLimit) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Union, callback : (node : Union) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.WhereClause, callback : (node : WhereClause) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownStatement, callback : (node : UnknownStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BlockStatement, callback : (node : BlockStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ElseIf, callback : (node : ElseIf) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IfStatement, callback : (node : IfStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.LabelStatement, callback : (node : LabelStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.LoopStatement, callback : (node : LoopStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RepeatStatement, callback : (node : RepeatStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ReturnStatement, callback : (node : ReturnStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.WhileStatement, callback : (node : WhileStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;

    default<ResultT> (callback : () => ResultT) : ResultT|ReturnT;
}

export function switchSyntaxKind (node : Node) : SwitchSyntaxKind<never> {
    let matched = false;
    let returnValue : unknown = undefined;
    const switcher = {
        case : (syntaxKind : SyntaxKind, callback : (node : Node) => unknown) : SwitchSyntaxKind<any> => {
            if (matched) {
                return switcher;
            }

            if (node.syntaxKind == syntaxKind) {
                matched = true;
                returnValue = callback(node);
            }

            return switcher;
        },
        default : (callback : () => unknown) : any => {
            if (matched) {
                return returnValue;
            }

            return callback();
        }
    } as SwitchSyntaxKind<never>;
    return switcher;
}

