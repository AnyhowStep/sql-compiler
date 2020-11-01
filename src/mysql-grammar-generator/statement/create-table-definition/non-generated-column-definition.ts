import {SyntaxKind} from "../../../parser-node";
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
                [TokenKind.STORAGE, union(TokenKind.DISK, TokenKind.MEMORY)] as const,
                [TokenKind.DEFAULT, CustomSyntaxKind.Expression] as const,
                TokenKind.NULL,
                [TokenKind.NOT, TokenKind.NULL] as const,
                TokenKind.UNIQUE,
                TokenKind.UNIQUE_KEY,
                [optional(TokenKind.PRIMARY), TokenKind.KEY] as const,
                [TokenKind.COMMENT, SyntaxKind.StringLiteral] as const,
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
    );
