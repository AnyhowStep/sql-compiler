import {CreateLogFileGroupAddFile, SyntaxKind} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitCreateLogFileGroupAddFile (addFile : CreateLogFileGroupAddFile) {
    if (addFile.syntaxKind == SyntaxKind.CreateLogFileGroupAddUndoFile) {
        return new StringBuilder()
            .append("ADD UNDOFILE ")
            .appendBuilder(emitStringLiteral(addFile.undoFile));
    } else {
        return new StringBuilder()
            .append("ADD REDOFILE ")
            .appendBuilder(emitStringLiteral(addFile.redoFile));
    }
}
