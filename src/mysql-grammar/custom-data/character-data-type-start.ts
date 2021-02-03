import {Identifier} from "../../parser-node";

export interface CharacterDataTypeStart {
    start : number;
    end : number;
    variableLength : boolean;
    nationalCharacterSet : Identifier|undefined;
}
