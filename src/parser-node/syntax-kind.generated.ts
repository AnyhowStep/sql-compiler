export enum SyntaxKind {
    UnknownSyntax = 1000,
    UnknownStatement = 1001,
    UnknownExpression = 1002,
    Value = 1003,
    BitDataType = 1004,
    BooleanDataType = 1005,
    IntegerDataType = 1006,
    DecimalDataType = 1007,
    RealDataType = 1008,
    JsonDataType = 1009,
    CharacterDataType = 1010,
    TextDataType = 1011,
    BinaryDataType = 1012,
    BlobDataType = 1013,
    DateTimeDataType = 1014,
    YearDataType = 1015,
    DateDataType = 1016,
    TimeDataType = 1017,
    TimestampDataType = 1018,
    GeometryDataType = 1019,
    GeometryCollectionDataType = 1020,
    EnumDataType = 1021,
    SetDataType = 1022,
    UnionDataType = 1023,
    UnknownDataType = 1024,
    SourceFileLite = 1025,
    SourceFile = 1026,
    Program = 1027,
    DelimiterStatement = 1028,
    CurrentTimestamp = 1029,
    DefaultCollation = 1030,
    DefaultCharacterSet = 1031,
    FieldLength = 1032,
    Precision = 1033,
    CreateSchemaStatement = 1034,
    CreateSchemaOptionList = 1035,
    CreateTableStatement = 1036,
    ColumnDefinition = 1037,
    GeneratedDefinition = 1038,
    ForeignKeyReferenceDefinition = 1039,
    IndexDefinition = 1040,
    IndexPart = 1041,
    PrimaryKeyDefinition = 1042,
    ForeignKeyDefinition = 1043,
    CheckDefinition = 1044,
    CreateTableOptions = 1045,
    SetStatement = 1046,
    Assignment = 1047,
    SelectStatement = 1048,
    SelectExpression = 1049,
    AsteriskSelectExpression = 1050,
    IntoOption = 1051,
    NamedTableReference = 1052,
    DerivedTableReference = 1053,
    FromClause = 1054,
    JoinDefinition = 1055,
    UsingClause = 1056,
    OnClause = 1057,
    GroupByClause = 1058,
    OrderByClause = 1059,
    OrderItem = 1060,
    LimitClause = 1061,
    DeclareFunctionStatement = 1062,
    DeclareFunctionParameter = 1063,
    CreateMacroStatement = 1064,
    Identifier = 1065,
    UserVariableIdentifier = 1066,
    SystemVariableIdentifier = 1067,
    TableIdentifier = 1068,
    ColumnIdentifier = 1069,
    FunctionIdentifier = 1070,
    MacroIdentifier = 1071,
    ParenthesizedExpression = 1072,
    BinaryExpression = 1073,
    UnaryExpression = 1074,
    ColumnExpression = 1075,
    FunctionCallExpression = 1076,
    RowExpression = 1077,
    MacroCallExpression = 1078,
    CaseIfExpression = 1079,
    CaseSwitchExpression = 1080,
    CaseBranch = 1081,
    MatchExpression = 1082,
    NullLiteral = 1083,
    BooleanLiteral = 1084,
    StringLiteral = 1085,
    HexLiteral = 1086,
    BitLiteral = 1087,
    IntegerLiteral = 1088,
    DecimalLiteral = 1089,
    RealLiteral = 1090,
    DataTypeList = 1091,
    DeclareFunctionParameterList = 1092,
    ArgumentList = 1093,
    AssignmentList = 1094,
    CaseBranchList = 1095,
    CreateTableDefinitionList = 1096,
    IdentifierList = 1097,
    IntoOptionVariableList = 1098,
    JoinDefinitionList = 1099,
    SelectExpressionList = 1100,
    SourceElementList = 1101,
    ColumnIdentifierList = 1102,
    OrderItemList = 1103,
    IndexPartList = 1104,
    StringList = 1105,
    TableIdentifierList = 1106,
}

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
    "HexLiteral",
    "BitLiteral",
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
    "StringList",
    "TableIdentifierList",

] as const;

