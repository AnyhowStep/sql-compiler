export enum SyntaxKind {
    UnknownSyntax = 0,
    UnknownStatement = 1,
    UnknownExpression = 2,
    BooleanDataType = 3,
    IntegerDataType = 4,
    DecimalDataType = 5,
    RealDataType = 6,
    JsonDataType = 7,
    CharacterDataType = 8,
    TextDataType = 9,
    BinaryDataType = 10,
    BlobDataType = 11,
    DateTimeDataType = 12,
    GeometryDataType = 13,
    GeometryCollectionDataType = 14,
    UnionDataType = 15,
    UnknownDataType = 16,
    SourceFile = 17,
    Program = 18,
    DelimiterStatement = 19,
    CreateSchemaStatement = 20,
    CreateTableStatement = 21,
    Column = 22,
    SetStatement = 23,
    Assignment = 24,
    SelectStatement = 25,
    SelectExpression = 26,
    AsteriskSelectExpression = 27,
    IntoOption = 28,
    NamedTableReference = 29,
    DerivedTableReference = 30,
    FromClause = 31,
    JoinDefinition = 32,
    UsingClause = 33,
    OnClause = 34,
    GroupByClause = 35,
    OrderByClause = 36,
    OrderItem = 37,
    LimitClause = 38,
    DeclareFunctionStatement = 39,
    DeclareFunctionParameter = 40,
    CreateMacroStatement = 41,
    Identifier = 42,
    UserVariableIdentifier = 43,
    SystemVariableIdentifier = 44,
    TableIdentifier = 45,
    ColumnIdentifier = 46,
    FunctionIdentifier = 47,
    MacroIdentifier = 48,
    ParenthesizedExpression = 49,
    BinaryExpression = 50,
    UnaryExpression = 51,
    ColumnExpression = 52,
    FunctionCallExpression = 53,
    RowExpression = 54,
    MacroCallExpression = 55,
    CaseIfExpression = 56,
    CaseSwitchExpression = 57,
    CaseBranch = 58,
    MatchExpression = 59,
    NullLiteral = 60,
    BooleanLiteral = 61,
    StringLiteral = 62,
    IntegerLiteral = 63,
    DecimalLiteral = 64,
    RealLiteral = 65,
    DataTypeList = 66,
    DeclareFunctionParameterList = 67,
    ArgumentList = 68,
    AssignmentList = 69,
    CaseBranchList = 70,
    CreateTableDefinitionList = 71,
    IdentifierList = 72,
    IntoOptionVariableList = 73,
    JoinDefinitionList = 74,
    SelectExpressionList = 75,
    SourceElementList = 76,
    ColumnIdentifierList = 77,
    OrderItemList = 78,
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
    "SourceFile",
    "Program",

    /**
     * The custom delimiter is used for the MySQL
     * `DELIMITER` command.
     */
    "DelimiterStatement",

    /**
     * Statements
     */
    "CreateSchemaStatement",

    "CreateTableStatement",
    "Column",

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

] as const;

