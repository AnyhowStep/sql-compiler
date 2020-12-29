import {GrantUser, GrantUserList} from "../../../parser-node";
import {emitExpression, emitStringLiteral} from "../../expression";
import {emitAccountIdentifier} from "../../identifier";
import {StringBuilder} from "../../string-builder";

export function emitGrantUser (grantUser : GrantUser) {
    return new StringBuilder()
        .appendBuilder(emitAccountIdentifier(grantUser.accountIdentifier))
        .append(" IDENTIFIED")
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
            builder.indent(builder => {
                builder
                    .append("BY ")
                    .appendBuilder(emitStringLiteral(grantUser.password))
            })
        })
}

export function emitGrantUserList (list : GrantUserList) {
    return new StringBuilder()
        .loop(
            list,
            builder => builder.append(",").appendNewLine(),
            (builder, grantUser) => builder
                .appendBuilder(emitGrantUser(grantUser))
        )
}
