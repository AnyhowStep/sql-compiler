import {IndexType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {union} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

makeCustomRule(CustomSyntaxKind.IndexType)
    .addSubstitution(
        [
            TokenKind.USING,
            union(
                TokenKind.BTREE,
                TokenKind.HASH
            )
        ] as const,
        (data) => {
            return {
                ...getTextRange(data),
                indexType : {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.Value,
                    value : (
                        data[1][0].tokenKind == TokenKind.BTREE ?
                        IndexType.BTREE :
                        IndexType.HASH
                    ),
                },
            };
        }
    )
