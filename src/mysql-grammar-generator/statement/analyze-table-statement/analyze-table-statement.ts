import {AnalyzeTableStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule, CustomSyntaxKind} from "../../factory";

makeCustomRule(SyntaxKind.AnalyzeTableStatement)
    .addSubstitution(
        [
            TokenKind.ANALYZE,
            optional(union(TokenKind.NO_WRITE_TO_BINLOG, TokenKind.LOCAL)),
            union(TokenKind.TABLE, TokenKind.TABLES),
            CustomSyntaxKind.TableIdentifierList2,
        ] as const,
        (data) : AnalyzeTableStatement => {
            const [
                ,
                noWriteToBinLog,
                ,

                tableIdentifierList,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AnalyzeTableStatement,
                noWriteToBinLog : noWriteToBinLog != undefined,
                tableIdentifierList,
            }
        }
    )
