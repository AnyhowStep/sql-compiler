import {FromClause, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitTableReferenceList} from "./table-reference-list";

export function emitFromClause (fromClause : FromClause) {
    return new StringBuilder()
        .append("FROM")
        .indent(builder => {
            if (fromClause.tableReferenceList.syntaxKind == SyntaxKind.TableReferenceList) {
                builder
                    .appendBuilder(emitTableReferenceList(fromClause.tableReferenceList))
            } else {
                builder.append("DUAL");
            }
        })
}
