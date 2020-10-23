import {CreateTableDefinition, switchSyntaxKind, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitColumnDefinition} from "./column-definition";
import {emitIndexDefinition} from "./index-definition";

export function emitCreateTableDefinition (def : CreateTableDefinition) : StringBuilder {
    return switchSyntaxKind(def)
        .case(SyntaxKind.ColumnDefinition, emitColumnDefinition)
        .case(SyntaxKind.IndexDefinition, emitIndexDefinition)
        .default(() => new StringBuilder());
}
