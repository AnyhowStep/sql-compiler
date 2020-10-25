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
    GeometryDataType = 1017,
    GeometryCollectionDataType = 1018,
    UnionDataType = 1019,
    UnknownDataType = 1020,
    SourceFileLite = 1021,
    SourceFile = 1022,
    Program = 1023,
    DelimiterStatement = 1024,
    DefaultCollation = 1025,
    DefaultCharacterSet = 1026,
    FieldLength = 1027,
    Precision = 1028,
    CreateSchemaStatement = 1029,
    CreateSchemaOptionList = 1030,
    CreateTableStatement = 1031,
    ColumnDefinition = 1032,
    GeneratedDefinition = 1033,
    ForeignKeyReferenceDefinition = 1034,
    IndexDefinition = 1035,
    IndexPart = 1036,
    PrimaryKeyDefinition = 1037,
    ForeignKeyDefinition = 1038,
    CheckDefinition = 1039,
    SetStatement = 1040,
    Assignment = 1041,
    SelectStatement = 1042,
    SelectExpression = 1043,
    AsteriskSelectExpression = 1044,
    IntoOption = 1045,
    NamedTableReference = 1046,
    DerivedTableReference = 1047,
    FromClause = 1048,
    JoinDefinition = 1049,
    UsingClause = 1050,
    OnClause = 1051,
    GroupByClause = 1052,
    OrderByClause = 1053,
    OrderItem = 1054,
    LimitClause = 1055,
    DeclareFunctionStatement = 1056,
    DeclareFunctionParameter = 1057,
    CreateMacroStatement = 1058,
    Identifier = 1059,
    UserVariableIdentifier = 1060,
    SystemVariableIdentifier = 1061,
    TableIdentifier = 1062,
    ColumnIdentifier = 1063,
    FunctionIdentifier = 1064,
    MacroIdentifier = 1065,
    ParenthesizedExpression = 1066,
    BinaryExpression = 1067,
    UnaryExpression = 1068,
    ColumnExpression = 1069,
    FunctionCallExpression = 1070,
    RowExpression = 1071,
    MacroCallExpression = 1072,
    CaseIfExpression = 1073,
    CaseSwitchExpression = 1074,
    CaseBranch = 1075,
    MatchExpression = 1076,
    NullLiteral = 1077,
    BooleanLiteral = 1078,
    StringLiteral = 1079,
    IntegerLiteral = 1080,
    DecimalLiteral = 1081,
    RealLiteral = 1082,
    DataTypeList = 1083,
    DeclareFunctionParameterList = 1084,
    ArgumentList = 1085,
    AssignmentList = 1086,
    CaseBranchList = 1087,
    CreateTableDefinitionList = 1088,
    IdentifierList = 1089,
    IntoOptionVariableList = 1090,
    JoinDefinitionList = 1091,
    SelectExpressionList = 1092,
    SourceElementList = 1093,
    ColumnIdentifierList = 1094,
    OrderItemList = 1095,
    IndexPartList = 1096,
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

