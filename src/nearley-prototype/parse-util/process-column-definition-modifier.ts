import {ColumnFormat, Expression, ForeignKeyReferenceDefinition, isSyntaxKind, Storage, StringLiteral, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {TokenObj} from "../nearley-util";
import {getTextRange} from "./text-range";

export interface ColumnDefinitionModifier extends TextRange {
    autoIncrement : boolean,
    columnFormat : ColumnFormat|undefined,
    storage : Storage|undefined,
    defaultValue : Expression|undefined,

    nullable : boolean,

    uniqueKey : boolean,
    primaryKey : boolean,

    comment : StringLiteral|undefined,
    foreignKeyReferenceDefinition : ForeignKeyReferenceDefinition|undefined,
}

export function createDefaultColumnDefinitionModifier () : ColumnDefinitionModifier {
    return {
        start : -1,
        end : -1,

        autoIncrement : false,
        columnFormat : undefined,
        storage : undefined,
        defaultValue : undefined,

        nullable : true,

        uniqueKey : false,
        primaryKey : false,
        comment : undefined,
        foreignKeyReferenceDefinition : undefined,
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
            [TokenObj<TokenKind.DISK>|TokenObj<TokenKind.MEMORY>]
        ]
        | readonly [TokenObj<TokenKind.DEFAULT>, Expression]
        | TokenObj<TokenKind.NULL>
        | readonly [TokenObj<TokenKind.NOT>, TokenObj<TokenKind.NULL>]
        | readonly [TokenObj<TokenKind.UNIQUE>, TokenObj<TokenKind.KEY> | null]
        | readonly [TokenObj<TokenKind.PRIMARY> | null, TokenObj<TokenKind.KEY>]
        | readonly [TokenObj<TokenKind.COMMENT>, StringLiteral]
    )
) : ColumnDefinitionModifier {
    let result = {
        ...current,
        ...getTextRange([current, next]),
    };

    if (!(next instanceof Array)) {
        if (next.tokenKind == TokenKind.NULL) {
            //NULL
            return result;
        }

        if (next.tokenKind == TokenKind.AUTO_INCREMENT) {
            //AUTO_INCREMENT
            result.autoIncrement = true;
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
                Storage.MEMORY
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
        result.nullable = false;
        return result;
    }

    if (next[0]?.tokenKind == TokenKind.UNIQUE) {
        //UNIQUE KEY
        result.uniqueKey = true;
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
        result.nullable = false;
        result.primaryKey = true;
        return result;
    }

    return result;
}
