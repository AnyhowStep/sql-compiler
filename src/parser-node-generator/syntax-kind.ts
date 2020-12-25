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

    "CreateFunctionStatement",
    "StoredFunctionParameter",
    "StoredFunctionParameterList",
    "StoredProcedureCharacteristics",

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
    "StoredProcedureIdentifier",
    "AccountIdentifier",

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
] as const;
