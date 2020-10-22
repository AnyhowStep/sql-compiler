import {Identifier, IndexType, IntegerLiteral, isSyntaxKind, StringLiteral, SyntaxKind, TextRange} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {TokenObj} from "../nearley-util";
import {IndexTypeNode} from "../statement/create-table-definition/index-type";
import {getTextRange} from "./text-range";

export interface IndexOption extends TextRange {
    indexType : IndexType|undefined;
    keyBlockSize : IntegerLiteral|undefined;
    comment : StringLiteral|undefined;
    withParser : Identifier|undefined;
}

export function createDefaultIndexOption () : IndexOption {
    return {
        start : -1,
        end : -1,

        indexType : undefined,
        keyBlockSize : undefined,
        comment : undefined,
        withParser : undefined,
    };
}

export function processIndexOption (
    //state : ParserState,
    current : IndexOption,
    next : (
        | readonly [
            TokenObj<TokenKind.KEY_BLOCK_SIZE>,
            TokenObj<TokenKind.Equal> | null,
            IntegerLiteral
        ]
        | IndexTypeNode
        | readonly [TokenObj<TokenKind.WITH>, TokenObj<TokenKind.PARSER>, Identifier]
        | StringLiteral
    )
) : IndexOption {
    let result = {
        ...current,
        ...getTextRange([current, next]),
    };

    if ("syntaxKind" in next) {
        result.comment = next;
        return result;
    }

    if ("indexType" in next) {
        result.indexType = next.indexType;
        return result;
    }

    if (isSyntaxKind(next[2], SyntaxKind.IntegerLiteral)) {
        result.keyBlockSize = next[2];
        return result;
    }

    result.withParser = next[2];
    return result;
}
