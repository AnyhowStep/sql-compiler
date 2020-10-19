import {DataType, SyntaxKind, UnionDataType} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {DiagnosticMessages} from "../diagnostic-messages";
import {parseSeparatedList} from "../parse-list";
import {ParserState} from "../parser-state";
import {pushSyntacticErrorAtPeek} from "../util";
import {tryParseDataType} from "./try-parse-data-type";

export function parseUnionDataType (state : ParserState) : UnionDataType {
    const dataTypes = parseSeparatedList<DataType>(
        state,
        SyntaxKind.DataTypeList,
        TokenKind.Bar,
        (_, peekedToken) => {
            switch (peekedToken) {
                case TokenKind.Comma:
                case TokenKind.CloseParentheses:
                    return true;
                default:
                    return false;
            }
        },
        () => undefined,
        () => {
            const result = tryParseDataType(state, true);
            return result;
        },
    );

    if (dataTypes.length == 0) {
        pushSyntacticErrorAtPeek(
            state,
            DiagnosticMessages.ExpectedDataType
        );
    }

    return {
        start : dataTypes.start,
        end : dataTypes.end,
        syntaxKind : SyntaxKind.UnionDataType,
        dataTypes,
    }
}
