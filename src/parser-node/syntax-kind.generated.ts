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
    FieldLength = 1023,
    Precision = 1024,
    CreateSchemaStatement = 1025,
    CreateSchemaOptionList = 1026,
    CreateTableStatement = 1027,
    ColumnDefinition = 1028,
    GeneratedDefinition = 1029,
    ForeignKeyReferenceDefinition = 1030,
    IndexDefinition = 1031,
    IndexPart = 1032,
    PrimaryKeyDefinition = 1033,
    ForeignKeyDefinition = 1034,
    CheckDefinition = 1035,
    SetStatement = 1036,
    Assignment = 1037,
    SelectStatement = 1038,
    SelectExpression = 1039,
    AsteriskSelectExpression = 1040,
    IntoOption = 1041,
    NamedTableReference = 1042,
    DerivedTableReference = 1043,
    FromClause = 1044,
    JoinDefinition = 1045,
    UsingClause = 1046,
    OnClause = 1047,
    GroupByClause = 1048,
    OrderByClause = 1049,
    OrderItem = 1050,
    LimitClause = 1051,
    DeclareFunctionStatement = 1052,
    DeclareFunctionParameter = 1053,
    CreateMacroStatement = 1054,
    Identifier = 1055,
    UserVariableIdentifier = 1056,
    SystemVariableIdentifier = 1057,
    TableIdentifier = 1058,
    ColumnIdentifier = 1059,
    FunctionIdentifier = 1060,
    MacroIdentifier = 1061,
    ParenthesizedExpression = 1062,
    BinaryExpression = 1063,
    UnaryExpression = 1064,
    ColumnExpression = 1065,
    FunctionCallExpression = 1066,
    RowExpression = 1067,
    MacroCallExpression = 1068,
    CaseIfExpression = 1069,
    CaseSwitchExpression = 1070,
    CaseBranch = 1071,
    MatchExpression = 1072,
    NullLiteral = 1073,
    BooleanLiteral = 1074,
    StringLiteral = 1075,
    IntegerLiteral = 1076,
    DecimalLiteral = 1077,
    RealLiteral = 1078,
    DataTypeList = 1079,
    DeclareFunctionParameterList = 1080,
    ArgumentList = 1081,
    AssignmentList = 1082,
    CaseBranchList = 1083,
    CreateTableDefinitionList = 1084,
    IdentifierList = 1085,
    IntoOptionVariableList = 1086,
    JoinDefinitionList = 1087,
    SelectExpressionList = 1088,
    SourceElementList = 1089,
    ColumnIdentifierList = 1090,
    OrderItemList = 1091,
    IndexPartList = 1092,
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

