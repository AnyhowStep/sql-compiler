import {BlobDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {ParserState} from "../parser-state";
import {tryConsumeTokenOneOf} from "../util";

export function tryParseBlobDataType (state : ParserState) : BlobDataType|undefined {
    if (!tryConsumeTokenOneOf(
        state,
        false,
        TokenKind.TINYBLOB,
        TokenKind.BLOB,
        TokenKind.MEDIUMBLOB,
        TokenKind.LONGBLOB,
    )) {
        return undefined;
    }

    const start = state.scanner.getTokenIndex();
    const token = state.scanner.current();
    const lengthBytes = (
        token == TokenKind.TINYBLOB ?
        8 :
        token == TokenKind.BLOB ?
        16 :
        token == TokenKind.MEDIUMBLOB ?
        24 :
        32
    );

    return {
        start,
        end : state.scanner.getIndex(),
        syntaxKind : SyntaxKind.BlobDataType,
        lengthBytes,
    };
}
