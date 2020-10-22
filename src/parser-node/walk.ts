import {Node} from "./node";

export function walk (
    node : Node,
    onEnter : (node : Node) => void,
    onExit : (node : Node) => void,
) {
    onEnter(node);
    for (const key of Object.keys(node)) {
        const child = (node as any)[key] as (
            | { syntaxKind : undefined, parent : Node|undefined }
            | Node
            | Node & Node[]
            | { syntaxKind : undefined, parent : Node|undefined } & (
                | { syntaxKind : undefined, parent : Node|undefined }
                | Node
            )[]
            | undefined
        );
        if (child == undefined) {
            continue;
        }

        if (child instanceof Array) {
            if (child.syntaxKind == undefined) {
                for (const item of child) {
                    if (item.syntaxKind != undefined) {
                        walk(item, onEnter, onExit);
                    }
                }
            } else {
                onEnter(child);
                for (const item of child) {
                    if (item.syntaxKind != undefined) {
                        walk(item, onEnter, onExit);
                    }
                }
                onExit(child);
            }
        } else if (child instanceof Object) {
            if (child.syntaxKind != undefined) {
                walk(child, onEnter, onExit);
            }
        }
    }
    onExit(node);
}
