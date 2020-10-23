import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {DataTypeRule} from "../../data-type/data-type";
import {ExpressionRule} from "../../expression/expression";
import {
    makeCustomRule,
    makeRule,
    optional,
    union,
    zeroOrMore,
} from "../../nearley-util";
import {
    ColumnDefinitionModifier,
    createDefaultColumnDefinitionModifier,
    getTextRange,
    processColumnDefinitionModifier,
} from "../../parse-util";

const ColumnModifierElementRule = makeCustomRule("ColumnModifierElement")
    .addSubstitution(
        [
            union(
                TokenKind.AUTO_INCREMENT,
                [TokenKind.COLUMN_FORMAT, union(TokenKind.FIXED, TokenKind.DYNAMIC, TokenKind.DEFAULT)] as const,
                [TokenKind.STORAGE, union(TokenKind.DISK, TokenKind.MEMORY)] as const,
                [TokenKind.DEFAULT, ExpressionRule] as const,
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

const ColumnModifierRule = makeCustomRule<ColumnDefinitionModifier>("ColumnModifier")
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

makeRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            DataTypeRule,
            ColumnModifierRule,
        ] as const,
        (data) => {
            const [columnIdentifier, dataType, modifier] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : undefined,

                ...modifier,
            };
        }
    );
