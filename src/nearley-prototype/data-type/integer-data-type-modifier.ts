import {TokenKind} from "../../scanner";
import {makeCustomRule, union, zeroOrMore} from "../nearley-util";
import {createDefaultIntegerDataTypeModifier, IntegerDataTypeModifier, processIntegerDataTypeModifier} from "../parse-util";

export const IntegerDataTypeModifierRule = makeCustomRule("IntegerDataTypeModifier")
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
