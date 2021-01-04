import {CreateLogFileGroupStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateLogFileGroupStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            TokenKind.LOGFILE,
            TokenKind.GROUP,
            SyntaxKind.Identifier,
            CustomSyntaxKind.CreateLogFileGroupAddFile,
            SyntaxKind.CreateLogFileGroupOptions,
        ] as const,
        (data) : CreateLogFileGroupStatement => {
            const [
                ,
                ,
                ,
                identifier,
                addFile,
                createLogFileGroupOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateLogFileGroupStatement,

                identifier,
                addFile,
                createLogFileGroupOptions,
            };
        }
    );
