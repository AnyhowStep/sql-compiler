import {AlterTableStandaloneStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterTableStandaloneStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLE,
            SyntaxKind.TableIdentifier,

            SyntaxKind.AlterTableModifiers,
            TokenKind.Comma,

            union(
                [TokenKind.DISCARD, TokenKind.TABLESPACE] as const,
                [TokenKind.IMPORT, TokenKind.TABLESPACE] as const,
            ),
        ] as const,
        (data) : AlterTableStandaloneStatement => {
            const [
                ,
                ,
                tableIdentifier,

                alterTableModifiers,
                ,

                alterTableItem,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableStandaloneStatement,
                tableIdentifier,
                alterTableModifiers,
                alterTableItem : toValueNode(
                    (
                        alterTableItem[0][0].tokenKind == TokenKind.DISCARD ?
                        "DISCARD TABLESPACE" :
                        "IMPORT TABLESPACE"
                    ),
                    getTextRange(alterTableItem)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLE,
            SyntaxKind.TableIdentifier,

            union(
                [TokenKind.DISCARD, TokenKind.TABLESPACE] as const,
                [TokenKind.IMPORT, TokenKind.TABLESPACE] as const,
            ),
        ] as const,
        (data) : AlterTableStandaloneStatement => {
            const [
                ,
                ,
                tableIdentifier,

                alterTableItem,
            ] = data;

            const start = tableIdentifier.end;
            const end = tableIdentifier.end;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableStandaloneStatement,
                tableIdentifier,
                alterTableModifiers : {
                    start,
                    end,
                    syntaxKind : SyntaxKind.AlterTableModifiers,
                    alterTableLock : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableLock,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    },
                    alterTableAlgorithm : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableAlgorithm,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    },
                    alterTableValidation : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableValidation,
                        withValidation : false,
                    },
                },
                alterTableItem : toValueNode(
                    (
                        alterTableItem[0][0].tokenKind == TokenKind.DISCARD ?
                        "DISCARD TABLESPACE" :
                        "IMPORT TABLESPACE"
                    ),
                    getTextRange(alterTableItem)
                ),
            };
        }
    );
