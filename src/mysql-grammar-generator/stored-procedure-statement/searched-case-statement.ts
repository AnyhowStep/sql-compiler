import {SearchedWhenList, SearchedCaseStatement, SearchedWhen, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {optional, oneOrMore} from "../../nearley-wrapper";
import {getTextRange, toNodeArray, toValueNode} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.SearchedWhen)
    .addSubstitution(
        [
            TokenKind.WHEN,
            CustomSyntaxKind.Expression,
            TokenKind.THEN,
            SyntaxKind.StoredProcedureStatementList,
        ] as const,
        (data) : SearchedWhen => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SearchedWhen,
                whenToken : toValueNode(
                    "WHEN",
                    getTextRange(data[0]),
                ),
                expr : data[1],
                statements : data[3],
            };
        }
    );

makeCustomRule(SyntaxKind.SearchedWhenList)
    .addSubstitution(
        [
            oneOrMore(SyntaxKind.SearchedWhen)
        ] as const,
        (data) : SearchedWhenList => {
            return toNodeArray(
                data[0],
                SyntaxKind.SearchedWhenList,
                getTextRange(data)
            )
        }
    )

makeCustomRule(SyntaxKind.SearchedCaseStatement)
    .addSubstitution(
        [
            TokenKind.CASE,
            optional(SyntaxKind.SearchedWhenList),
            optional(SyntaxKind.ElseBranch),
            TokenKind.END,
            TokenKind.CASE,
        ] as const,
        (data) : SearchedCaseStatement => {
            const [
                ,
                searchedWhens,
                elseBranch,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.SearchedCaseStatement,
                caseToken : toValueNode(
                    "CASE",
                    getTextRange(data[0]),
                ),
                searchedWhens : searchedWhens ?? undefined,
                elseBranch : elseBranch ?? undefined,
            };
        }
    );
