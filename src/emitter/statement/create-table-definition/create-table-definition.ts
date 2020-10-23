import {CreateTableDefinition, switchSyntaxKind, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitColumnDefinition} from "./column-definition";

export function emitCreateTableDefinition (def : CreateTableDefinition) : StringBuilder {
    return switchSyntaxKind(def)
        .case(SyntaxKind.ColumnDefinition, def => emitColumnDefinition(def))
        .default(() => new StringBuilder());
}
