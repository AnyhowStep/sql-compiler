import {RealDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {RealPrecisionRule} from "../misc/precision";
import {
    makeRule,
    union,
    optional,
} from "../nearley-util";
import {getTextRange} from "../parse-util";
import {IntegerDataTypeModifierRule} from "./integer-data-type-modifier";

makeRule(SyntaxKind.RealDataType)
    .addSubstitution(
        [
            union(
                TokenKind.REAL,
                TokenKind.DOUBLE,
                [TokenKind.DOUBLE, TokenKind.PRECISION] as const,
            ),
            optional(RealPrecisionRule),
            IntegerDataTypeModifierRule,
        ] as const,
        function (data) : RealDataType {
            const [dataType, precision, modifier] = data;
            const bytes = (
                dataType[0] instanceof Array ?
                8 :
                dataType[0].tokenKind == TokenKind.DOUBLE ?
                8 :
                this.settings.realAsFloat ?
                4 :
                8
            );
            return {
                syntaxKind : SyntaxKind.RealDataType,
                bytes,
                precision : precision ?? undefined,
                ...modifier,
                ...getTextRange(data),
            };
        }
    );
