import {SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {DataTypeRule} from "../../data-type/data-type";
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

const GeneratedColumnModifierElementRule = makeCustomRule("GeneratedColumnModifierElement")
    .addSubstitution(
        [
            union(
                TokenKind.NULL,
                [TokenKind.NOT, TokenKind.NULL] as const,
                [TokenKind.UNIQUE, optional(TokenKind.KEY)] as const,
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

const GeneratedColumnModifierRule = makeCustomRule<ColumnDefinitionModifier>("GeneratedColumnModifier")
    .addSubstitution(
        [
            zeroOrMore(GeneratedColumnModifierElementRule),
        ] as const,
        (data) : ColumnDefinitionModifier => {
            let columnDefinitionModifier = createDefaultColumnDefinitionModifier();

            for (const ele of data[0]) {
                processColumnDefinitionModifier(
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
            SyntaxKind.GeneratedDefinition,
            GeneratedColumnModifierRule,
        ] as const,
        (data) => {
            const [columnIdentifier, dataType, generated, modifier] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : generated,

                ...modifier,
            };
        }
    );
