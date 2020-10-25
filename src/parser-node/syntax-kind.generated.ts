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
    GeometryDataType = 1016,
    GeometryCollectionDataType = 1017,
    UnionDataType = 1018,
    UnknownDataType = 1019,
    SourceFileLite = 1020,
    SourceFile = 1021,
    Program = 1022,
    DelimiterStatement = 1023,
    DefaultCollation = 1024,
    DefaultCharacterSet = 1025,
    FieldLength = 1026,
    Precision = 1027,
    CreateSchemaStatement = 1028,
    CreateSchemaOptionList = 1029,
    CreateTableStatement = 1030,
    ColumnDefinition = 1031,
    GeneratedDefinition = 1032,
    ForeignKeyReferenceDefinition = 1033,
    IndexDefinition = 1034,
    IndexPart = 1035,
    PrimaryKeyDefinition = 1036,
    ForeignKeyDefinition = 1037,
    CheckDefinition = 1038,
    SetStatement = 1039,
    Assignment = 1040,
    SelectStatement = 1041,
    SelectExpression = 1042,
    AsteriskSelectExpression = 1043,
    IntoOption = 1044,
    NamedTableReference = 1045,
    DerivedTableReference = 1046,
    FromClause = 1047,
    JoinDefinition = 1048,
    UsingClause = 1049,
    OnClause = 1050,
    GroupByClause = 1051,
    OrderByClause = 1052,
    OrderItem = 1053,
    LimitClause = 1054,
    DeclareFunctionStatement = 1055,
    DeclareFunctionParameter = 1056,
    CreateMacroStatement = 1057,
    Identifier = 1058,
    UserVariableIdentifier = 1059,
    SystemVariableIdentifier = 1060,
    TableIdentifier = 1061,
    ColumnIdentifier = 1062,
    FunctionIdentifier = 1063,
    MacroIdentifier = 1064,
    ParenthesizedExpression = 1065,
    BinaryExpression = 1066,
    UnaryExpression = 1067,
    ColumnExpression = 1068,
    FunctionCallExpression = 1069,
    RowExpression = 1070,
    MacroCallExpression = 1071,
    CaseIfExpression = 1072,
    CaseSwitchExpression = 1073,
    CaseBranch = 1074,
    MatchExpression = 1075,
    NullLiteral = 1076,
    BooleanLiteral = 1077,
    StringLiteral = 1078,
    IntegerLiteral = 1079,
    DecimalLiteral = 1080,
    RealLiteral = 1081,
    DataTypeList = 1082,
    DeclareFunctionParameterList = 1083,
    ArgumentList = 1084,
    AssignmentList = 1085,
    CaseBranchList = 1086,
    CreateTableDefinitionList = 1087,
    IdentifierList = 1088,
    IntoOptionVariableList = 1089,
    JoinDefinitionList = 1090,
    SelectExpressionList = 1091,
    SourceElementList = 1092,
    ColumnIdentifierList = 1093,
    OrderItemList = 1094,
    IndexPartList = 1095,
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

