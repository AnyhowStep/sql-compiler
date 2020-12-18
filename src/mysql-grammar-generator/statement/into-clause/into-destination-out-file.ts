import {IntoDestinationOutFile, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(SyntaxKind.IntoDestinationOutFile)
    .addSubstitution(
        [
            TokenKind.OUTFILE,
            SyntaxKind.StringLiteral,
            optional([
                union(
                    [
                        TokenKind.CHARACTER,
                        TokenKind.SET,
                    ] as const,
                    TokenKind.CHARSET
                ),
                CustomSyntaxKind.CharacterSetNameOrDefault,
            ] as const),
            optional(SyntaxKind.FieldTerminatorOptions),
            optional(SyntaxKind.LineTerminatorOptions),
        ] as const,
        (data) : IntoDestinationOutFile => {
            const [
                ,
                path,
                characterSet,
                fieldTerminatorOptions,
                lineTerminatorOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.IntoDestinationOutFile,
                path : path,
                characterSet : (
                    characterSet == undefined ?
                    undefined :
                    characterSet[1]
                ),
                fieldTerminatorOptions : fieldTerminatorOptions ?? undefined,
                lineTerminatorOptions : lineTerminatorOptions ?? undefined,
            };
        }
    );
