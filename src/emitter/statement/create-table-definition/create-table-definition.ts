import {CreateTableDefinition, switchSyntaxKind, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitCheckDefinition} from "./check-definition";
import {emitColumnDefinition} from "./column-definition";
import {emitForeignKeyDefinition} from "./foreign-key-definition";
import {emitIndexDefinition} from "./index-definition";
import {emitPrimaryKeyDefinition} from "./primary-key-definition";

export function emitCreateTableDefinition (def : CreateTableDefinition) : StringBuilder {
    return switchSyntaxKind(def)
        .case(SyntaxKind.ColumnDefinition, emitColumnDefinition)
        .case(SyntaxKind.IndexDefinition, emitIndexDefinition)
        .case(SyntaxKind.CheckDefinition, emitCheckDefinition)
        .case(SyntaxKind.PrimaryKeyDefinition, emitPrimaryKeyDefinition)
        .case(SyntaxKind.ForeignKeyDefinition, emitForeignKeyDefinition)
        .default(() => new StringBuilder().append("TODO"));
}
