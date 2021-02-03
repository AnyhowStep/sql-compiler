import {TextRange} from "../../parser-node";
import {IndexOptions} from "../custom-data";

export function createDefaultIndexOption () : Omit<IndexOptions, keyof TextRange> {
    return {
        indexType : undefined,
        keyBlockSize : undefined,
        comment : undefined,
        withParser : undefined,
    };
}
