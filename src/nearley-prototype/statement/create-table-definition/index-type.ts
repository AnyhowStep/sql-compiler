import {IndexType, TextRange} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule, union} from "../../nearley-util";
import {getTextRange} from "../../parse-util";

export interface IndexTypeNode extends TextRange {
    indexType : IndexType,
}
export const IndexTypeRule = makeCustomRule("IndexType")
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
                indexType : (
                    data[1][0].tokenKind == TokenKind.BTREE ?
                    IndexType.BTREE :
                    IndexType.HASH
                ),
            };
        }
    )
