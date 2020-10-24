
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
};
