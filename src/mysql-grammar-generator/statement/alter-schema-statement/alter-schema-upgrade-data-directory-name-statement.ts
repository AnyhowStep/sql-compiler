import {AlterSchemaUpgradeDataDirectoryNameStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            union(TokenKind.SCHEMA, TokenKind.DATABASE),
            SyntaxKind.Identifier,
            TokenKind.UPGRADE,
            TokenKind.DATA,
            TokenKind.DIRECTORY,
            TokenKind.NAME,
        ] as const,
        (data) : AlterSchemaUpgradeDataDirectoryNameStatement => {
            const [
                ,
                ,
                schemaName,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterSchemaUpgradeDataDirectoryNameStatement,
                schemaName,
            };
        }
    );
