import {Expression} from "../../expression";
import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export enum GeneratedType {
    VIRTUAL,
    STORED,
}

export interface GeneratedDefinition extends Node {
    syntaxKind : SyntaxKind.GeneratedDefinition;

    expr : Expression;
    /**
     * Default is `GeneratedType.VIRTUAL`
     */
    generatedType : GeneratedType;
}
