/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L1149-L1169
 *
 * https://dev.mysql.com/doc/refman/5.7/en/operator-precedence.html
 */
export const Precedence = {
    BitwiseXor : 120,
    Modulo : 110,
    IntegerDivision : 110,
    Division : 110,
    Multiplication : 110,
    Minus : 100,
    Plus : 100,
    BitwiseShift : 90,
    BitwiseAnd : 80,
    BitwiseOr : 70,
    Comparison : 60,
    AND : 40,
    XOR : 30,
    OR : 20,
    ColonEqual : 10,

    /**
     * ```
     *  SELECT 'a' 'b'
     * ```
     *
     * Could be one of the following,
     * + `SELECT 'a' AS 'b'`
     * + `SELECT 'ab'`
     */
    ConcatenatedTextLiteral : 1,
};
