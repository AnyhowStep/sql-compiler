import {cannotExpect, choice, consumeUnexpected, field, repeatNoSkipIfAllError, seq, tokenSymbol, useCustomExtra} from "../../grammar-builder";
import {dotIdentOrReserved, identifierOrReserved, list1, reserved, tuple} from "../rule-util";
import {SyntaxKind} from "../syntax-kind.generated";
import {extras, TokenKind} from "../token.generated";

export const TableIdentifier = choice(
    field("tableName", SyntaxKind.Ident),
    seq(
        field("schemaName", SyntaxKind.Ident),
        dotIdentOrReserved("tableName"),
    ),
    /**
     * This should not used, generally
     */
    useCustomExtra(
        //Don't use any extras, not even CustomExtras.noExtras
        "",
        seq(
            field("schemaName", reserved),
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                1
            )),
            field("dotToken", cannotExpect(TokenKind.Dot)),
            //No whitespace and linebreak allowed between dot and reserved tokens
            repeatNoSkipIfAllError(consumeUnexpected(
                tokenSymbol(extras[0], ...extras.slice(1)),
                extras,
                .25
            )),
            field("tableName", identifierOrReserved),
        )
    ),
    /**
     * Deprecated.
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L13079
     */
    dotIdentOrReserved("tableName"),
);

export const TableIdentifierTuple = tuple(SyntaxKind.TableIdentifier);
export const TableIdentifierList1 = list1(SyntaxKind.TableIdentifier);
