import {Node} from "../node";

export interface Statement extends Node {

    /**
     * Set by `parseSourceElementList()`
     */
    customDelimiter? : string,
}
