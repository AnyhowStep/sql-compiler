import {CreateViewStatement, ViewAlgorithm, ViewCheckOption, ViewSecurityContext} from "../../../parser-node";
import {emitAccountIdentifierOrCurrentUser, emitIdentifierList, emitIdentifierListMultiLine, emitTableIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitSelectStatement} from "../select-statement";

export function emitCreateViewStatement (statement : CreateViewStatement) {
    return new StringBuilder()
        .append("CREATE")
        .scope(builder => {
            if (!statement.createOrReplace.value) {
                return;
            }
            builder.indent(builder => {
                builder.append("OR REPLACE")
            })
        })
        .scope(builder => {
            if (statement.algorithm == undefined) {
                return;
            }
            const algorithm = (
                statement.algorithm.value == ViewAlgorithm.MERGE ?
                "MERGE" :
                statement.algorithm.value == ViewAlgorithm.TEMPTABLE ?
                "TEMPTABLE" :
                "UNDEFINED"

            )
            builder.indent(builder => {
                builder
                    .append("ALGORITHM = ")
                    .append(algorithm)
            })
        })
        .indent(builder => {
            builder
                .append("DEFINER = ")
                .appendBuilder(emitAccountIdentifierOrCurrentUser(statement.definer))
        })
        .indent(builder => {
            builder
                .append(
                    statement.viewSecurityContext.value == ViewSecurityContext.DEFINER ?
                    "SQL SECURITY DEFINER" :
                    "SQL SECURITY INVOKER"
                )
        })
        .indent(builder => {
            if (statement.columns == undefined) {
                builder
                    .append("VIEW ")
                    .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
                    .append(" AS")
                return;
            }
            let part = new StringBuilder()
                .append("VIEW ")
                .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
                .append(" ")
                .appendBuilder(emitIdentifierList(statement.columns))
                .append(" AS")

            if (part.shouldMultiLine() && !part.isMultiLine()) {
                part = new StringBuilder()
                    .append("VIEW ")
                    .appendBuilder(emitTableIdentifier(statement.tableIdentifier))
                    .append(" ")
                    .appendBuilder(emitIdentifierListMultiLine(statement.columns))
                    .append(" AS")
            }

            builder.appendBuilder(part)
        })
        .indent(builder => {
            builder
                .appendBuilder(emitSelectStatement(statement.selectStatement))
        })
        .scope(builder => {
            if (statement.checkOption == undefined) {
                return;
            }
            const checkOption = (
                statement.checkOption.value == ViewCheckOption.CASCADED ?
                "CASCADED" :
                "LOCAL"
            );
            builder.indent(builder => {
                builder
                    .append("WITH ")
                    .append(checkOption)
                    .append(" CHECK OPTION")
            })
        })
}
