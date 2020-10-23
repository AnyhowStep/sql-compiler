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
    DefaultCollation = 1021,
    DefaultCharacterSet = 1022,
    CreateSchemaStatement = 1023,
    CreateSchemaOptionList = 1024,
    CreateTableStatement = 1025,
    ColumnDefinition = 1026,
    GeneratedDefinition = 1027,
    ForeignKeyReferenceDefinition = 1028,
    IndexDefinition = 1029,
    IndexPart = 1030,
    PrimaryKeyDefinition = 1031,
    ForeignKeyDefinition = 1032,
    CheckDefinition = 1033,
    SetStatement = 1034,
    Assignment = 1035,
    SelectStatement = 1036,
    SelectExpression = 1037,
    AsteriskSelectExpression = 1038,
    IntoOption = 1039,
    NamedTableReference = 1040,
    DerivedTableReference = 1041,
    FromClause = 1042,
    JoinDefinition = 1043,
    UsingClause = 1044,
    OnClause = 1045,
    GroupByClause = 1046,
    OrderByClause = 1047,
    OrderItem = 1048,
    LimitClause = 1049,
    DeclareFunctionStatement = 1050,
    DeclareFunctionParameter = 1051,
    CreateMacroStatement = 1052,
    Identifier = 1053,
    UserVariableIdentifier = 1054,
    SystemVariableIdentifier = 1055,
    TableIdentifier = 1056,
    ColumnIdentifier = 1057,
    FunctionIdentifier = 1058,
    MacroIdentifier = 1059,
    ParenthesizedExpression = 1060,
    BinaryExpression = 1061,
    UnaryExpression = 1062,
    ColumnExpression = 1063,
    FunctionCallExpression = 1064,
    RowExpression = 1065,
    MacroCallExpression = 1066,
    CaseIfExpression = 1067,
    CaseSwitchExpression = 1068,
    CaseBranch = 1069,
    MatchExpression = 1070,
    NullLiteral = 1071,
    BooleanLiteral = 1072,
    StringLiteral = 1073,
    IntegerLiteral = 1074,
    DecimalLiteral = 1075,
    RealLiteral = 1076,
    DataTypeList = 1077,
    DeclareFunctionParameterList = 1078,
    ArgumentList = 1079,
    AssignmentList = 1080,
    CaseBranchList = 1081,
    CreateTableDefinitionList = 1082,
    IdentifierList = 1083,
    IntoOptionVariableList = 1084,
    JoinDefinitionList = 1085,
    SelectExpressionList = 1086,
    SourceElementList = 1087,
    ColumnIdentifierList = 1088,
    OrderItemList = 1089,
    IndexPartList = 1090,
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
     * Misc
     */
    "DefaultCollation",
    "DefaultCharacterSet",

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

