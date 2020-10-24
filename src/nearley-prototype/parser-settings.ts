
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
}

export type FullParserSettings = Required<ParserSettings>;

export const fullParserSettings : FullParserSettings = {
    mySqlVersion : 50799,
    allowUserVariableInLimitClause : true,
    nationalCharacterSet : "utf8",
};
