import {AlterTableLockAndAlgorithmOptions, SyntaxKind} from "../../../parser-node";
import {makeCustomRule} from "../../factory";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L8366
 */
makeCustomRule(SyntaxKind.AlterTableLockAndAlgorithmOptions)
    .addSubstitution(
        [
            SyntaxKind.AlterTableLock,
            optional(SyntaxKind.AlterTableAlgorithm),
        ] as const,
        (data) : AlterTableLockAndAlgorithmOptions => {
            const [
                alterTableLock,
                alterTableAlgorithm,
            ] = data;

            const start = alterTableLock.end;
            const end = alterTableLock.end;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableLockAndAlgorithmOptions,
                alterTableLock,
                alterTableAlgorithm : (
                    alterTableAlgorithm == undefined ?
                    {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableAlgorithm,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    } :
                    alterTableAlgorithm
                ),
            };
        }
    )
    .addSubstitution(
        [
            optional([
                SyntaxKind.AlterTableAlgorithm,
                optional(SyntaxKind.AlterTableLock),
            ] as const),
        ] as const,
        (data) : AlterTableLockAndAlgorithmOptions => {
            if (data[0] == undefined) {
                const start = -1;
                const end = -1;

                return {
                    ...getTextRange(data),
                    syntaxKind : SyntaxKind.AlterTableLockAndAlgorithmOptions,
                    alterTableLock : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableLock,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    },
                    alterTableAlgorithm : {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableAlgorithm,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    },
                };
            }

            const [
                alterTableAlgorithm,
                alterTableLock,
            ] = data[0];

            const start = alterTableAlgorithm.end;
            const end = alterTableAlgorithm.end;

            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableLockAndAlgorithmOptions,
                alterTableLock : (
                    alterTableLock == undefined ?
                    {
                        start,
                        end,
                        syntaxKind : SyntaxKind.AlterTableLock,
                        identifier : {
                            start,
                            end,
                            syntaxKind : SyntaxKind.Identifier,
                            quoted : false,
                            identifier : "DEFAULT",
                        }
                    } :
                    alterTableLock
                ),
                alterTableAlgorithm,
            };
        }
    )
