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
    CreateSchemaStatement = 1024,
    CreateSchemaOptionList = 1025,
    CreateTableStatement = 1026,
    ColumnDefinition = 1027,
    GeneratedDefinition = 1028,
    ForeignKeyReferenceDefinition = 1029,
    IndexDefinition = 1030,
    IndexPart = 1031,
    PrimaryKeyDefinition = 1032,
    ForeignKeyDefinition = 1033,
    CheckDefinition = 1034,
    SetStatement = 1035,
    Assignment = 1036,
    SelectStatement = 1037,
    SelectExpression = 1038,
    AsteriskSelectExpression = 1039,
    IntoOption = 1040,
    NamedTableReference = 1041,
    DerivedTableReference = 1042,
    FromClause = 1043,
    JoinDefinition = 1044,
    UsingClause = 1045,
    OnClause = 1046,
    GroupByClause = 1047,
    OrderByClause = 1048,
    OrderItem = 1049,
    LimitClause = 1050,
    DeclareFunctionStatement = 1051,
    DeclareFunctionParameter = 1052,
    CreateMacroStatement = 1053,
    Identifier = 1054,
    UserVariableIdentifier = 1055,
    SystemVariableIdentifier = 1056,
    TableIdentifier = 1057,
    ColumnIdentifier = 1058,
    FunctionIdentifier = 1059,
    MacroIdentifier = 1060,
    ParenthesizedExpression = 1061,
    BinaryExpression = 1062,
    UnaryExpression = 1063,
    ColumnExpression = 1064,
    FunctionCallExpression = 1065,
    RowExpression = 1066,
    MacroCallExpression = 1067,
    CaseIfExpression = 1068,
    CaseSwitchExpression = 1069,
    CaseBranch = 1070,
    MatchExpression = 1071,
    NullLiteral = 1072,
    BooleanLiteral = 1073,
    StringLiteral = 1074,
    IntegerLiteral = 1075,
    DecimalLiteral = 1076,
    RealLiteral = 1077,
    DataTypeList = 1078,
    DeclareFunctionParameterList = 1079,
    ArgumentList = 1080,
    AssignmentList = 1081,
    CaseBranchList = 1082,
    CreateTableDefinitionList = 1083,
    IdentifierList = 1084,
    IntoOptionVariableList = 1085,
    JoinDefinitionList = 1086,
    SelectExpressionList = 1087,
    SourceElementList = 1088,
    ColumnIdentifierList = 1089,
    OrderItemList = 1090,
    IndexPartList = 1091,
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

