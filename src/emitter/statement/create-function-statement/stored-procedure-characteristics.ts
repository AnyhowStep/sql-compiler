import {DatabaseAccessCharacteristic, StoredProcedureCharacteristics, StoredProcedureSecurityContext} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitStoredProcedureCharacteristics (characteristics : StoredProcedureCharacteristics) {
    characteristics.comment
    characteristics.language
    characteristics.databaseAccessCharacteristic
    characteristics.deterministic
    characteristics.storedProcedureSecurityContext
    return new StringBuilder()
        .scope(builder => {
            builder
                .append(
                    characteristics.deterministic.value ?
                    "DETERMINISTIC" :
                    "NOT DETERMINISTIC"
                )
        })
        .scope(builder => {
            if (characteristics.comment == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("COMMENT ")
                .appendBuilder(emitStringLiteral(characteristics.comment))
        })
        .scope(builder => {
            if (characteristics.language == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append("LANGUAGE ")
                .append(characteristics.language.value)
        })
        .scope(builder => {
            if (characteristics.databaseAccessCharacteristic == undefined) {
                return;
            }
            builder
                .appendNewLine()
                .append(
                    characteristics.databaseAccessCharacteristic.value == DatabaseAccessCharacteristic.NO_SQL ?
                    "NO SQL" :
                    characteristics.databaseAccessCharacteristic.value == DatabaseAccessCharacteristic.CONTAINS_SQL ?
                    "CONTAINS SQL" :
                    characteristics.databaseAccessCharacteristic.value == DatabaseAccessCharacteristic.READS_SQL_DATA ?
                    "READS SQL DATA" :
                    "MODIFIES SQL DATA"
                )
        })
        .scope(builder => {
            builder
                .appendNewLine()
                .append(
                    characteristics.storedProcedureSecurityContext.value == StoredProcedureSecurityContext.DEFINER ?
                    "SQL SECURITY DEFINER" :
                    "SQL SECURITY INVOKER"
                )
        })
}
