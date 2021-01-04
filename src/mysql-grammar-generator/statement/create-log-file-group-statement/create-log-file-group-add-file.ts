import {
    CreateLogFileGroupAddRedoFile,
    CreateLogFileGroupAddUndoFile,
    SyntaxKind
} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.CreateLogFileGroupAddFile)
    .addSubstitution(
        [
            TokenKind.ADD,
            TokenKind.UNDOFILE,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateLogFileGroupAddUndoFile => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateLogFileGroupAddUndoFile,

                undoFile : data[2],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ADD,
            TokenKind.REDOFILE,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateLogFileGroupAddRedoFile => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateLogFileGroupAddRedoFile,

                redoFile : data[2],
            };
        }
    );
