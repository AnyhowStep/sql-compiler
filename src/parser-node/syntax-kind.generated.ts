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
    SourceFileLite = 1017,
    SourceFile = 1018,
    Program = 1019,
    DelimiterStatement = 1020,
    CreateSchemaStatement = 1021,
    CreateTableStatement = 1022,
    ColumnDefinition = 1023,
    GeneratedDefinition = 1024,
    ForeignKeyReferenceDefinition = 1025,
    IndexDefinition = 1026,
    PrimaryKeyDefinition = 1027,
    ForeignKeyDefinition = 1028,
    CheckDefinition = 1029,
    SetStatement = 1030,
    Assignment = 1031,
    SelectStatement = 1032,
    SelectExpression = 1033,
    AsteriskSelectExpression = 1034,
    IntoOption = 1035,
    NamedTableReference = 1036,
    DerivedTableReference = 1037,
    FromClause = 1038,
    JoinDefinition = 1039,
    UsingClause = 1040,
    OnClause = 1041,
    GroupByClause = 1042,
    OrderByClause = 1043,
    OrderItem = 1044,
    LimitClause = 1045,
    DeclareFunctionStatement = 1046,
    DeclareFunctionParameter = 1047,
    CreateMacroStatement = 1048,
    Identifier = 1049,
    UserVariableIdentifier = 1050,
    SystemVariableIdentifier = 1051,
    TableIdentifier = 1052,
    ColumnIdentifier = 1053,
    FunctionIdentifier = 1054,
    MacroIdentifier = 1055,
    ParenthesizedExpression = 1056,
    BinaryExpression = 1057,
    UnaryExpression = 1058,
    ColumnExpression = 1059,
    FunctionCallExpression = 1060,
    RowExpression = 1061,
    MacroCallExpression = 1062,
    CaseIfExpression = 1063,
    CaseSwitchExpression = 1064,
    CaseBranch = 1065,
    MatchExpression = 1066,
    NullLiteral = 1067,
    BooleanLiteral = 1068,
    StringLiteral = 1069,
    IntegerLiteral = 1070,
    DecimalLiteral = 1071,
    RealLiteral = 1072,
    DataTypeList = 1073,
    DeclareFunctionParameterList = 1074,
    ArgumentList = 1075,
    AssignmentList = 1076,
    CaseBranchList = 1077,
    CreateTableDefinitionList = 1078,
    IdentifierList = 1079,
    IntoOptionVariableList = 1080,
    JoinDefinitionList = 1081,
    SelectExpressionList = 1082,
    SourceElementList = 1083,
    ColumnIdentifierList = 1084,
    OrderItemList = 1085,
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
    "SourceFileLite",
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

