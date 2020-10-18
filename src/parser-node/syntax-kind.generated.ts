export enum SyntaxKind {
    UnknownSyntax = 0,
    UnknownStatement = 1,
    UnknownExpression = 2,
    SourceFile = 3,
    Program = 4,
    DelimiterStatement = 5,
    CreateSchemaStatement = 6,
    CreateTableStatement = 7,
    Column = 8,
    DataType = 9,
    SetStatement = 10,
    Assignment = 11,
    CreateMacroStatement = 12,
    SelectStatement = 13,
    SelectExpression = 14,
    AsteriskSelectExpression = 15,
    IntoOption = 16,
    NamedTableReference = 17,
    DerivedTableReference = 18,
    FromClause = 19,
    JoinDefinition = 20,
    UsingClause = 21,
    OnClause = 22,
    GroupByClause = 23,
    OrderByClause = 24,
    OrderItem = 25,
    LimitClause = 26,
    Identifier = 27,
    UserVariableIdentifier = 28,
    SystemVariableIdentifier = 29,
    TableIdentifier = 30,
    ColumnIdentifier = 31,
    FunctionIdentifier = 32,
    MacroIdentifier = 33,
    ParenthesizedExpression = 34,
    BinaryExpression = 35,
    UnaryExpression = 36,
    ColumnExpression = 37,
    FunctionCallExpression = 38,
    RowExpression = 39,
    MacroCallExpression = 40,
    CaseIfExpression = 41,
    CaseSwitchExpression = 42,
    CaseBranch = 43,
    MatchExpression = 44,
    NullLiteral = 45,
    BooleanLiteral = 46,
    StringLiteral = 47,
    IntegerLiteral = 48,
    DecimalLiteral = 49,
    RealLiteral = 50,
    ArgumentList = 51,
    AssignmentList = 52,
    CaseBranchList = 53,
    CreateTableDefinitionList = 54,
    IdentifierList = 55,
    IntoOptionVariableList = 56,
    JoinDefinitionList = 57,
    SelectExpressionList = 58,
    SourceElementList = 59,
    ColumnIdentifierList = 60,
    OrderItemList = 61,
}

//https://dev.mysql.com/doc/refman/5.7/en/manual-info.html
export const syntaxKinds = [
    "UnknownSyntax",
    "UnknownStatement",
    "UnknownExpression",

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
    "DataType",

    "SetStatement",
    "Assignment",

    "CreateMacroStatement",

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

