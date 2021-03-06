import {TokenKind} from "../../scanner";
import {union, zeroOrMore} from "../../nearley-wrapper";
import {createDefaultIntegerDataTypeModifier, processIntegerDataTypeModifier} from "../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {IntegerDataTypeModifier} from "../custom-data";

makeCustomRule(CustomSyntaxKind.IntegerDataTypeModifier)
    .addSubstitution(
        [
            zeroOrMore(union(
                TokenKind.SIGNED,
                TokenKind.UNSIGNED,
                TokenKind.ZEROFILL,
            )),
        ] as const,
        function (data) : IntegerDataTypeModifier {
            let integerDataTypeModifier = createDefaultIntegerDataTypeModifier();

            for (const ele of data[0]) {
                integerDataTypeModifier = processIntegerDataTypeModifier(
                    integerDataTypeModifier,
                    ele[0]
                );
            }

            return integerDataTypeModifier;
        }
    );
