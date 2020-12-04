import {CreateTableDefinition, switchSyntaxKind, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitCheckDefinition} from "./check-definition";
import {emitColumnDefinition} from "./column-definition";
import {emitIndexDefinition} from "./index-definition";

export function emitCreateTableDefinition (def : CreateTableDefinition) : StringBuilder {
    return switchSyntaxKind(def)
        .case(SyntaxKind.ColumnDefinition, emitColumnDefinition)
        .case(SyntaxKind.IndexDefinition, emitIndexDefinition)
        .case(SyntaxKind.CheckDefinition, emitCheckDefinition)
        .default(() => new StringBuilder().append("TODO"));
}
