import {Expression} from "../../expression";
import {SyntaxKind} from "../../syntax-kind.generated";
import {CreateTableDefinition} from "./create-table-definition";

export interface CheckDefinition extends CreateTableDefinition {
    syntaxKind : SyntaxKind.CheckDefinition;

    expr : Expression;
}
