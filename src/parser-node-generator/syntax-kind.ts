//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

    "Value",

    "BitDataType",
    "BooleanDataType",
    "IntegerDataType",
    "DecimalDataType",
    "RealDataType",

    "JsonDataType",

    "CharacterDataType",
    "TextDataType",
    "BinaryDataType",
    "BlobDataType",

    "DateTimeDataType",
    "YearDataType",
    "DateDataType",
    "TimeDataType",
    "TimestampDataType",

    "GeometryDataType",
    "GeometryCollectionDataType",

    "EnumDataType",
    "SetDataType",

    "UnionDataType",
    "UnknownDataType",

    /**
     * Top-Level nodes
     */
    "SourceFileLite",
    "SourceFile",
    "Program",

    /**
     * The custom delimiter is used for the MySQL
     * `DELIMITER` command.
     */
    "DelimiterStatement",

    /**
     * Misc
     */
    "CurrentTimestamp",
    "DefaultCollation",
    "DefaultCharacterSet",
    "FieldLength",
    "Precision",
    "Interval",
    "SizeNumber",

    /**
     * Statements
     */
    "CreateSchemaStatement",
    "CreateSchemaOptionList",

    "CreateTableStatement",
    "ColumnDefinition",
    "GeneratedDefinition",
    "ForeignKeyReferenceDefinition",
    "IndexDefinition",
    "IndexPart",
    "PrimaryKeyDefinition",
    "ForeignKeyDefinition",
    "CheckDefinition",
    "CreateTableOptions",

    "CreateTableSelectStatement",
    "CreateTableSelect",

    "CreateTableLikeStatement",

    "CreateFunctionStatement",
    "StoredFunctionParameter",
    "StoredFunctionParameterList",
    "StoredProcedureCharacteristics",
    "CreateProcedureStatement",
    "StoredProcedureParameter",
    "StoredProcedureParameterList",
    "CreateTriggerStatement",
    "TriggerOrder",
    "CreateEventStatement",
    "ExecuteAtSchedule",
    "IntervalSchedule",
    "CreateUserDefinedFunctionStatement",
    "CreateViewStatement",
    "CreateUserStatement",
    "GrantUser",
    "GrantUserList",
    "RequiredEncryptedConnectionOptions",
    "RateLimitOptions",
    "AccountLockAndPasswordExpiryOptions",
    "CreateLogFileGroupStatement",
    "CreateLogFileGroupOptions",
    "CreateLogFileGroupAddRedoFile",
    "CreateLogFileGroupAddUndoFile",
    "CreateTablespaceStatement",
    "CreateTablespaceOptions",
    "CreateServerStatement",
    "CreateServerOptions",
    "CreateIndexStatement",
    "AlterTableLockAndAlgorithmOptions",

    "AlterTableStatement",
    "AlterTableStandaloneStatement",

    "AlterTableModifiers",
    "AlterTableLock",
    "AlterTableAlgorithm",
    "AlterTableValidation",

    "AlterTableItemOrModifierList",

    "AlterTableAddColumn",
    "AlterTableAddCreateTableDefinitionList",
    "AlterTableChangeColumn",
    "AlterTableModifyColumn",
    "AlterTableDropColumn",
    "AlterTableDropForeignKey",
    "AlterTableDropPrimaryKey",
    "AlterTableDropIndex",
    "AlterTableDisableKeys",
    "AlterTableEnableKeys",
    "AlterTableAlterColumnSetDefault",
    "AlterTableAlterColumnDropDefault",
    /**
     * @todo Renaming columns only added in MySQL 8.0
     */
    "AlterTableRenameTable",
    "AlterTableRenameIndex",
    "AlterTableConvertToCharacterSet",
    "AlterTableForce",
    "AlterTableUpgradePartitioning",



    "HashPartition",
    "KeyPartition",
    "ListPartition",
    "RangePartition",

    "HashSubPartition",
    "KeySubPartition",

    "ListPartitionDefinition",
    "RangePartitionDefinition",

    "SubPartitionDefinition",

    "PartitionDefinitionOptions",

    "SetStatement",
    "Assignment",

    "SelectStatement",
    "Select",
    "SelectOptions",
    "SelectItem",
    "AsteriskSelectItem",
    "TableAsteriskSelectItem",
    "IntoOption",
    "OdbcTableReference",
    "NamedTableFactor",
    "IndexHintDefinition",
    "DerivedTableFactor",
    "FromClause",
    "Join",
    "JoinSpecificationUsing",
    "JoinSpecificationOn",
    "WhereClause",
    "GroupByClause",
    "GroupingExpr",
    "HavingClause",
    "OrderByClause",
    "OrderExpr",
    "Limit",
    "ProcedureAnalyseClause",
    "IntoClause",
    "IntoDestinationDumpFile",
    "IntoDestinationOutFile",
    "IntoDestinationVariableList",
    "FieldTerminatorOptions",
    "LineTerminatorOptions",
    "Union",
    "UnionOrderLimit",

    /**
     * Stored procedure statements
     */
    "ReturnStatement",
    "LabelStatement",
    "BlockStatement",
    "LoopStatement",
    "WhileStatement",
    "RepeatStatement",
    "IfStatement",
    "ElseIf",
    "ElseBranch",
    "SimpleCaseStatement",
    "SimpleWhen",
    "SimpleWhenList",
    "SearchedCaseStatement",
    "SearchedWhen",
    "SearchedWhenList",
    "LeaveStatement",
    "IterateStatement",
    "OpenStatement",
    "CloseStatement",
    "FetchStatement",

    /**
     * Custom statements
     */
    "DeclareFunctionStatement",
    "DeclareFunctionParameter",

    "CreateMacroStatement",

    /**
     * May be escaped or unescaped with backticks, or double quotes
     */
    "Identifier",
    /**
     * Starts with one ampersand.
     */
    "UserVariableIdentifier",
    /**
     * Starts with two ampersands.
     */
    "SystemVariableIdentifier",
    "TableIdentifier",
    "ColumnIdentifier",
    "FunctionIdentifier",
    "MacroIdentifier",
    "StoredFunctionIdentifier",
    "StoredProcedureIdentifier",
    "AccountIdentifier",
    "TriggerIdentifier",
    "EventIdentifier",

    /**
     * Expression
     */
    "ParenthesizedExpression",
    "BinaryExpression",
    "UnaryExpression",
    "ColumnExpression",
    "FunctionCallExpression",
    "RowExpression",
    "MacroCallExpression",
    "CaseIfExpression",
    "CaseSwitchExpression",
    "CaseBranch",
    "MatchExpression",

    "NullLiteral",
    "BooleanLiteral",
    "StringLiteral",
    "HexLiteral",
    "BitLiteral",
    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",
    "ParamMarker",

    "DataTypeList",
    "DeclareFunctionParameterList",
    "ArgumentList",
    "AssignmentList",
    "CaseBranchList",
    "CreateTableDefinitionList",
    "IdentifierList",
    "IntoOptionVariableList",
    "JoinDefinitionList",
    "SelectItemList",
    "SourceElementList",
    "ColumnIdentifierList",
    "OrderItemList",
    "IndexPartList",
    "StringList",
    "TableIdentifierList",
    "ListPartitionDefinitionList",
    "RangePartitionDefinitionList",
    "ExpressionList",
    "ExpressionListList",
    "SubPartitionDefinitionList",
    "ExpressionOrMaxValueList",
    "OrderExprList",
    "TableReferenceList",
    "IndexHintDefinitionList",
    "KeyUsageList",
    "GroupingExprList",
    "StoredProcedureStatementList",
    "ElseIfList",
    "FetchIdentifierList",
] as const;
