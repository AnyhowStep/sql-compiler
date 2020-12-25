import {IndexHintDefinitionList, SyntaxKind} from "../../../parser-node";
import {makeCustomRule} from "../../factory";
import {getTextRange, toNodeArray} from "../../parse-util";
import {zeroOrMore} from "../../../nearley-wrapper";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10648
 */
makeCustomRule(SyntaxKind.IndexHintDefinitionList)
    .addSubstitution(
        [
            SyntaxKind.IndexHintDefinition,
            zeroOrMore(SyntaxKind.IndexHintDefinition),
        ] as const,
        (data) : IndexHintDefinitionList => {
            const arr = data
                .flat(1);
            return toNodeArray(
                arr,
                SyntaxKind.IndexHintDefinitionList,
                getTextRange(data),
            );
        }
    )
