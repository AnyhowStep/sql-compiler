import {RealDataType, SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {union, optional} from "../../nearley-wrapper";
import {getTextRange} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(SyntaxKind.RealDataType)
    .addSubstitution(
        [
            union(
                TokenKind.REAL,
                TokenKind.DOUBLE,
                [TokenKind.DOUBLE, TokenKind.PRECISION] as const,
            ),
            optional(CustomSyntaxKind.RealPrecision),
            CustomSyntaxKind.IntegerDataTypeModifier,
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
