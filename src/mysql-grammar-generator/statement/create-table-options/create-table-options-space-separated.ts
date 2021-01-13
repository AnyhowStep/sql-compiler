import {CreateTableOptions, Node, SyntaxKind} from "../../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {oneOrMore} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {CreateTableOption} from "../../custom-data";
import {Diagnostic} from "../../../diagnostic";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8335
 */
makeCustomRule(CustomSyntaxKind.CreateTableOptionsSpaceSeparated)
    .addSubstitution(
        [
            oneOrMore(CustomSyntaxKind.CreateTableOption),
        ] as const,
        (data) : CreateTableOptions => {
            const arr : CreateTableOption[] = data[0];

            const result : Omit<CreateTableOptions, keyof Node> = {
                engine : undefined,
                maxRows : undefined,
                minRows : undefined,
                averageRowLength : undefined,
                password : undefined,
                comment : undefined,
                compression : undefined,
                encryption : undefined,
                autoIncrement : undefined,
                packKeys : undefined,
                statsAutoRecalc : undefined,
                statsPersistent : undefined,
                statsSamplePages : undefined,
                checksum : undefined,
                delayKeyWrite : undefined,
                rowFormat : undefined,
                union : undefined,
                defaultCharacterSet : undefined,
                defaultCollation : undefined,
                insertMethod : undefined,
                dataDirectory : undefined,
                indexDirectory : undefined,
                tablespace : undefined,
                storage : undefined,
                connection : undefined,
                keyBlockSize : undefined,
            };

            const syntacticErrors : Diagnostic[] = [];

            for (const item of arr) {
                if (item.syntacticErrors != undefined && item.syntacticErrors.length > 0) {
                    syntacticErrors.push(...item.syntacticErrors);
                }
                for (const k of Object.keys(item)) {
                    if (k in result) {
                        (result as any)[k] = (item as any)[k];
                        break;
                    }
                }
            }

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTableOptions,
                ...result,
                syntacticErrors : (
                    syntacticErrors.length > 0 ?
                    syntacticErrors :
                    undefined
                ),
            };
        }
    )
