import {TextRange} from "../../parser-node";
import {Data} from "../nearley-util";

export function getStart (
    data : Data
) : number {
    if (data == null) {
        return -1;
    }
    if (data instanceof Array) {
        for (let i=0; i<data.length; ++i) {
            const start = getStart(data[i]);
            if (start >= 0) {
                return start;
            }
        }
        return -1;
    }

    return data.start;
}

export function getEnd (
    data : Data
) : number {
    if (data == null) {
        return -1;
    }
    if (data instanceof Array) {
        for (let i=data.length-1; i>=0; --i) {
            const end = getEnd(data[i]);
            if (end >= 0) {
                return end;
            }
        }
        return -1;
    }

    return data.end;
}

export function getTextRange (data : Data) : TextRange {
    return {
        start : getStart(data),
        end : getEnd(data),
    };
}
