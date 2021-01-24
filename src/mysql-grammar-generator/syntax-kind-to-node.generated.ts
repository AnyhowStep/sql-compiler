
import {
    SyntaxKind,
    BinaryDataType,
    BitDataType,
    BlobDataType,
    BooleanDataType,
    CharacterDataType,
    DateDataType,
    DateTimeDataType,
    DecimalDataType,
    EnumDataType,
    GeometryCollectionDataType,
    GeometryDataType,
    IntegerDataType,
    JsonDataType,
    RealDataType,
    SetDataType,
    TextDataType,
    TimeDataType,
    TimestampDataType,
    UnionDataType,
    UnknownDataType,
    YearDataType,
    BitLiteral,
    DecimalLiteral,
    ExpressionList,
    ExpressionListList,
    HexLiteral,
    IntegerLiteral,
    ParamMarker,
    RealLiteral,
    StringLiteral,
    UnknownExpression,
    UserVariableIdentifier,
    AccountIdentifier,
    ColumnIdentifier,
    EventIdentifier,
    Identifier,
    IdentifierList,
    StoredFunctionIdentifier,
    StoredProcedureIdentifier,
    TableIdentifier,
    TableIdentifierList,
    TriggerIdentifier,
    CurrentTimestamp,
    DefaultCharacterSet,
    DefaultCollation,
    FieldLength,
    Interval,
    Precision,
    SizeNumber,
    StringList,
    SourceFile,
    SourceFileLite,
    SourceElementList,
    AlterFunctionStatement,
    AlterProcedureStatement,
    AlterSchemaStatement,
    AlterSchemaUpgradeDataDirectoryNameStatement,
    AlterTableAddColumn,
    AlterTableAddCreateTableDefinitionList,
    AlterTableAlterColumnDropDefault,
    AlterTableAlterColumnSetDefault,
    AlterTableChangeColumn,
    AlterTableConvertToCharacterSet,
    AlterTableDisableKeys,
    AlterTableDropColumn,
    AlterTableDropForeignKey,
    AlterTableDropIndex,
    AlterTableDropPrimaryKey,
    AlterTableEnableKeys,
    AlterTableForce,
    AlterTableModifyColumn,
    AlterTableOrderBy,
    AlterTableOrderExpr,
    AlterTableOrderExprList,
    AlterTableRenameIndex,
    AlterTableRenameTable,
    AlterTableUpgradePartitioning,
    AlterTableItemOrModifierList,
    AlterTableModifiers,
    AlterTableValidation,
    AlterTableStandaloneStatement,
    AlterTableStatement,
    CreateEventStatement,
    ExecuteAtSchedule,
    IntervalSchedule,
    CreateFunctionStatement,
    CreateProcedureStatement,
    CreateUserDefinedFunctionStatement,
    StoredFunctionParameter,
    StoredFunctionParameterList,
    StoredProcedureCharacteristics,
    PartialStoredProcedureCharacteristics,
    StoredProcedureParameter,
    StoredProcedureParameterList,
    AlterTableLock,
    AlterTableAlgorithm,
    AlterTableLockAndAlgorithmOptions,
    CreateIndexStatement,
    CreateLogFileGroupAddRedoFile,
    CreateLogFileGroupAddUndoFile,
    CreateLogFileGroupOptions,
    CreateLogFileGroupStatement,
    CreateSchemaStatement,
    CreateSchemaOptionList,
    CreateServerOptions,
    CreateServerStatement,
    CheckDefinition,
    ColumnDefinition,
    CreateTableDefinitionList,
    ForeignKeyDefinition,
    ForeignKeyReferenceDefinition,
    GeneratedDefinition,
    IndexPart,
    IndexDefinition,
    IndexPartList,
    PrimaryKeyDefinition,
    CreateTableLikeStatement,
    CreateTableOptions,
    CreateTableSelectStatement,
    CreateTableSelect,
    CreateTableStatement,
    CreateTablespaceOptions,
    CreateTablespaceStatement,
    CreateTriggerStatement,
    TriggerOrder,
    AccountLockAndPasswordExpiryOptions,
    CreateUserStatement,
    GrantUser,
    GrantUserList,
    RateLimitOptions,
    RequiredEncryptedConnectionOptions,
    CreateViewStatement,
    DeclareFunctionParameter,
    DeclareFunctionParameterList,
    DeclareFunctionStatement,
    DelimiterStatement,
    DerivedTableFactor,
    FromClause,
    IndexHintDefinition,
    IndexHintDefinitionList,
    JoinSpecificationOn,
    JoinSpecificationUsing,
    Join,
    KeyUsageList,
    NamedTableFactor,
    OdbcTableReference,
    TableReferenceList,
    GroupByClause,
    GroupingExpr,
    GroupingExprList,
    FieldTerminatorOptions,
    IntoClause,
    IntoDestinationDumpFile,
    IntoDestinationOutFile,
    IntoDestinationVariableList,
    LineTerminatorOptions,
    HashPartition,
    HashSubPartition,
    KeyPartition,
    KeySubPartition,
    ListPartitionDefinition,
    ListPartitionDefinitionList,
    ListPartition,
    PartitionDefinitionOptions,
    RangePartitionDefinition,
    ExpressionOrMaxValueList,
    RangePartitionDefinitionList,
    RangePartition,
    SubPartitionDefinition,
    SubPartitionDefinitionList,
    AsteriskSelectItem,
    HavingClause,
    Limit,
    OrderExpr,
    OrderExprList,
    ProcedureAnalyseClause,
    SelectItem,
    SelectOptions,
    Select,
    SelectItemList,
    TableAsteriskSelectItem,
    UnionOrderLimit,
    Union,
    WhereClause,
    UnknownStatement,
    BlockStatement,
    CloseStatement,
    FetchStatement,
    FetchIdentifierList,
    ElseIf,
    ElseBranch,
    IfStatement,
    ElseIfList,
    IterateStatement,
    LabelStatement,
    LeaveStatement,
    LoopStatement,
    OpenStatement,
    RepeatStatement,
    ReturnStatement,
    SearchedWhen,
    SearchedCaseStatement,
    SearchedWhenList,
    SimpleWhen,
    SimpleCaseStatement,
    SimpleWhenList,
    StoredProcedureStatementList,
    WhileStatement,
} from "../parser-node";

