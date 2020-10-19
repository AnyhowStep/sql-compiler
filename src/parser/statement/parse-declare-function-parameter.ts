import {DeclareFunctionParameter, SyntaxKind} from "../../parser-node";
import {parseUnionDataType} from "../data-type";
import {tryParseIdentifier} from "../parse-identifier";
import {ParserState} from "../parser-state";

export function parseDeclareFunctionParameter (state : ParserState) : DeclareFunctionParameter|undefined {
    const identifier = tryParseIdentifier(state, false, true);
    if (identifier == undefined) {
        return undefined;
    }

    const dataType = parseUnionDataType(state);

    return {
        start : identifier.start,
        end : dataType.end,
        syntaxKind : SyntaxKind.DeclareFunctionParameter,
        identifier,
        dataType,
    };
}
