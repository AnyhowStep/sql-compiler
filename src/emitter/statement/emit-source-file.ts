import {SourceFile} from "../../parser-node";
import {StringBuilder} from "../string-builder";
import {emitStatementList} from "./emit-statement-list";

export function emitSourceFile (file : SourceFile) : StringBuilder {
    const output = emitStatementList(file.statements);

    if (!output.isEmpty()) {
        output.appendNewLine();
    }

    return output;;
}
