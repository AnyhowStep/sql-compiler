import {SimpleWhenList, SimpleCaseStatement, SimpleWhen, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, oneOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray, toValueNode} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.SimpleWhen)
    .addSubstitution(
        [
            TokenKind.WHEN,
            CustomSyntaxKind.Expression,
            TokenKind.THEN,
            SyntaxKind.StoredProcedureStatementList,
        ] as const,
        (data) : SimpleWhen => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SimpleWhen,
                whenToken : toValueNode(
                    "WHEN",
                    getTextRange(data[0]),
                ),
                expr : data[1],
                statements : data[3],
            };
        }
    );

makeCustomRule(SyntaxKind.SimpleWhenList)
    .addSubstitution(
        [
            oneOrMore(SyntaxKind.SimpleWhen)
        ] as const,
        (data) : SimpleWhenList => {
            return toNodeArray(
                data[0],
                SyntaxKind.SimpleWhenList,
                getTextRange(data)
            )
        }
    )

makeCustomRule(SyntaxKind.SimpleCaseStatement)
    .addSubstitution(
        [
            TokenKind.CASE,
            CustomSyntaxKind.Expression,
            optional(SyntaxKind.SimpleWhenList),
            optional(SyntaxKind.ElseBranch),
            TokenKind.END,
            TokenKind.CASE,
        ] as const,
        (data) : SimpleCaseStatement => {
            const [
                ,
                expr,
                simpleWhens,
                elseBranch,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SimpleCaseStatement,
                caseToken : toValueNode(
                    "CASE",
                    getTextRange(data[0]),
                ),
                expr,
                simpleWhens : simpleWhens ?? undefined,
                elseBranch : elseBranch ?? undefined,
            };
        }
    );
