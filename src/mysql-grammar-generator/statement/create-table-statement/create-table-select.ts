import {CreateTableSelectOnDuplicate, CreateTableSelect, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateTableSelect)
    .addSubstitution(
        [
            optional(union(
                TokenKind.IGNORE,
                TokenKind.REPLACE,
            )),
            optional(TokenKind.AS),
            CustomSyntaxKind.SelectStatement,
        ] as const,
        (data) : CreateTableSelect => {
            const [
                onDuplicate,
                ,
                select,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableSelect,
                onDuplicate : (
                    onDuplicate == undefined ?
                    undefined :
                    onDuplicate[0].tokenKind == TokenKind.IGNORE ?
                    CreateTableSelectOnDuplicate.IGNORE :
                    CreateTableSelectOnDuplicate.REPLACE
                ),
                select,
            };
        }
    );
