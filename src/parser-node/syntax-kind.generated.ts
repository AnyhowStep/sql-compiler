export enum SyntaxKind {
    UnknownSyntax = 1000,
    UnknownStatement = 1001,
    UnknownExpression = 1002,
    BitDataType = 1003,
    BooleanDataType = 1004,
    IntegerDataType = 1005,
    DecimalDataType = 1006,
    RealDataType = 1007,
    JsonDataType = 1008,
    CharacterDataType = 1009,
    TextDataType = 1010,
    BinaryDataType = 1011,
    BlobDataType = 1012,
    DateTimeDataType = 1013,
    YearDataType = 1014,
    DateDataType = 1015,
    TimeDataType = 1016,
    TimestampDataType = 1017,
    GeometryDataType = 1018,
    GeometryCollectionDataType = 1019,
    UnionDataType = 1020,
    UnknownDataType = 1021,
    SourceFileLite = 1022,
    SourceFile = 1023,
    Program = 1024,
    DelimiterStatement = 1025,
    DefaultCollation = 1026,
    DefaultCharacterSet = 1027,
    FieldLength = 1028,
    Precision = 1029,
    CreateSchemaStatement = 1030,
    CreateSchemaOptionList = 1031,
    CreateTableStatement = 1032,
    ColumnDefinition = 1033,
    GeneratedDefinition = 1034,
    ForeignKeyReferenceDefinition = 1035,
    IndexDefinition = 1036,
    IndexPart = 1037,
    PrimaryKeyDefinition = 1038,
    ForeignKeyDefinition = 1039,
    CheckDefinition = 1040,
    SetStatement = 1041,
    Assignment = 1042,
    SelectStatement = 1043,
    SelectExpression = 1044,
    AsteriskSelectExpression = 1045,
    IntoOption = 1046,
    NamedTableReference = 1047,
    DerivedTableReference = 1048,
    FromClause = 1049,
    JoinDefinition = 1050,
    UsingClause = 1051,
    OnClause = 1052,
    GroupByClause = 1053,
    OrderByClause = 1054,
    OrderItem = 1055,
    LimitClause = 1056,
    DeclareFunctionStatement = 1057,
    DeclareFunctionParameter = 1058,
    CreateMacroStatement = 1059,
    Identifier = 1060,
    UserVariableIdentifier = 1061,
    SystemVariableIdentifier = 1062,
    TableIdentifier = 1063,
    ColumnIdentifier = 1064,
    FunctionIdentifier = 1065,
    MacroIdentifier = 1066,
    ParenthesizedExpression = 1067,
    BinaryExpression = 1068,
    UnaryExpression = 1069,
    ColumnExpression = 1070,
    FunctionCallExpression = 1071,
    RowExpression = 1072,
    MacroCallExpression = 1073,
    CaseIfExpression = 1074,
    CaseSwitchExpression = 1075,
    CaseBranch = 1076,
    MatchExpression = 1077,
    NullLiteral = 1078,
    BooleanLiteral = 1079,
    StringLiteral = 1080,
    IntegerLiteral = 1081,
    DecimalLiteral = 1082,
    RealLiteral = 1083,
    DataTypeList = 1084,
    DeclareFunctionParameterList = 1085,
    ArgumentList = 1086,
    AssignmentList = 1087,
    CaseBranchList = 1088,
    CreateTableDefinitionList = 1089,
    IdentifierList = 1090,
    IntoOptionVariableList = 1091,
    JoinDefinitionList = 1092,
    SelectExpressionList = 1093,
    SourceElementList = 1094,
    ColumnIdentifierList = 1095,
    OrderItemList = 1096,
    IndexPartList = 1097,
}

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

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

