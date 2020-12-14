import {GroupByClause, OlapOption, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {makeCustomRule} from "../../factory";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";

makeCustomRule(SyntaxKind.GroupByClause)
    .addSubstitution(
        [
            TokenKind.GROUP,
            TokenKind.BY,
            SyntaxKind.GroupingExprList,
            optional([
                TokenKind.WITH,
                union(
                    /**
                     * This should trigger an error as it is unimplemented.
                     */
                    TokenKind.CUBE,
                    /**
                     * This is okay.
                     */
                    TokenKind.ROLLUP,
                ),
            ] as const),
        ] as const,
        (data) : GroupByClause => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.GroupByClause,
                groupingExprs : data[2],
                olapOption : (
                    data[3] == undefined ?
                    undefined :
                    toValueNode(
                        (
                            data[3][1][0].tokenKind == TokenKind.CUBE ?
                            OlapOption.WITH_CUBE :
                            OlapOption.WITH_ROLLUP
                        ),
                        getTextRange(data[3])
                    )
                ),
            }
        }
    );
