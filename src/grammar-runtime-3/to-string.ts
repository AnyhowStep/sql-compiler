import {MySyntaxNode, MyToken} from "./syntax-node";
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
                    const errorKindStr = node.errorKind == undefined ? "" : `${node.errorKind} `;
                    buffer.push(`${indent}(${errorKindStr}${node.syntaxKind}${range}`);
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
                const errorKindStr = node.errorKind == undefined ? "" : `${node.errorKind} `;
                buffer.push(`${indent}(${errorKindStr}${label}${node.syntaxKind}${range}`);
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
