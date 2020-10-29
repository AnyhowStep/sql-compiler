import {SyntaxKind} from "../parser-node";
import {TokenKind} from "../scanner";

declare module "../nearley-wrapper" {
    interface CustomSubstitutionToData {
        [SyntaxKind.DecimalLiteral] : 1
        [SyntaxKind.DeclareFunctionParameterList] : 2
    }

    interface CustomToken extends Array<1|2> {

    }
}
