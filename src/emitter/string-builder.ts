
export class StringBuilder {
    private lineIndex : number = 0;
    private curLineLength : number = 0;
    private maxLineLength : number = 0;
    private arr : string[] = [];
    private indentStr : string = "";
    private shouldIndent : boolean = false;

    public getLineIndex () : number {
        return this.lineIndex;
    }

    public getCurLineLength () : number {
        return this.curLineLength;
    }

    public getMaxLineLength () : number {
        return this.maxLineLength;
    }

    public appendNewLine () : this {
        this.arr.push("\n");
        this.shouldIndent = true;
        ++this.lineIndex;
        //We pretend the indentStr isn't part of the line
        this.curLineLength = 0;
        return this;
    }

    /**
     * If `str` contains a newline, we assume it is probably
     * a string literal with a newline.
     *
     * We **do not** want to mess with the indentation or newline
     * characters of the string literal.
     */
    public append (str : string|undefined) : this {
        if (str == undefined) {
            return this;
        }
        const lines = str.split(/(\r\n?|\n)/);
        for (let i=0; i<lines.length; ++i) {
            const line = lines[i];
            if (i%2 == 0) {
                this.curLineLength += line.length;
                if (this.curLineLength > this.maxLineLength) {
                    this.maxLineLength = this.curLineLength;
                }
            } else {
                ++this.lineIndex;
                this.curLineLength = 0;
            }
        }
        if (this.shouldIndent) {
            this.shouldIndent = false;
            this.arr.push(this.indentStr);
        }
        this.arr.push(str);
        return this;
    }

    public appendBuilder (other : StringBuilder) : this {
        if (other.lineIndex == 0) {
            //Single-line string builder
            this.curLineLength += other.curLineLength;
            if (this.curLineLength > this.maxLineLength) {
                this.maxLineLength = this.curLineLength;
            }
            if (this.shouldIndent) {
                this.shouldIndent = false;
                this.arr.push(this.indentStr);
            }
            this.arr.push(...other.arr);
            return this;
        }

        //Multi-line string builder
        for (const otherPart of other.arr) {
            if (otherPart == "\n") {
                this.appendNewLine();
            } else {
                this.append(otherPart);
            }
        }
        return this;
    }

    public indent (callback : (builder : this) => void) : this {
        const curIndent = this.indentStr;
        this.indentStr += "    ";
        this.appendNewLine();
        callback(this);
        this.indentStr = curIndent;
        return this;
    }

    public scope (callback : (builder : this) => void) : this {
        callback(this);
        return this;
    }

    public loop<T extends unknown> (
        arr : readonly T[],
        separatorCallback : (builder : this, item : T, index : number) => void,
        itemCallback : (builder : this, item : T, index : number) => void
    ) : this {
        for (let i=0; i<arr.length; ++i) {
            const item = arr[i];
            if (i > 0) {
                separatorCallback(this, item, i);
            }
            itemCallback(this, item, i);
        }
        return this;
    }

    public build () : string {
        return this.arr.join("");
    }

    public shouldMultiLine () : boolean {
        return this.maxLineLength > 80 || this.lineIndex > 0;
    }

    public isMultiLine () {
        return this.lineIndex > 0;
    }

    public isEmpty () {
        return this.arr.length == 0;
    }
}

export function shouldMultiLine (...arr : readonly StringBuilder[]) : boolean {
    let totalShouldMultiLine = false;
    let totalMaxLineLength = 0;

    for (const builder of arr) {
        totalMaxLineLength += builder.getMaxLineLength();
        totalShouldMultiLine = totalShouldMultiLine || builder.shouldMultiLine() || totalMaxLineLength > 80;
    }
    return totalShouldMultiLine;
}
