export enum SyntaxKind {
    UnknownSyntax = 1000,
    UnknownStatement = 1001,
    UnknownExpression = 1002,
    BooleanDataType = 1003,
    IntegerDataType = 1004,
    DecimalDataType = 1005,
    RealDataType = 1006,
    JsonDataType = 1007,
    CharacterDataType = 1008,
    TextDataType = 1009,
    BinaryDataType = 1010,
    BlobDataType = 1011,
    DateTimeDataType = 1012,
    GeometryDataType = 1013,
    GeometryCollectionDataType = 1014,
    UnionDataType = 1015,
    UnknownDataType = 1016,
    SourceFile = 1017,
    Program = 1018,
    DelimiterStatement = 1019,
    CreateSchemaStatement = 1020,
    CreateTableStatement = 1021,
    ColumnDefinition = 1022,
    GeneratedDefinition = 1023,
    ForeignKeyReferenceDefinition = 1024,
    IndexDefinition = 1025,
    PrimaryKeyDefinition = 1026,
    ForeignKeyDefinition = 1027,
    CheckDefinition = 1028,
    SetStatement = 1029,
    Assignment = 1030,
    SelectStatement = 1031,
    SelectExpression = 1032,
    AsteriskSelectExpression = 1033,
    IntoOption = 1034,
    NamedTableReference = 1035,
    DerivedTableReference = 1036,
    FromClause = 1037,
    JoinDefinition = 1038,
    UsingClause = 1039,
    OnClause = 1040,
    GroupByClause = 1041,
    OrderByClause = 1042,
    OrderItem = 1043,
    LimitClause = 1044,
    DeclareFunctionStatement = 1045,
    DeclareFunctionParameter = 1046,
    CreateMacroStatement = 1047,
    Identifier = 1048,
    UserVariableIdentifier = 1049,
    SystemVariableIdentifier = 1050,
    TableIdentifier = 1051,
    ColumnIdentifier = 1052,
    FunctionIdentifier = 1053,
    MacroIdentifier = 1054,
    ParenthesizedExpression = 1055,
    BinaryExpression = 1056,
    UnaryExpression = 1057,
    ColumnExpression = 1058,
    FunctionCallExpression = 1059,
    RowExpression = 1060,
    MacroCallExpression = 1061,
    CaseIfExpression = 1062,
    CaseSwitchExpression = 1063,
    CaseBranch = 1064,
    MatchExpression = 1065,
    NullLiteral = 1066,
    BooleanLiteral = 1067,
    StringLiteral = 1068,
    IntegerLiteral = 1069,
    DecimalLiteral = 1070,
    RealLiteral = 1071,
    DataTypeList = 1072,
    DeclareFunctionParameterList = 1073,
    ArgumentList = 1074,
    AssignmentList = 1075,
    CaseBranchList = 1076,
    CreateTableDefinitionList = 1077,
    IdentifierList = 1078,
    IntoOptionVariableList = 1079,
    JoinDefinitionList = 1080,
    SelectExpressionList = 1081,
    SourceElementList = 1082,
    ColumnIdentifierList = 1083,
    OrderItemList = 1084,
}

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

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

    "GeometryDataType",
    "GeometryCollectionDataType",

    "UnionDataType",
    "UnknownDataType",

    /**
     * Top-Level nodes
     */
    "SourceFile",
    "Program",

    /**
     * The custom delimiter is used for the MySQL
     * `DELIMITER` command.
     */
    "DelimiterStatement",

    /**
     * Statements
     */
    "CreateSchemaStatement",

    "CreateTableStatement",
    "ColumnDefinition",
    "GeneratedDefinition",
    "ForeignKeyReferenceDefinition",
    "IndexDefinition",
    "PrimaryKeyDefinition",
    "ForeignKeyDefinition",
    "CheckDefinition",

    "SetStatement",
    "Assignment",

    "SelectStatement",
    "SelectExpression",
    "AsteriskSelectExpression",
    "IntoOption",
    "NamedTableReference",
    "DerivedTableReference",
    "FromClause",
    "JoinDefinition",
    "UsingClause",
    "OnClause",
    "GroupByClause",
    "OrderByClause",
    "OrderItem",
    "LimitClause",

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
    "IntegerLiteral",
    "DecimalLiteral",
    "RealLiteral",

    "DataTypeList",
    "DeclareFunctionParameterList",
    "ArgumentList",
    "AssignmentList",
    "CaseBranchList",
    "CreateTableDefinitionList",
    "IdentifierList",
    "IntoOptionVariableList",
    "JoinDefinitionList",
    "SelectExpressionList",
    "SourceElementList",
    "ColumnIdentifierList",
    "OrderItemList",

] as const;

