import {UserVariableIdentifier} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitUserVariableIdentifier (expr : UserVariableIdentifier) : StringBuilder {
    return new StringBuilder().append(expr.sourceText);
}
