import {Expression} from "../../expression";
import {Identifier} from "../../identifier";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";

export interface CheckDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.CheckDefinition;

    constraintName : Identifier|undefined;
    expr : Expression;
}
