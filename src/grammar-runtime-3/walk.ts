import {MySyntaxNode, MyToken} from "./syntax-node";

export function walk (
    node : MySyntaxNode,
    onEnter : (parent : MySyntaxNode, node : MySyntaxNode|MyToken, depth : number) => void,
    onExit : (parent : MySyntaxNode, node : MySyntaxNode|MyToken, depth : number) => void,
    parent : MySyntaxNode|undefined = undefined,
    depth = 0,
) {
    onEnter(parent ?? node, node, depth);
    for (const child of node.children) {
        if ("children" in child) {
            walk(child, onEnter, onExit, node, depth+1);
        } else {
            onEnter(node, child, depth+1);
            onExit(node, child, depth+1);
        }
    }
    onExit(parent ?? node, node, depth);
}

export function walkFields (
    label : string,
    isArray : boolean,
    node : MySyntaxNode,
    onEnter : (label : string, isArray : boolean, node : MySyntaxNode|MyToken|undefined, depth : number) => void,
    onExit : (label : string, isArray : boolean, node : MySyntaxNode|MyToken|undefined, depth : number) => void,
    depth = 0
) {
    onEnter(label, isArray, node, depth);

    for (const [childLabel, childValue] of Object.entries(node.fields)) {
        if (childValue == undefined) {
            onEnter(childLabel, false, childValue, depth+1);
            onExit(childLabel, false, childValue, depth+1);
        } else if (childValue instanceof Array) {
            for (const item of childValue) {
                if ("children" in item) {
                    walkFields(childLabel, true, item, onEnter, onExit, depth+1);
                } else {
                    onEnter(childLabel, false, item, depth+1);
                    onExit(childLabel, false, item, depth+1);
                }
            }
        } else if ("children" in childValue) {
            walkFields(childLabel, false, childValue, onEnter, onExit, depth+1);
        } else {
            onEnter(childLabel, false, childValue, depth+1);
            onExit(childLabel, false, childValue, depth+1);
        }
    }

    onExit(label, isArray, node, depth);
}
