import {AlterTablespaceChangeStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterTablespaceChangeStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLESPACE,
            SyntaxKind.Identifier,

            TokenKind.CHANGE,
            TokenKind.DATAFILE,
            SyntaxKind.StringLiteral,

            SyntaxKind.CreateTablespaceOptions,
        ] as const,
        (data) : AlterTablespaceChangeStatement => {
            const [
                ,
                ,
                identifier,

                ,
                ,
                dataFile,

                createTablespaceOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTablespaceChangeStatement,

                identifier,
                dataFile,
                createTablespaceOptions,
            };
        }
    );
