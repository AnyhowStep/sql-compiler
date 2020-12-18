import {IntoDestination, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitIntoDestinationDumpFile} from "./into-destination-dump-file";
import {emitIntoDestinationOutFile} from "./into-destination-out-file";
import {emitIntoDestinationVariableList} from "./into-destination-variable-list";

export function emitIntoDestination (destination : IntoDestination) : StringBuilder {
    switch (destination.syntaxKind) {
        case SyntaxKind.IntoDestinationDumpFile:
            return emitIntoDestinationDumpFile(destination)
        case SyntaxKind.IntoDestinationOutFile:
            return emitIntoDestinationOutFile(destination)
        case SyntaxKind.IntoDestinationVariableList:
            return emitIntoDestinationVariableList(destination)
    }
}
