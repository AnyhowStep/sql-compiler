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
}

export const defaultLexerSettings : LexerSettings = {
    characterSet,

    ignoreSpace : true,
    highNotPrecedence : false,
};
