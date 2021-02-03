import {ColumnFormat, IntegerDataType, Storage, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {
    optional,
    union,
    zeroOrMore,
} from "../../../nearley-wrapper";
import {
    createDefaultColumnDefinitionModifier,
    getTextRange,
} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {ColumnDefinitionModifier, ColumnDefinitionModifierOption} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.ColumnDefinitionModifierOption)
    .addSubstitution(
        [TokenKind.AUTO_INCREMENT] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                autoIncrement : true,
                nullable : {
                    ...getTextRange(data),
                    nullable : false,
                },
            }
        }
    )
    .addSubstitution(
        [TokenKind.COLUMN_FORMAT, union(TokenKind.FIXED, TokenKind.DYNAMIC, TokenKind.DEFAULT)] as const,
        (data) : ColumnDefinitionModifierOption => {
            const tokenObj = data[1][0];
            return {
                ...getTextRange(data),
                columnFormat : (
                    tokenObj.tokenKind == TokenKind.FIXED ?
                    ColumnFormat.FIXED :
                    tokenObj.tokenKind == TokenKind.DYNAMIC ?
                    ColumnFormat.DYNAMIC :
                    ColumnFormat.DEFAULT
                ),
            }
        }
    )
    .addSubstitution(
        [TokenKind.STORAGE, union(TokenKind.DISK, TokenKind.MEMORY, TokenKind.DEFAULT)] as const,
        (data) : ColumnDefinitionModifierOption => {
            const tokenObj = data[1][0];
            return {
                ...getTextRange(data),
                storage : (
                    tokenObj.tokenKind == TokenKind.DISK ?
                    Storage.DISK :
                    tokenObj.tokenKind == TokenKind.MEMORY ?
                    Storage.MEMORY :
                    Storage.DEFAULT
                ),
            }
        }
    )
    .addSubstitution(
        [TokenKind.DEFAULT, CustomSyntaxKind.Expression] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                defaultValue : data[1],
            }
        }
    )
    .addSubstitution(
        [TokenKind.NULL] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                nullable : {
                    ...getTextRange(data),
                    nullable : true,
                },
            }
        }
    )
    .addSubstitution(
        [TokenKind.NOT, TokenKind.NULL] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                nullable : {
                    ...getTextRange(data),
                    nullable : false,
                },
            }
        }
    )
    .addSubstitution(
        [TokenKind.UNIQUE] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                uniqueKey : true,
            }
        }
    )
    .addSubstitution(
        [TokenKind.UNIQUE_KEY] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                uniqueKey : true,
            }
        }
    )
    .addSubstitution(
        [optional(TokenKind.PRIMARY), TokenKind.KEY] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                primaryKey : true,
                nullable : {
                    ...getTextRange(data),
                    nullable : false,
                }
            }
        }
    )
    .addSubstitution(
        [TokenKind.COMMENT, SyntaxKind.StringLiteral] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                comment : data[1],
            }
        }
    )
    .addSubstitution(
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6898
         */
        [TokenKind.SERIAL, TokenKind.DEFAULT, TokenKind.VALUE] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                nullable : {
                    ...getTextRange(data),
                    nullable : false,
                },
                autoIncrement : true,
                uniqueKey : true,
            }
        }
    )
    .addSubstitution(
        [TokenKind.ON, TokenKind.UPDATE, SyntaxKind.CurrentTimestamp] as const,
        (data) : ColumnDefinitionModifierOption => {
            return {
                ...getTextRange(data),
                onUpdate : data[2],
            }
        }
    )

makeCustomRule(CustomSyntaxKind.ColumnDefinitionModifier)
    .addSubstitution(
        [
            zeroOrMore(CustomSyntaxKind.ColumnDefinitionModifierOption),
            optional(union(
                CustomSyntaxKind.ColumnCheckDefinition,
                SyntaxKind.ForeignKeyReferenceDefinition,
            )),
        ] as const,
        (data) : ColumnDefinitionModifier => {
            let columnDefinitionModifier = createDefaultColumnDefinitionModifier();

            for (const item of data[0]) {
                for (const k of Object.keys(item)) {
                    if (k in columnDefinitionModifier) {
                        (columnDefinitionModifier as any)[k] = (item as any)[k];
                    }
                }
            }

            const checkOrForeignKeyReference = data[1];
            if (checkOrForeignKeyReference != undefined) {
                if (checkOrForeignKeyReference[0].syntaxKind == SyntaxKind.CheckDefinition) {
                    columnDefinitionModifier.checkDefinition = checkOrForeignKeyReference[0];
                } else {
                    columnDefinitionModifier.foreignKeyReferenceDefinition = checkOrForeignKeyReference[0];
                }
            }

            return {
                ...getTextRange(data),
                ...columnDefinitionModifier,
            };
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
