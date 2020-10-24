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
    GeometryDataType = 1014,
    GeometryCollectionDataType = 1015,
    UnionDataType = 1016,
    UnknownDataType = 1017,
    SourceFileLite = 1018,
    SourceFile = 1019,
    Program = 1020,
    DelimiterStatement = 1021,
    DefaultCollation = 1022,
    DefaultCharacterSet = 1023,
    FieldLength = 1024,
    Precision = 1025,
    CreateSchemaStatement = 1026,
    CreateSchemaOptionList = 1027,
    CreateTableStatement = 1028,
    ColumnDefinition = 1029,
    GeneratedDefinition = 1030,
    ForeignKeyReferenceDefinition = 1031,
    IndexDefinition = 1032,
    IndexPart = 1033,
    PrimaryKeyDefinition = 1034,
    ForeignKeyDefinition = 1035,
    CheckDefinition = 1036,
    SetStatement = 1037,
    Assignment = 1038,
    SelectStatement = 1039,
    SelectExpression = 1040,
    AsteriskSelectExpression = 1041,
    IntoOption = 1042,
    NamedTableReference = 1043,
    DerivedTableReference = 1044,
    FromClause = 1045,
    JoinDefinition = 1046,
    UsingClause = 1047,
    OnClause = 1048,
    GroupByClause = 1049,
    OrderByClause = 1050,
    OrderItem = 1051,
    LimitClause = 1052,
    DeclareFunctionStatement = 1053,
    DeclareFunctionParameter = 1054,
    CreateMacroStatement = 1055,
    Identifier = 1056,
    UserVariableIdentifier = 1057,
    SystemVariableIdentifier = 1058,
    TableIdentifier = 1059,
    ColumnIdentifier = 1060,
    FunctionIdentifier = 1061,
    MacroIdentifier = 1062,
    ParenthesizedExpression = 1063,
    BinaryExpression = 1064,
    UnaryExpression = 1065,
    ColumnExpression = 1066,
    FunctionCallExpression = 1067,
    RowExpression = 1068,
    MacroCallExpression = 1069,
    CaseIfExpression = 1070,
    CaseSwitchExpression = 1071,
    CaseBranch = 1072,
    MatchExpression = 1073,
    NullLiteral = 1074,
    BooleanLiteral = 1075,
    StringLiteral = 1076,
    IntegerLiteral = 1077,
    DecimalLiteral = 1078,
    RealLiteral = 1079,
    DataTypeList = 1080,
    DeclareFunctionParameterList = 1081,
    ArgumentList = 1082,
    AssignmentList = 1083,
    CaseBranchList = 1084,
    CreateTableDefinitionList = 1085,
    IdentifierList = 1086,
    IntoOptionVariableList = 1087,
    JoinDefinitionList = 1088,
    SelectExpressionList = 1089,
    SourceElementList = 1090,
    ColumnIdentifierList = 1091,
    OrderItemList = 1092,
    IndexPartList = 1093,
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

