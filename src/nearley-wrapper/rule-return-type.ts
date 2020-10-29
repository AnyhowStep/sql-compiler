import {TextRange} from "./text-range";

export interface RuleReturnType<T extends TextRange> {
    __returnType : T;
}
