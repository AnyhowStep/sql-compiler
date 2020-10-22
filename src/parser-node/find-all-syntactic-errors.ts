import {Diagnostic} from "../diagnostic";
import {Node} from "./node";
import {walk} from "./walk";

export function findAllSyntacticErrors (
    root : Node
) : Diagnostic[] {
    const result : Diagnostic[] = [];

    walk(
        root,
        node => {
            if (node.syntacticErrors != undefined) {
                result.push(...node.syntacticErrors);
            }
        },
        () => {}
    );

    return result;
}
