import {IntoDestinationDumpFile, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.IntoDestinationDumpFile)
    .addSubstitution(
        [
            TokenKind.DUMPFILE,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : IntoDestinationDumpFile => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntoDestinationDumpFile,
                path : data[1],
            };
        }
    );
