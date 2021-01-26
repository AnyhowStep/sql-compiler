import {AlterTablespaceStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterTablespaceStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLESPACE,
            SyntaxKind.Identifier,

            union(
                TokenKind.ADD,
                TokenKind.DROP,
            ),
            TokenKind.DATAFILE,
            SyntaxKind.StringLiteral,

            SyntaxKind.CreateTablespaceOptions,
        ] as const,
        (data) : AlterTablespaceStatement => {
            const [
                ,
                ,
                identifier,

                add,
                ,
                dataFile,

                createTablespaceOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTablespaceStatement,

                identifier,
                add : toValueNode(
                    add[0].tokenKind == TokenKind.ADD,
                    getTextRange(add)
                ),
                dataFile,
                createTablespaceOptions,
            };
        }
    );
