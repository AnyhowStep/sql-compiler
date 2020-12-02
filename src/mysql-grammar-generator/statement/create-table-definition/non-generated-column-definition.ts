import {IntegerDataType, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {
    optional,
    union,
    zeroOrMore,
} from "../../../nearley-wrapper";
import {
    createDefaultColumnDefinitionModifier,
    getTextRange,
    processColumnDefinitionModifier,
} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule, makeRule} from "../../factory";
import {ColumnDefinitionModifier} from "../../custom-data";

const ColumnModifierElementRule = makeRule("ColumnModifierElement")
    .addSubstitution(
        [
            union(
                TokenKind.AUTO_INCREMENT,
                [TokenKind.COLUMN_FORMAT, union(TokenKind.FIXED, TokenKind.DYNAMIC, TokenKind.DEFAULT)] as const,
                [TokenKind.STORAGE, union(TokenKind.DISK, TokenKind.MEMORY, TokenKind.DEFAULT)] as const,
                [TokenKind.DEFAULT, CustomSyntaxKind.Expression] as const,
                TokenKind.NULL,
                [TokenKind.NOT, TokenKind.NULL] as const,
                TokenKind.UNIQUE,
                TokenKind.UNIQUE_KEY,
                [optional(TokenKind.PRIMARY), TokenKind.KEY] as const,
                [TokenKind.COMMENT, SyntaxKind.StringLiteral] as const,
                /**
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6898
                 */
                [TokenKind.SERIAL, TokenKind.DEFAULT, TokenKind.VALUE] as const,
                [TokenKind.ON, TokenKind.UPDATE, SyntaxKind.CurrentTimestamp] as const,
                //TODO SyntaxKind.ForeignKeyReferenceDefinition,
            )
        ] as const,
        (data) => {
            return {
                ...getTextRange(data),
                data : data[0][0],
            };
        }
    )

makeCustomRule(CustomSyntaxKind.ColumnDefinitionModifier)
    .addSubstitution(
        [
            zeroOrMore(ColumnModifierElementRule),
        ] as const,
        (data) : ColumnDefinitionModifier => {
            let columnDefinitionModifier = createDefaultColumnDefinitionModifier();

            for (const ele of data[0]) {
                columnDefinitionModifier = processColumnDefinitionModifier(
                    columnDefinitionModifier,
                    ele.data
                );
            }

            return columnDefinitionModifier;
        }
    );

makeCustomRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            CustomSyntaxKind.DataType,
            CustomSyntaxKind.ColumnDefinitionModifier,
        ] as const,
        (data) => {
            const [columnIdentifier, dataType, modifier] = data;
            return {
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : undefined,

                ...modifier,
                ...getTextRange(data),
            };
        }
    )
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            TokenKind.SERIAL,
            CustomSyntaxKind.ColumnDefinitionModifier,
        ] as const,
        (data) => {
            const [columnIdentifier, serial, modifier] = data;

            const dataType : IntegerDataType = {
                start : serial.start,
                end : serial.end,
                syntaxKind : SyntaxKind.IntegerDataType,
                bytes : 8,
                displayWidth : undefined,
                signed : false,
                zeroFill : false,
            };

            /**
             * For some reason, we can make `SERIAL` columns nullable.
             */
            modifier.nullable = (
                modifier.nullable == undefined ?
                {
                    start : serial.start,
                    end : serial.end,
                    nullable : false,
                } :
                modifier.nullable
            );
            modifier.autoIncrement = true;
            modifier.uniqueKey = true;

            return {
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : undefined,

                ...modifier,
                ...getTextRange(data),
            };
        }
    );
