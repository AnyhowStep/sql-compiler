import {NamedTableFactor, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L10528
 */
makeCustomRule(SyntaxKind.NamedTableFactor)
    .addSubstitution(
        [
            SyntaxKind.TableIdentifier,
            optional(CustomSyntaxKind.UsePartition),
            optional(CustomSyntaxKind.TableAlias),
            optional(SyntaxKind.IndexHintDefinitionList),
        ] as const,
        (data) : NamedTableFactor => {
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.NamedTableFactor,
                tableIdentifier : data[0],
                usedPartitions : data[1] ?? undefined,
                alias : data[2] ?? undefined,
                indexHintDefinitions : data[3] ?? undefined,
            };
        }
    )
