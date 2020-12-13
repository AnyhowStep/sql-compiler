import {Data, TextRange} from "../nearley-wrapper";

export function getStart (
    data : Data
) : number {
    if (data == null) {
        return -1;
    }
    if ("start" in data) {
        return data.start;
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

    throw new Error(`Unable to get start`);
}

export function getEnd (
    data : Data
) : number {
    if (data == null) {
        return -1;
    }
    if ("end" in data) {
        return data.end;
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

    throw new Error(`Unable to get end`);
}

export function getTextRange (data : Data) : TextRange {
    return {
        start : getStart(data),
        end : getEnd(data),
    };
}
