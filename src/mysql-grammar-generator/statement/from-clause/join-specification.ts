import {JoinSpecification, JoinSpecificationOn, JoinSpecificationUsing, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";
import {TokenKind} from "../../../scanner";

makeCustomRule(SyntaxKind.JoinSpecificationOn)
    .addSubstitution(
        [
            TokenKind.ON,
            CustomSyntaxKind.Expression,
        ] as const,
        (data) : JoinSpecificationOn => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.JoinSpecificationOn,
                expr : data[1],
            };
        }
    )

makeCustomRule(SyntaxKind.JoinSpecificationUsing)
    .addSubstitution(
        [
            TokenKind.USING,
            SyntaxKind.IdentifierList,
        ] as const,
        (data) : JoinSpecificationUsing => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.JoinSpecificationUsing,
                identifiers : data[1],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.JoinSpecification)
    .addSubstitution(
        [
            union(
                SyntaxKind.JoinSpecificationOn,
                SyntaxKind.JoinSpecificationUsing,
            ),
        ] as const,
        (data) : JoinSpecification => {
            return data[0][0];
        }
    )
