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
    IndexPart = 1027,
    PrimaryKeyDefinition = 1028,
    ForeignKeyDefinition = 1029,
    CheckDefinition = 1030,
    SetStatement = 1031,
    Assignment = 1032,
    SelectStatement = 1033,
    SelectExpression = 1034,
    AsteriskSelectExpression = 1035,
    IntoOption = 1036,
    NamedTableReference = 1037,
    DerivedTableReference = 1038,
    FromClause = 1039,
    JoinDefinition = 1040,
    UsingClause = 1041,
    OnClause = 1042,
    GroupByClause = 1043,
    OrderByClause = 1044,
    OrderItem = 1045,
    LimitClause = 1046,
    DeclareFunctionStatement = 1047,
    DeclareFunctionParameter = 1048,
    CreateMacroStatement = 1049,
    Identifier = 1050,
    UserVariableIdentifier = 1051,
    SystemVariableIdentifier = 1052,
    TableIdentifier = 1053,
    ColumnIdentifier = 1054,
    FunctionIdentifier = 1055,
    MacroIdentifier = 1056,
    ParenthesizedExpression = 1057,
    BinaryExpression = 1058,
    UnaryExpression = 1059,
    ColumnExpression = 1060,
    FunctionCallExpression = 1061,
    RowExpression = 1062,
    MacroCallExpression = 1063,
    CaseIfExpression = 1064,
    CaseSwitchExpression = 1065,
    CaseBranch = 1066,
    MatchExpression = 1067,
    NullLiteral = 1068,
    BooleanLiteral = 1069,
    StringLiteral = 1070,
    IntegerLiteral = 1071,
    DecimalLiteral = 1072,
    RealLiteral = 1073,
    DataTypeList = 1074,
    DeclareFunctionParameterList = 1075,
    ArgumentList = 1076,
    AssignmentList = 1077,
    CaseBranchList = 1078,
    CreateTableDefinitionList = 1079,
    IdentifierList = 1080,
    IntoOptionVariableList = 1081,
    JoinDefinitionList = 1082,
    SelectExpressionList = 1083,
    SourceElementList = 1084,
    ColumnIdentifierList = 1085,
    OrderItemList = 1086,
    IndexPartList = 1087,
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
    "IndexPart",
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
    "IndexPartList",

] as const;

