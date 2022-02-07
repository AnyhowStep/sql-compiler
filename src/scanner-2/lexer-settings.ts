import {characterSet} from "./character-set.generated";

export interface CharacterSet {
    characterSet : string;
    description : string;
    defaultCollation : string;
    maxLength : number;
}
export interface LexerSettings {
    readonly characterSet : Map<string, CharacterSet>;

    readonly ignoreSpace : boolean,
    readonly highNotPrecedence : boolean,
    /**
     * https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html#sqlmode_pipes_as_concat
     */
    readonly pipesAsConcat : boolean,
}

export const defaultLexerSettings : LexerSettings = {
    characterSet,

    ignoreSpace : true,
    highNotPrecedence : false,
    pipesAsConcat : false,
};
