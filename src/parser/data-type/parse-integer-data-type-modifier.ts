import {SyntaxKind} from "../../parser-node";
import {TokenKind} from "../../scanner";
import {parseList} from "../parse-list";
import {ParserState} from "../parser-state";

export interface IntegerDataTypeModifier {
    readonly signed : boolean,
    readonly zeroFill : boolean,
}
/**
 * https://dev.mysql.com/doc/refman/5.7/en/numeric-type-syntax.html
 */
export function parseIntegerDataTypeModifier (state : ParserState) : IntegerDataTypeModifier {
    let signed : boolean = true;
    let zeroFill : boolean = false;

    parseList<true>(
        state,
        SyntaxKind.UnknownSyntax,
        (_, peekedToken) => {
            switch (peekedToken) {
                case TokenKind.SIGNED:
                case TokenKind.UNSIGNED:
                case TokenKind.ZEROFILL:
                    return false;
                default:
                    return true;
            }
        },
        () => undefined,
        () => {
            const token = state.scanner.next();
            switch (token) {
                /**
                 * The `SIGNED` modifier has no effect.
                 */
                case TokenKind.SIGNED:
                    /**
                     * Numeric data types that permit the UNSIGNED attribute also permit SIGNED.
                     * However, these data types are signed by default, so the SIGNED attribute has no effect.
                     */
                    return true;
                case TokenKind.UNSIGNED:
                    signed = false;
                    return true;
                case TokenKind.ZEROFILL:
                    /**
                     * If you specify ZEROFILL for a numeric column,
                     * MySQL automatically adds the UNSIGNED attribute to the column.
                     */
                    signed = false;
                    zeroFill = true;
                    return true;
                default:
                    return undefined;
            }
        },
    );

    return {
        signed,
        zeroFill,
    };
}
