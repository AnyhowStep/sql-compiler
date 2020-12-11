import {Node} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";
import {Statement} from "../statement";
import {Select} from "./select";

export interface Union extends Node, Statement {
    syntaxKind : SyntaxKind.Union,

    /**
     * Defaults to `true`
     */
    distinct : boolean;

    lhs : Select|Union;
    rhs : Select;
}
