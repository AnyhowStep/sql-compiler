import {SyntaxKind, TableReference} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitDerivedTableFactor} from "./derived-table-factor";
import {emitJoin} from "./join";
import {emitNamedTableFactor} from "./named-table-factor";
import {emitOdbcTableReference} from "./odbc-table-reference";
import {emitTableReferenceList} from "./table-reference-list";

export function emitTableReference (tableReference : TableReference) : StringBuilder {
    switch (tableReference.syntaxKind) {
        case SyntaxKind.NamedTableFactor:
            return emitNamedTableFactor(tableReference);
        case SyntaxKind.DerivedTableFactor:
            return emitDerivedTableFactor(tableReference);
        case SyntaxKind.Join:
            return emitJoin(tableReference);
        case SyntaxKind.OdbcTableReference:
            return emitOdbcTableReference(tableReference);
        case SyntaxKind.TableReferenceList:
            return new StringBuilder()
                .append("(")
                .indent(builder => {
                    builder.appendBuilder(emitTableReferenceList(tableReference))
                })
                .appendNewLine()
                .append(")")
    }
}
