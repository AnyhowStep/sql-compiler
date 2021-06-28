import {FieldCheck, FieldLengthCheck} from "./grammar";
import {Fields, MySyntaxNode, MyToken} from "./syntax-node";
import {walk} from "./walk";

function isEqualSyntaxNode (a : MySyntaxNode, b : MySyntaxNode) {
    return (
        a.syntaxKind == b.syntaxKind &&
        a.start == b.start &&
        a.end == b.end
    );
}

function isEqualToken (a : MyToken, b : MyToken) {
    return (
        a.tokenKind == b.tokenKind &&
        a.start == b.start &&
        a.end == b.end
    );
}

function isEqualSyntaxNodeOrToken (a : MySyntaxNode|MyToken, b : MySyntaxNode|MyToken) {
    if ("children" in a) {
        if ("children" in b) {
            return isEqualSyntaxNode(a, b);
        } else {
            return false;
        }
    } else {
        if ("children" in b) {
            return false;
        } else {
            return isEqualToken(a, b);
        }
    }
}

function findLabel (parent : MySyntaxNode, node : MySyntaxNode|MyToken) : { label : string, isArray : boolean }|undefined {
    if (parent == node) {
        return undefined;
    }
    for (const [label, value] of Object.entries(parent.fields)) {
        if (value == undefined) {
            continue;
        }

        if (value instanceof Array) {
            for (const item of value) {
                if (isEqualSyntaxNodeOrToken(node, item)) {
                    return {
                        label,
                        isArray : true,
                    };
                }
            }
        } else {
            if (isEqualSyntaxNodeOrToken(node, value)) {
                return {
                    label,
                    isArray : false,
                };
            }
        }
    }

    return undefined;
}

function getRangeStr (fieldCheck : FieldLengthCheck) {
    const minLength = (
        fieldCheck.minLength == undefined || !isFinite(fieldCheck.minLength) ?
        0 :
        fieldCheck.minLength
    );

    if (fieldCheck.maxLength == undefined || !isFinite(fieldCheck.maxLength)) {
        //No max
        return `at least ${minLength}`;
    }

    if (minLength == fieldCheck.maxLength) {
        return `exactly ${minLength}`;
    }

    return `${minLength} - ${fieldCheck.maxLength}`;
}

function getLengthStr (value : Fields[string]) {
    if (value instanceof Array) {
        return value.length;
    }
    return -1;
}

function getFieldErrorsString (node : MySyntaxNode, fieldErrors : FieldCheck[]) {
    const fieldErrorStrs : string[] = [];
    for (const fieldCheck of fieldErrors) {
        const value = node.fields[fieldCheck.field];

        fieldErrorStrs.push(
            `{Expected ${getRangeStr(fieldCheck)} ${fieldCheck.field}, found ${getLengthStr(value)}}`
        );
    }

    return fieldErrorStrs;
}
export function getErrorString (node : MySyntaxNode) : string {
    if (node.errorKind == undefined) {
        if (node.fieldErrors == undefined || node.fieldErrors.length == 0) {
            //No error
            return "";
        } else {
            return getFieldErrorsString(node, node.fieldErrors).join("; ") + " ";
        }
    } else {
        if (node.fieldErrors == undefined || node.fieldErrors.length == 0) {
            return node.errorKind + " ";
        } else {
            return [
                node.errorKind,
                ...getFieldErrorsString(node, node.fieldErrors),
            ].join("; ") + " ";
        }
    }
}

export function toString2 (node : MySyntaxNode) : string {
    const buffer : string[] = [];

    walk(
        node,
        (parent, node, depth) => {
            const indent = " ".repeat(depth*2);
            const range = `[${node.start}, ${node.end}]`;
            const findLabelResult = findLabel(parent, node);

            if (findLabelResult == undefined) {
                if ("children" in node) {
                    buffer.push(`${indent}(${getErrorString(node)}${node.syntaxKind}${range}`);
                } else {
                    const errorKindStr = node.errorKind == undefined ? "" : `${node.errorKind} `;
                    buffer.push(`${indent}(${errorKindStr}${node.tokenKind}${range})`);

                    /*
                    if (node.consecutiveErrors != undefined) {
                        for (const err of node.consecutiveErrors) {
                            const errorKindStr = `${err.errorKind} `;
                            buffer.push(`${indent}(${errorKindStr}${err.tokenKind}${range})`);
                        }
                    }
                    //*/
                }
                return;
            }

            let {label} = findLabelResult;

            if (findLabelResult.isArray) {
                label += "[]";
            }
            if (depth > 0) {
                label += ": ";
            }


            if ("children" in node) {
                buffer.push(`${indent}(${getErrorString(node)}${label}${node.syntaxKind}${range}`);
            } else {
                const errorKindStr = node.errorKind == undefined ? "" : `${node.errorKind} `;
                buffer.push(`${indent}(${errorKindStr}${label}${node.tokenKind}${range})`);

                /*
                if (node.consecutiveErrors != undefined) {
                    for (const err of node.consecutiveErrors) {
                        const errorKindStr = `${err.errorKind} `;
                        buffer.push(`${indent}(${errorKindStr}${err.tokenKind}${range})`);
                    }
                }
                //*/
            }
        },
        (_parent, node, depth) => {
            const indent = " ".repeat(depth*2);
            if ("children" in node) {
                buffer.push(`${indent})`);
            }
        }
    );

    return buffer.join("\n");
}
