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
    GeometryDataType = 1015,
    GeometryCollectionDataType = 1016,
    UnionDataType = 1017,
    UnknownDataType = 1018,
    SourceFileLite = 1019,
    SourceFile = 1020,
    Program = 1021,
    DelimiterStatement = 1022,
    DefaultCollation = 1023,
    DefaultCharacterSet = 1024,
    FieldLength = 1025,
    Precision = 1026,
    CreateSchemaStatement = 1027,
    CreateSchemaOptionList = 1028,
    CreateTableStatement = 1029,
    ColumnDefinition = 1030,
    GeneratedDefinition = 1031,
    ForeignKeyReferenceDefinition = 1032,
    IndexDefinition = 1033,
    IndexPart = 1034,
    PrimaryKeyDefinition = 1035,
    ForeignKeyDefinition = 1036,
    CheckDefinition = 1037,
    SetStatement = 1038,
    Assignment = 1039,
    SelectStatement = 1040,
    SelectExpression = 1041,
    AsteriskSelectExpression = 1042,
    IntoOption = 1043,
    NamedTableReference = 1044,
    DerivedTableReference = 1045,
    FromClause = 1046,
    JoinDefinition = 1047,
    UsingClause = 1048,
    OnClause = 1049,
    GroupByClause = 1050,
    OrderByClause = 1051,
    OrderItem = 1052,
    LimitClause = 1053,
    DeclareFunctionStatement = 1054,
    DeclareFunctionParameter = 1055,
    CreateMacroStatement = 1056,
    Identifier = 1057,
    UserVariableIdentifier = 1058,
    SystemVariableIdentifier = 1059,
    TableIdentifier = 1060,
    ColumnIdentifier = 1061,
    FunctionIdentifier = 1062,
    MacroIdentifier = 1063,
    ParenthesizedExpression = 1064,
    BinaryExpression = 1065,
    UnaryExpression = 1066,
    ColumnExpression = 1067,
    FunctionCallExpression = 1068,
    RowExpression = 1069,
    MacroCallExpression = 1070,
    CaseIfExpression = 1071,
    CaseSwitchExpression = 1072,
    CaseBranch = 1073,
    MatchExpression = 1074,
    NullLiteral = 1075,
    BooleanLiteral = 1076,
    StringLiteral = 1077,
    IntegerLiteral = 1078,
    DecimalLiteral = 1079,
    RealLiteral = 1080,
    DataTypeList = 1081,
    DeclareFunctionParameterList = 1082,
    ArgumentList = 1083,
    AssignmentList = 1084,
    CaseBranchList = 1085,
    CreateTableDefinitionList = 1086,
    IdentifierList = 1087,
    IntoOptionVariableList = 1088,
    JoinDefinitionList = 1089,
    SelectExpressionList = 1090,
    SourceElementList = 1091,
    ColumnIdentifierList = 1092,
    OrderItemList = 1093,
    IndexPartList = 1094,
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

