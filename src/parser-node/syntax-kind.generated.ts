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
    UnionDataType = 1021,
    UnknownDataType = 1022,
    SourceFileLite = 1023,
    SourceFile = 1024,
    Program = 1025,
    DelimiterStatement = 1026,
    DefaultCollation = 1027,
    DefaultCharacterSet = 1028,
    FieldLength = 1029,
    Precision = 1030,
    CreateSchemaStatement = 1031,
    CreateSchemaOptionList = 1032,
    CreateTableStatement = 1033,
    ColumnDefinition = 1034,
    GeneratedDefinition = 1035,
    ForeignKeyReferenceDefinition = 1036,
    IndexDefinition = 1037,
    IndexPart = 1038,
    PrimaryKeyDefinition = 1039,
    ForeignKeyDefinition = 1040,
    CheckDefinition = 1041,
    SetStatement = 1042,
    Assignment = 1043,
    SelectStatement = 1044,
    SelectExpression = 1045,
    AsteriskSelectExpression = 1046,
    IntoOption = 1047,
    NamedTableReference = 1048,
    DerivedTableReference = 1049,
    FromClause = 1050,
    JoinDefinition = 1051,
    UsingClause = 1052,
    OnClause = 1053,
    GroupByClause = 1054,
    OrderByClause = 1055,
    OrderItem = 1056,
    LimitClause = 1057,
    DeclareFunctionStatement = 1058,
    DeclareFunctionParameter = 1059,
    CreateMacroStatement = 1060,
    Identifier = 1061,
    UserVariableIdentifier = 1062,
    SystemVariableIdentifier = 1063,
    TableIdentifier = 1064,
    ColumnIdentifier = 1065,
    FunctionIdentifier = 1066,
    MacroIdentifier = 1067,
    ParenthesizedExpression = 1068,
    BinaryExpression = 1069,
    UnaryExpression = 1070,
    ColumnExpression = 1071,
    FunctionCallExpression = 1072,
    RowExpression = 1073,
    MacroCallExpression = 1074,
    CaseIfExpression = 1075,
    CaseSwitchExpression = 1076,
    CaseBranch = 1077,
    MatchExpression = 1078,
    NullLiteral = 1079,
    BooleanLiteral = 1080,
    StringLiteral = 1081,
    HexLiteral = 1082,
    BitLiteral = 1083,
    IntegerLiteral = 1084,
    DecimalLiteral = 1085,
    RealLiteral = 1086,
    DataTypeList = 1087,
    DeclareFunctionParameterList = 1088,
    ArgumentList = 1089,
    AssignmentList = 1090,
    CaseBranchList = 1091,
    CreateTableDefinitionList = 1092,
    IdentifierList = 1093,
    IntoOptionVariableList = 1094,
    JoinDefinitionList = 1095,
    SelectExpressionList = 1096,
    SourceElementList = 1097,
    ColumnIdentifierList = 1098,
    OrderItemList = 1099,
    IndexPartList = 1100,
    StringList = 1101,
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

