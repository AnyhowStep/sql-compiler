import {Join, JoinType, SyntaxKind} from "../../../parser-node";
import {emitExpression} from "../../expression";
import {emitIdentifierList} from "../../identifier";
import {StringBuilder} from "../../string-builder";
import {emitTableReference} from "./table-reference";

export function emitJoin (join : Join) {
    return new StringBuilder()
        .appendBuilder(emitTableReference(join.lhs))
        .appendNewLine()
        .append(
            join.joinType == JoinType.INNER ?
            "INNER JOIN" :
            join.joinType == JoinType.CROSS ?
            "CROSS JOIN" :
            join.joinType == JoinType.STRAIGHT ?
            "STRAIGHT_JOIN" :
            join.joinType == JoinType.LEFT ?
            "LEFT JOIN" :
            join.joinType == JoinType.RIGHT ?
            "RIGHT JOIN" :
            join.joinType == JoinType.NATURAL_INNER ?
            "NATURAL JOIN" :
            join.joinType == JoinType.NATURAL_LEFT ?
            "NATURAL LEFT JOIN" :
            "NATURAL RIGHT JOIN"
        )
        .appendNewLine()
        .scope(builder => {
            if (join.rhs.syntaxKind == SyntaxKind.Join) {
                const rhs = join.rhs;
                builder
                    .append("(")
                    .indent(builder => {
                        builder
                            .appendBuilder(emitJoin(rhs))
                    })
                    .append(")")
            } else {
                builder
                    .appendBuilder(emitTableReference(join.rhs))
            }
        })
        .scope(builder => {
            if (join.joinSpecification == undefined) {
                return;
            }
            if (join.joinSpecification.syntaxKind == SyntaxKind.JoinSpecificationOn) {
                const joinSpecification = join.joinSpecification;
                builder
                    .appendNewLine()
                    .append("ON")
                    .indent(builder => {
                        builder.appendBuilder(emitExpression(joinSpecification.expr))
                    })
            } else {
                const joinSpecification = join.joinSpecification;
                builder
                    .appendNewLine()
                    .append("USING ")
                    .appendBuilder(emitIdentifierList(joinSpecification.identifiers))
            }
        })
}
