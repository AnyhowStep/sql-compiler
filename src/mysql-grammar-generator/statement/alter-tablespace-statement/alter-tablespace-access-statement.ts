import {AlterTablespaceAccessStatement, SyntaxKind, TablespaceAccessMode} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterTablespaceAccessStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLESPACE,
            SyntaxKind.Identifier,

            union(
                TokenKind.READ_ONLY,
                TokenKind.READ_WRITE,
                [TokenKind.NOT, TokenKind.ACCESSIBLE] as const,
            ),
        ] as const,
        (data) : AlterTablespaceAccessStatement => {
            const [
                ,
                ,
                identifier,

                accessMode,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTablespaceAccessStatement,

                identifier,
                accessMode : toValueNode(
                    (
                        accessMode[0] instanceof Array ?
                        TablespaceAccessMode.NOT_ACCESSIBLE :
                        accessMode[0].tokenKind == TokenKind.READ_ONLY ?
                        TablespaceAccessMode.READ_ONLY :
                        TablespaceAccessMode.READ_WRITE
                    ),
                    getTextRange(accessMode)
                ),
            };
        }
    );