export type SyntaxKindToNode = {
    [SyntaxKind.BinaryDataType] : BinaryDataType;
    [SyntaxKind.BitDataType] : BitDataType;
    [SyntaxKind.BlobDataType] : BlobDataType;
    [SyntaxKind.BooleanDataType] : BooleanDataType;
    [SyntaxKind.CharacterDataType] : CharacterDataType;
    [SyntaxKind.DateDataType] : DateDataType;
    [SyntaxKind.DateTimeDataType] : DateTimeDataType;
    [SyntaxKind.DecimalDataType] : DecimalDataType;
    [SyntaxKind.EnumDataType] : EnumDataType;
    [SyntaxKind.GeometryCollectionDataType] : GeometryCollectionDataType;
    [SyntaxKind.GeometryDataType] : GeometryDataType;
    [SyntaxKind.IntegerDataType] : IntegerDataType;
    [SyntaxKind.JsonDataType] : JsonDataType;
    [SyntaxKind.RealDataType] : RealDataType;
    [SyntaxKind.SetDataType] : SetDataType;
    [SyntaxKind.TextDataType] : TextDataType;
    [SyntaxKind.TimeDataType] : TimeDataType;
    [SyntaxKind.TimestampDataType] : TimestampDataType;
    [SyntaxKind.UnionDataType] : UnionDataType;
    [SyntaxKind.UnknownDataType] : UnknownDataType;
    [SyntaxKind.YearDataType] : YearDataType;
    [SyntaxKind.BitLiteral] : BitLiteral;
    [SyntaxKind.DecimalLiteral] : DecimalLiteral;
    [SyntaxKind.ExpressionList] : ExpressionList;
    [SyntaxKind.ExpressionListList] : ExpressionListList;
    [SyntaxKind.HexLiteral] : HexLiteral;
    [SyntaxKind.IntegerLiteral] : IntegerLiteral;
    [SyntaxKind.ParamMarker] : ParamMarker;
    [SyntaxKind.RealLiteral] : RealLiteral;
    [SyntaxKind.StringLiteral] : StringLiteral;
    [SyntaxKind.UnknownExpression] : UnknownExpression;
    [SyntaxKind.UserVariableIdentifier] : UserVariableIdentifier;
    [SyntaxKind.AccountIdentifier] : AccountIdentifier;
    [SyntaxKind.ColumnIdentifier] : ColumnIdentifier;
    [SyntaxKind.EventIdentifier] : EventIdentifier;
    [SyntaxKind.Identifier] : Identifier;
    [SyntaxKind.IdentifierList] : IdentifierList;
    [SyntaxKind.StoredFunctionIdentifier] : StoredFunctionIdentifier;
    [SyntaxKind.StoredProcedureIdentifier] : StoredProcedureIdentifier;
    [SyntaxKind.TableIdentifier] : TableIdentifier;
    [SyntaxKind.TableIdentifierList] : TableIdentifierList;
    [SyntaxKind.TriggerIdentifier] : TriggerIdentifier;
    [SyntaxKind.CurrentTimestamp] : CurrentTimestamp;
    [SyntaxKind.DefaultCharacterSet] : DefaultCharacterSet;
    [SyntaxKind.DefaultCollation] : DefaultCollation;
    [SyntaxKind.FieldLength] : FieldLength;
    [SyntaxKind.Interval] : Interval;
    [SyntaxKind.Precision] : Precision;
    [SyntaxKind.SizeNumber] : SizeNumber;
    [SyntaxKind.StringList] : StringList;
    [SyntaxKind.SourceFile] : SourceFile;
    [SyntaxKind.SourceFileLite] : SourceFileLite;
    [SyntaxKind.SourceElementList] : SourceElementList;
    [SyntaxKind.AlterFunctionStatement] : AlterFunctionStatement;
    [SyntaxKind.AlterProcedureStatement] : AlterProcedureStatement;
    [SyntaxKind.AlterSchemaStatement] : AlterSchemaStatement;
    [SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement] : AlterSchemaUpgradeDataDirectoryNameStatement;
    [SyntaxKind.AlterTableAddColumn] : AlterTableAddColumn;
    [SyntaxKind.AlterTableAddCreateTableDefinitionList] : AlterTableAddCreateTableDefinitionList;
    [SyntaxKind.AlterTableAlterColumnDropDefault] : AlterTableAlterColumnDropDefault;
    [SyntaxKind.AlterTableAlterColumnSetDefault] : AlterTableAlterColumnSetDefault;
    [SyntaxKind.AlterTableChangeColumn] : AlterTableChangeColumn;
    [SyntaxKind.AlterTableConvertToCharacterSet] : AlterTableConvertToCharacterSet;
    [SyntaxKind.AlterTableDisableKeys] : AlterTableDisableKeys;
    [SyntaxKind.AlterTableDropColumn] : AlterTableDropColumn;
    [SyntaxKind.AlterTableDropForeignKey] : AlterTableDropForeignKey;
    [SyntaxKind.AlterTableDropIndex] : AlterTableDropIndex;
    [SyntaxKind.AlterTableDropPrimaryKey] : AlterTableDropPrimaryKey;
    [SyntaxKind.AlterTableEnableKeys] : AlterTableEnableKeys;
    [SyntaxKind.AlterTableForce] : AlterTableForce;
    [SyntaxKind.AlterTableModifyColumn] : AlterTableModifyColumn;
    [SyntaxKind.AlterTableOrderBy] : AlterTableOrderBy;
    [SyntaxKind.AlterTableOrderExpr] : AlterTableOrderExpr;
    [SyntaxKind.AlterTableOrderExprList] : AlterTableOrderExprList;
    [SyntaxKind.AlterTableRenameIndex] : AlterTableRenameIndex;
    [SyntaxKind.AlterTableRenameTable] : AlterTableRenameTable;
    [SyntaxKind.AlterTableUpgradePartitioning] : AlterTableUpgradePartitioning;
    [SyntaxKind.AlterTableItemOrModifierList] : AlterTableItemOrModifierList;
    [SyntaxKind.AlterTableModifiers] : AlterTableModifiers;
    [SyntaxKind.AlterTableValidation] : AlterTableValidation;
    [SyntaxKind.AlterTableStandaloneStatement] : AlterTableStandaloneStatement;
    [SyntaxKind.AlterTableStatement] : AlterTableStatement;
    [SyntaxKind.CreateEventStatement] : CreateEventStatement;
    [SyntaxKind.ExecuteAtSchedule] : ExecuteAtSchedule;
    [SyntaxKind.IntervalSchedule] : IntervalSchedule;
    [SyntaxKind.CreateFunctionStatement] : CreateFunctionStatement;
    [SyntaxKind.CreateProcedureStatement] : CreateProcedureStatement;
    [SyntaxKind.CreateUserDefinedFunctionStatement] : CreateUserDefinedFunctionStatement;
    [SyntaxKind.StoredFunctionParameter] : StoredFunctionParameter;
    [SyntaxKind.StoredFunctionParameterList] : StoredFunctionParameterList;
    [SyntaxKind.StoredProcedureCharacteristics] : StoredProcedureCharacteristics;
    [SyntaxKind.PartialStoredProcedureCharacteristics] : PartialStoredProcedureCharacteristics;
    [SyntaxKind.StoredProcedureParameter] : StoredProcedureParameter;
    [SyntaxKind.StoredProcedureParameterList] : StoredProcedureParameterList;
    [SyntaxKind.AlterTableLock] : AlterTableLock;
    [SyntaxKind.AlterTableAlgorithm] : AlterTableAlgorithm;
    [SyntaxKind.AlterTableLockAndAlgorithmOptions] : AlterTableLockAndAlgorithmOptions;
    [SyntaxKind.CreateIndexStatement] : CreateIndexStatement;
    [SyntaxKind.CreateLogFileGroupAddRedoFile] : CreateLogFileGroupAddRedoFile;
    [SyntaxKind.CreateLogFileGroupAddUndoFile] : CreateLogFileGroupAddUndoFile;
    [SyntaxKind.CreateLogFileGroupOptions] : CreateLogFileGroupOptions;
    [SyntaxKind.CreateLogFileGroupStatement] : CreateLogFileGroupStatement;
    [SyntaxKind.CreateSchemaStatement] : CreateSchemaStatement;
    [SyntaxKind.CreateSchemaOptionList] : CreateSchemaOptionList;
    [SyntaxKind.CreateServerOptions] : CreateServerOptions;
    [SyntaxKind.CreateServerStatement] : CreateServerStatement;
    [SyntaxKind.CheckDefinition] : CheckDefinition;
    [SyntaxKind.ColumnDefinition] : ColumnDefinition;
    [SyntaxKind.CreateTableDefinitionList] : CreateTableDefinitionList;
    [SyntaxKind.ForeignKeyDefinition] : ForeignKeyDefinition;
    [SyntaxKind.ForeignKeyReferenceDefinition] : ForeignKeyReferenceDefinition;
    [SyntaxKind.GeneratedDefinition] : GeneratedDefinition;
    [SyntaxKind.IndexPart] : IndexPart;
    [SyntaxKind.IndexDefinition] : IndexDefinition;
    [SyntaxKind.IndexPartList] : IndexPartList;
    [SyntaxKind.PrimaryKeyDefinition] : PrimaryKeyDefinition;
    [SyntaxKind.CreateTableLikeStatement] : CreateTableLikeStatement;
    [SyntaxKind.CreateTableOptions] : CreateTableOptions;
    [SyntaxKind.CreateTableSelectStatement] : CreateTableSelectStatement;
    [SyntaxKind.CreateTableSelect] : CreateTableSelect;
    [SyntaxKind.CreateTableStatement] : CreateTableStatement;
    [SyntaxKind.CreateTablespaceOptions] : CreateTablespaceOptions;
    [SyntaxKind.CreateTablespaceStatement] : CreateTablespaceStatement;
    [SyntaxKind.CreateTriggerStatement] : CreateTriggerStatement;
    [SyntaxKind.TriggerOrder] : TriggerOrder;
    [SyntaxKind.AccountLockAndPasswordExpiryOptions] : AccountLockAndPasswordExpiryOptions;
    [SyntaxKind.CreateUserStatement] : CreateUserStatement;
    [SyntaxKind.GrantUser] : GrantUser;
    [SyntaxKind.GrantUserList] : GrantUserList;
    [SyntaxKind.RateLimitOptions] : RateLimitOptions;
    [SyntaxKind.RequiredEncryptedConnectionOptions] : RequiredEncryptedConnectionOptions;
    [SyntaxKind.CreateViewStatement] : CreateViewStatement;
    [SyntaxKind.DeclareFunctionParameter] : DeclareFunctionParameter;
    [SyntaxKind.DeclareFunctionParameterList] : DeclareFunctionParameterList;
    [SyntaxKind.DeclareFunctionStatement] : DeclareFunctionStatement;
    [SyntaxKind.DelimiterStatement] : DelimiterStatement;
    [SyntaxKind.DerivedTableFactor] : DerivedTableFactor;
    [SyntaxKind.FromClause] : FromClause;
    [SyntaxKind.IndexHintDefinition] : IndexHintDefinition;
    [SyntaxKind.IndexHintDefinitionList] : IndexHintDefinitionList;
    [SyntaxKind.JoinSpecificationOn] : JoinSpecificationOn;
    [SyntaxKind.JoinSpecificationUsing] : JoinSpecificationUsing;
    [SyntaxKind.Join] : Join;
    [SyntaxKind.KeyUsageList] : KeyUsageList;
    [SyntaxKind.NamedTableFactor] : NamedTableFactor;
    [SyntaxKind.OdbcTableReference] : OdbcTableReference;
    [SyntaxKind.TableReferenceList] : TableReferenceList;
    [SyntaxKind.GroupByClause] : GroupByClause;
    [SyntaxKind.GroupingExpr] : GroupingExpr;
    [SyntaxKind.GroupingExprList] : GroupingExprList;
    [SyntaxKind.FieldTerminatorOptions] : FieldTerminatorOptions;
    [SyntaxKind.IntoClause] : IntoClause;
    [SyntaxKind.IntoDestinationDumpFile] : IntoDestinationDumpFile;
    [SyntaxKind.IntoDestinationOutFile] : IntoDestinationOutFile;
    [SyntaxKind.IntoDestinationVariableList] : IntoDestinationVariableList;
    [SyntaxKind.LineTerminatorOptions] : LineTerminatorOptions;
    [SyntaxKind.HashPartition] : HashPartition;
    [SyntaxKind.HashSubPartition] : HashSubPartition;
    [SyntaxKind.KeyPartition] : KeyPartition;
    [SyntaxKind.KeySubPartition] : KeySubPartition;
    [SyntaxKind.ListPartitionDefinition] : ListPartitionDefinition;
    [SyntaxKind.ListPartitionDefinitionList] : ListPartitionDefinitionList;
    [SyntaxKind.ListPartition] : ListPartition;
    [SyntaxKind.PartitionDefinitionOptions] : PartitionDefinitionOptions;
    [SyntaxKind.RangePartitionDefinition] : RangePartitionDefinition;
    [SyntaxKind.ExpressionOrMaxValueList] : ExpressionOrMaxValueList;
    [SyntaxKind.RangePartitionDefinitionList] : RangePartitionDefinitionList;
    [SyntaxKind.RangePartition] : RangePartition;
    [SyntaxKind.SubPartitionDefinition] : SubPartitionDefinition;
    [SyntaxKind.SubPartitionDefinitionList] : SubPartitionDefinitionList;
    [SyntaxKind.AsteriskSelectItem] : AsteriskSelectItem;
    [SyntaxKind.HavingClause] : HavingClause;
    [SyntaxKind.Limit] : Limit;
    [SyntaxKind.OrderExpr] : OrderExpr;
    [SyntaxKind.OrderExprList] : OrderExprList;
    [SyntaxKind.ProcedureAnalyseClause] : ProcedureAnalyseClause;
    [SyntaxKind.SelectItem] : SelectItem;
    [SyntaxKind.SelectOptions] : SelectOptions;
    [SyntaxKind.Select] : Select;
    [SyntaxKind.SelectItemList] : SelectItemList;
    [SyntaxKind.TableAsteriskSelectItem] : TableAsteriskSelectItem;
    [SyntaxKind.UnionOrderLimit] : UnionOrderLimit;
    [SyntaxKind.Union] : Union;
    [SyntaxKind.WhereClause] : WhereClause;
    [SyntaxKind.UnknownStatement] : UnknownStatement;
    [SyntaxKind.BlockStatement] : BlockStatement;
    [SyntaxKind.CloseStatement] : CloseStatement;
    [SyntaxKind.FetchStatement] : FetchStatement;
    [SyntaxKind.FetchIdentifierList] : FetchIdentifierList;
    [SyntaxKind.ElseIf] : ElseIf;
    [SyntaxKind.ElseBranch] : ElseBranch;
    [SyntaxKind.IfStatement] : IfStatement;
    [SyntaxKind.ElseIfList] : ElseIfList;
    [SyntaxKind.IterateStatement] : IterateStatement;
    [SyntaxKind.LabelStatement] : LabelStatement;
    [SyntaxKind.LeaveStatement] : LeaveStatement;
    [SyntaxKind.LoopStatement] : LoopStatement;
    [SyntaxKind.OpenStatement] : OpenStatement;
    [SyntaxKind.RepeatStatement] : RepeatStatement;
    [SyntaxKind.ReturnStatement] : ReturnStatement;
    [SyntaxKind.SearchedWhen] : SearchedWhen;
    [SyntaxKind.SearchedCaseStatement] : SearchedCaseStatement;
    [SyntaxKind.SearchedWhenList] : SearchedWhenList;
    [SyntaxKind.SimpleWhen] : SimpleWhen;
    [SyntaxKind.SimpleCaseStatement] : SimpleCaseStatement;
    [SyntaxKind.SimpleWhenList] : SimpleWhenList;
    [SyntaxKind.StoredProcedureStatementList] : StoredProcedureStatementList;
    [SyntaxKind.WhileStatement] : WhileStatement;
} & Record<SyntaxKind, unknown>;
