import {Node} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface CreateTableDefinition extends Node {
}

export interface CreateTableDefinitionList extends NodeArray2<SyntaxKind.CreateTableDefinitionList, CreateTableDefinition> {

}
