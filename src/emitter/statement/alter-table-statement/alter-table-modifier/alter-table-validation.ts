import {AlterTableValidation} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableValidation (modifier : AlterTableValidation) {
    return new StringBuilder()
        .append(
            modifier.withValidation ?
            "WITH VALIDATION" :
            "WITHOUT VALIDATION"
        )
}
