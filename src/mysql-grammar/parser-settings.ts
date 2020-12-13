
export interface ParserSettings {
    /**
     * 5-digit number (ddddd).
     * It represents the MySQL version d.dd.dd.
     *
     * So, MySQL 5.7.31 is 50731.
     *
     * Defaults to 50799
     */
    mySqlVersion? : number,

    /**
     * Defaults to `true`
     */
    allowUserVariableInLimitClause? : boolean,

    nationalCharacterSet? : string,
    asciiCharacterSet? : string,
    asciiBinaryCollation? : string,
    unicodeCharacterSet? : string,
    unicodeBinaryCollation? : string,
    binaryCharacterSet? : string,
    binaryCollation? : string,

    characterSetToBinaryCollation? : (characterSet : String) => string,
    collationToCharacterSet? : (collation : String) => string,

    /**
     * Defaults to `false`
     */
    realAsFloat? : boolean,

    /**
     * Defaults to `false`
     */
    indexHintClauseOldMode? : boolean,
}

export type FullParserSettings = Required<ParserSettings>;

export const fullParserSettings : FullParserSettings = {
    mySqlVersion : 50799,
    allowUserVariableInLimitClause : true,
    nationalCharacterSet : "utf8",
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7085
     */
    asciiCharacterSet : "latin1",
    asciiBinaryCollation : "latin1_bin",
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7091
     */
    unicodeCharacterSet : "ucs2",
    unicodeBinaryCollation : "ucs2_bin",
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7128
     */
    binaryCharacterSet : "binary",
    binaryCollation : "binary",

    characterSetToBinaryCollation : (characterSet : String) => {
        if (characterSet.toLowerCase() == "binary") {
            return "binary";
        } else {
            return characterSet.toLowerCase() + "_bin";
        }
    },
    collationToCharacterSet : (collation : String) => {
        if (collation.toLowerCase() == "binary") {
            return "binary";
        } else {
            return collation.toLowerCase().replace(/_.*$/, "");
        }
    },

    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6785
     */
    realAsFloat : false,

    /**
     * https://dev.mysql.com/doc/refman/5.7/en/index-hints.html
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10621
     *
     * > In MySQL 5.0, hint scope with no FOR clause was to apply only to row retrieval.
     * > To cause the server to use this older behavior when no FOR clause is present,
     * > enable the old system variable at server startup.
     */
    indexHintClauseOldMode : false,
};
