import {TextRange} from "../../parser-node";

export interface IntegerDataTypeModifier extends TextRange {
    signed : boolean;

    /**
     * If `true`, then `signed` must be `false`
     */
    zeroFill : boolean;
}
