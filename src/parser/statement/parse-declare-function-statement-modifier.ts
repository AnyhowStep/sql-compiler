import {TokenKind} from "../../scanner";
import {SyntaxKind} from "../../parser-node";
import {parseList} from "../parse-list";
import {ParserState} from "../parser-state";

export interface DeclareFunctionStatementModifier {
    readonly aggregate : boolean,
    readonly window : boolean,
    readonly fromFirstLast : boolean,
    readonly nullTreatment : boolean,
}
export function parseDeclareFunctionStatementModifier (state : ParserState) : DeclareFunctionStatementModifier {
    let aggregate : boolean = false;
    let window : boolean = false;
    let fromFirstLast : boolean = false;
    let nullTreatment : boolean = false;

    parseList<true>(
        state,
        SyntaxKind.UnknownSyntax,
        (_, peekedToken) => {
            switch (peekedToken) {
                case TokenKind.AGGREGATE:
                    return false;
                case TokenKind.Identifier: {
                    const peeker = state.scanner.clone();
                    peeker.next();
                    const value = peeker.getTokenValue();
                    switch (value) {
                        case "WINDOW":
                        case "FROM_FIRST_LAST":
                        case "NULL_TREATMENT":
                            return false;
                        default:
                            return true;
                    }
                }
                default:
                    return true;
            }
        },
        () => undefined,
        () => {
            const token = state.scanner.next();
            switch (token) {
                case TokenKind.AGGREGATE:
                    aggregate = true;
                    return true;
                case TokenKind.Identifier: {
                    const value = state.scanner.getTokenValue();
                    switch (value) {
                        case "WINDOW": {
                            window = true;
                            return true;
                        }
                        case "FROM_FIRST_LAST": {
                            fromFirstLast = true;
                            return true;
                        }
                        case "NULL_TREATMENT": {
                            nullTreatment = true;
                            return true;
                        }
                        default:
                            return undefined;
                    }
                }
                default:
                    return undefined;
            }
        },
    );

    return {
        aggregate,
        window,
        fromFirstLast,
        nullTreatment,
    };
}
