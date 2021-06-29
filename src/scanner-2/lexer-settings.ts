import {characterSet} from "./character-set.generated";

export interface CharacterSet {
    characterSet : string;
    description : string;
    defaultCollation : string;
    maxLength : number;
}
export interface LexerSettings {
    characterSet : Map<string, CharacterSet>;

    ignoreSpace : boolean,
}

export const defaultLexerSettings : LexerSettings = {
    characterSet,

    ignoreSpace : true,
};
