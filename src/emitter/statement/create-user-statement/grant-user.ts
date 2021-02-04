import {AlterGrantUser, AlterGrantUserList, GrantUser, GrantUserList} from "../../../parser-node";
import {emitExpression, emitStringLiteral} from "../../expression";
import {emitAccountIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitGrantUser (grantUser : GrantUser|AlterGrantUser) {
    return new StringBuilder()
        .appendBuilder(emitAccountIdentifier(grantUser.accountIdentifier))
        .append(
            grantUser.authenticationPlugin == undefined &&
            grantUser.password == undefined ?
            undefined :
            " IDENTIFIED"
        )
        .scope(builder => {
            if (grantUser.authenticationPlugin == undefined) {
                return;
            }
            const authenticationPlugin = emitExpression(grantUser.authenticationPlugin)
            builder.indent(builder => {
                builder
                    .append("WITH ")
                    .appendBuilder(authenticationPlugin)
            })
        })
        .scope(builder => {
            if (grantUser.password == undefined) {
                return;
            }

            const password = emitStringLiteral(grantUser.password)
            builder.indent(builder => {
                builder
                    .append("BY ")
                    .appendBuilder(password)
            })
        })
}

export function emitGrantUserList (list : GrantUserList|AlterGrantUserList) {
    return new StringBuilder()
        .loop<GrantUser|AlterGrantUser>(
            list,
            builder => builder.append(",").appendNewLine(),
            (builder, grantUser) => builder
                .appendBuilder(emitGrantUser(grantUser))
        )
}
