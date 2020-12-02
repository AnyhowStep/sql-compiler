import {ColumnFormat, CurrentTimestamp, Expression, isSyntaxKind, Storage, StringLiteral, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {TokenObj} from "../../nearley-wrapper";
import {getTextRange} from "./text-range";
import {ColumnDefinitionModifier} from "../custom-data";

export function createDefaultColumnDefinitionModifier () : ColumnDefinitionModifier {
    return {
        start : -1,
        end : -1,

        autoIncrement : false,
        columnFormat : undefined,
        storage : undefined,
        defaultValue : undefined,

        /**
         * If `undefined`, it's nullable.
         */
        nullable : undefined,

        uniqueKey : false,
        primaryKey : false,
        comment : undefined,
        foreignKeyReferenceDefinition : undefined,

        onUpdate : undefined,

        checkDefinition : undefined,
    };
}

export function processColumnDefinitionModifier (
    //state : ParserState,
    current : ColumnDefinitionModifier,
    next : (
        | TokenObj<TokenKind.AUTO_INCREMENT>
        | readonly [
            TokenObj<TokenKind.COLUMN_FORMAT>,
            [TokenObj<TokenKind.FIXED>|TokenObj<TokenKind.DYNAMIC>|TokenObj<TokenKind.DEFAULT>]
        ]
        | readonly [
            TokenObj<TokenKind.STORAGE>,
            [TokenObj<TokenKind.DISK>|TokenObj<TokenKind.MEMORY>|TokenObj<TokenKind.DEFAULT>]
        ]
        | readonly [TokenObj<TokenKind.DEFAULT>, Expression]
        | TokenObj<TokenKind.NULL>
        | readonly [TokenObj<TokenKind.NOT>, TokenObj<TokenKind.NULL>]
        | TokenObj<TokenKind.UNIQUE>
        | TokenObj<TokenKind.UNIQUE_KEY>
        | readonly [TokenObj<TokenKind.PRIMARY> | null, TokenObj<TokenKind.KEY>]
        | readonly [TokenObj<TokenKind.COMMENT>, StringLiteral]
        | readonly [TokenObj<TokenKind.SERIAL>, TokenObj<TokenKind.DEFAULT>, TokenObj<TokenKind.VALUE>]
        | readonly [TokenObj<TokenKind.ON>, TokenObj<TokenKind.UPDATE>, CurrentTimestamp]
    )
) : ColumnDefinitionModifier {
    let result = {
        ...current,
        ...getTextRange([current, next]),
    };

    if (!(next instanceof Array)) {
        if (next.tokenKind == TokenKind.NULL) {
            //NULL
            result.nullable = {
                start : next.start,
                end : next.end,
                nullable : true,
            };
            return result;
        }

        if (next.tokenKind == TokenKind.AUTO_INCREMENT) {
            //AUTO_INCREMENT
            result.nullable = {
                start : next.start,
                end : next.end,
                nullable : false,
            };
            result.autoIncrement = true;
            return result;
        }

        if (next.tokenKind == TokenKind.UNIQUE) {
            //UNIQUE KEY
            result.uniqueKey = true;
            return result;
        }

        if (next.tokenKind == TokenKind.UNIQUE_KEY) {
            //UNIQUE KEY
            result.uniqueKey = true;
            return result;
        }

        return result;
    }

    if (next[1] instanceof Array) {
        if (next[0]?.tokenKind == TokenKind.COLUMN_FORMAT) {
            const tokenObj = next[1][0];
            result.columnFormat = (
                tokenObj.tokenKind == TokenKind.FIXED ?
                ColumnFormat.FIXED :
                tokenObj.tokenKind == TokenKind.DYNAMIC ?
                ColumnFormat.DYNAMIC :
                ColumnFormat.DEFAULT
            );
            return result;
        }

        if (next[0]?.tokenKind == TokenKind.STORAGE) {
            const tokenObj = next[1][0];
            result.storage = (
                tokenObj.tokenKind == TokenKind.DISK ?
                Storage.DISK :
                tokenObj.tokenKind == TokenKind.MEMORY ?
                Storage.MEMORY :
                Storage.DEFAULT
            );
            return result;
        }
    }

    if (
        next[0]?.tokenKind == TokenKind.DEFAULT &&
        next[1] != undefined &&
        "syntaxKind" in next[1]
    ) {
        result.defaultValue = next[1];
        return result;
    }

    if (next[0]?.tokenKind == TokenKind.NOT) {
        //NOT NULL
        result.nullable = {
            ...getTextRange(next),
            nullable : false,
        };
        return result;
    }

    if (
        next[1] != undefined &&
        "syntaxKind" in next[1] &&
        isSyntaxKind(next[1], SyntaxKind.StringLiteral)
    ) {
        //COMMENT
        result.comment = next[1];
        return result;
    }

    if (next[1] != undefined && "tokenKind" in next[1] && next[1].tokenKind == TokenKind.KEY) {
        //PRIMARY KEY
        result.nullable = {
            ...getTextRange(next),
            nullable : false,
        };
        result.primaryKey = true;
        return result;
    }

    if (next[0]?.tokenKind == TokenKind.SERIAL) {
        //SERIAL DEFAULT VALUE
        result.nullable = {
            ...getTextRange(next),
            nullable : false,
        };
        result.autoIncrement = true;
        result.uniqueKey = true;
        return result;
    }


    if (next[2] != undefined && "syntaxKind" in next[2] && next[2].syntaxKind == SyntaxKind.CurrentTimestamp) {
        //ON UPDATE CurrentTimestamp
        result.onUpdate = next[2];
        return result;
    }

    return result;
}
