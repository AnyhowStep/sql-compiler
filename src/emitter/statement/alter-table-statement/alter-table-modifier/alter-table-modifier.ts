import {AlterTableModifier, SyntaxKind} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";
import {emitAlterTableAlgorithm, emitAlterTableLock} from "../../create-index-statement";
import {emitAlterTableValidation} from "./alter-table-validation";

export function emitAlterTableModifier (modifier : AlterTableModifier) : StringBuilder {
    switch (modifier.syntaxKind) {
        case SyntaxKind.AlterTableLock:
            return emitAlterTableLock(modifier)
        case SyntaxKind.AlterTableAlgorithm:
            return emitAlterTableAlgorithm(modifier)
        case SyntaxKind.AlterTableValidation:
            return emitAlterTableValidation(modifier)
    }
}
