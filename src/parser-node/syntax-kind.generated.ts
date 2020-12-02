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
    EnumDataType = 1020,
    SetDataType = 1021,
    UnionDataType = 1022,
    UnknownDataType = 1023,
    SourceFileLite = 1024,
    SourceFile = 1025,
    Program = 1026,
    DelimiterStatement = 1027,
    DefaultCollation = 1028,
    DefaultCharacterSet = 1029,
    FieldLength = 1030,
    Precision = 1031,
    CreateSchemaStatement = 1032,
    CreateSchemaOptionList = 1033,
    CreateTableStatement = 1034,
    ColumnDefinition = 1035,
    GeneratedDefinition = 1036,
    ForeignKeyReferenceDefinition = 1037,
    IndexDefinition = 1038,
    IndexPart = 1039,
    PrimaryKeyDefinition = 1040,
    ForeignKeyDefinition = 1041,
    CheckDefinition = 1042,
    SetStatement = 1043,
    Assignment = 1044,
    SelectStatement = 1045,
    SelectExpression = 1046,
    AsteriskSelectExpression = 1047,
    IntoOption = 1048,
    NamedTableReference = 1049,
    DerivedTableReference = 1050,
    FromClause = 1051,
    JoinDefinition = 1052,
    UsingClause = 1053,
    OnClause = 1054,
    GroupByClause = 1055,
    OrderByClause = 1056,
    OrderItem = 1057,
    LimitClause = 1058,
    DeclareFunctionStatement = 1059,
    DeclareFunctionParameter = 1060,
    CreateMacroStatement = 1061,
    Identifier = 1062,
    UserVariableIdentifier = 1063,
    SystemVariableIdentifier = 1064,
    TableIdentifier = 1065,
    ColumnIdentifier = 1066,
    FunctionIdentifier = 1067,
    MacroIdentifier = 1068,
    ParenthesizedExpression = 1069,
    BinaryExpression = 1070,
    UnaryExpression = 1071,
    ColumnExpression = 1072,
    FunctionCallExpression = 1073,
    RowExpression = 1074,
    MacroCallExpression = 1075,
    CaseIfExpression = 1076,
    CaseSwitchExpression = 1077,
    CaseBranch = 1078,
    MatchExpression = 1079,
    NullLiteral = 1080,
    BooleanLiteral = 1081,
    StringLiteral = 1082,
    HexLiteral = 1083,
    BitLiteral = 1084,
    IntegerLiteral = 1085,
    DecimalLiteral = 1086,
    RealLiteral = 1087,
    DataTypeList = 1088,
    DeclareFunctionParameterList = 1089,
    ArgumentList = 1090,
    AssignmentList = 1091,
    CaseBranchList = 1092,
    CreateTableDefinitionList = 1093,
    IdentifierList = 1094,
    IntoOptionVariableList = 1095,
    JoinDefinitionList = 1096,
    SelectExpressionList = 1097,
    SourceElementList = 1098,
    ColumnIdentifierList = 1099,
    OrderItemList = 1100,
    IndexPartList = 1101,
    StringList = 1102,
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

] as const;

