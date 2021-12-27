import * as fs from "fs";

interface Range {
    start : number,
    end : number,
}

function removeRanges (str : string, ranges : Range[]) : string {
    for (let i=ranges.length-1; i>=0; --i) {
        const range = ranges[i];
        str = str.substring(0, range.start) + str.substring(range.end);
    }
    return str;
}

function removeBraces (str : string) : string {
    const ranges : Range[] = [];

    let braceStart = -1;
    let braceCount = 0;
    for (let i=0; i<str.length; ++i) {
        const prv = i > 0 ? str[i-1] : undefined;
        const cur = str[i];
        if (cur == "{" && prv != "@") {
            if (braceCount == 0) {
                braceStart = i;
            }
            ++braceCount;
        } else if (cur == "}" && prv != "@") {
            --braceCount;
            if (braceCount == 0) {
                ranges.push({
                    start : braceStart,
                    end : i+1,
                });
                braceStart = -1;
            }

            if (braceCount < 0) {
                throw new Error(`Mismatched braces`);
            }
        }
    }

    if (braceStart >= 0) {
        throw new Error(`Unclosed brace`);
    }

    return removeRanges(str, ranges);
}

function removeBlankLines (str : string) : string {
    return str.replace(/\n\s*\n/g, "\n").trim();
}

function removeYaccDeclarations (str : string) : string {
    const index = str.indexOf("%%");
    return str.substring(index+2);
}

function removeMultiLineComments (str : string) : string {
    return str.replace(/\/\*.+?\*\//gs, "");
}

function removeSemicolon (str : string) : string {
    return str
        .replace(/([ a-z]);/g, "$1")
        .replace(/^;$/mg, "");
}

export function singleLineRules (str : string) : string {
    return str.replace(/([^:])\n\s+(\w|'|%)/g, "$1 $2");
}

function inlineRules (str : string) : string {
    return str.replace(
        /\w+:.+?(?=(?=\w+:)|(?=$))/gs,
        (substring) => {
            if (/ \|/.test(substring)) {
                //Is a multi-line rule
                return substring;
            }

            return substring.replace("\n", "");
        }
    );
}

export function wrapLinesWithBackticks (str : string) : string {
    return "`" + str.replace(/\n/g, "`\n`") + "`";
}

export function wrapLinesWithBlankUrls (str : string) : string {
    return "[" + str.replace(/\n/g, "]()\n[") + "]()";
}

export function addChecklist (str : string) : string {
    return "+ [ ] " + str.replace(/\n/g, "\n+ [ ] ");
}

let str = fs.readFileSync(`${__dirname}/sql_yacc.yy`, "utf8");
str = removeBraces(str);
str = removeBlankLines(str);
str = removeYaccDeclarations(str);
str = removeMultiLineComments(str);
str = removeBlankLines(str);
str = removeSemicolon(str);
str = removeBlankLines(str);
str = inlineRules(str);
str = singleLineRules(str);
str = wrapLinesWithBackticks(str);
str = wrapLinesWithBlankUrls(str);
str = addChecklist(str);

fs.writeFileSync(`${__dirname}/output.txt`, str, "utf8");
