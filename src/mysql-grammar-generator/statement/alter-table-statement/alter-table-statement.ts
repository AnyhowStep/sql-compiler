import {AlterTableStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterTableStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            TokenKind.TABLE,
            SyntaxKind.TableIdentifier,

            SyntaxKind.AlterTableItemOrModifierList,

            optional(union(
                CustomSyntaxKind.Partition,
                [TokenKind.REMOVE, TokenKind.PARTITIONING] as const,
            )),
        ] as const,
        (data) : AlterTableStatement => {
            const [
                ,
                ,
                tableIdentifier,

                alterTableItemOrModifierList,

                partition,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterTableStatement,
                tableIdentifier,
                alterTableItemOrModifierList,
                partition : (
                    partition == undefined ?
                    undefined :
                    partition[0] instanceof Array ?
                    toValueNode(
                        "REMOVE PARTITIONING",
                        getTextRange(partition)
                    ) :
                    partition[0]
                ),
            };
        }
    );
