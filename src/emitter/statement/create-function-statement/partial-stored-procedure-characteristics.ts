import {DatabaseAccessCharacteristic, PartialStoredProcedureCharacteristics, StoredProcedureSecurityContext} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitPartialStoredProcedureCharacteristics (characteristics : PartialStoredProcedureCharacteristics) {
    return new StringBuilder()
        .scope(builder => {
            if (characteristics.deterministic == undefined) {
                return;
            }
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
            if (!builder.isEmpty()) {
                builder
                    .appendNewLine()
            }
            builder
                .append("COMMENT ")
                .appendBuilder(emitStringLiteral(characteristics.comment))
        })
        .scope(builder => {
            if (characteristics.language == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder
                    .appendNewLine()
            }
            builder
                .append("LANGUAGE ")
                .append(characteristics.language.value)
        })
        .scope(builder => {
            if (characteristics.databaseAccessCharacteristic == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder
                    .appendNewLine()
            }
            builder
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
            if (characteristics.storedProcedureSecurityContext == undefined) {
                return;
            }
            if (!builder.isEmpty()) {
                builder
                    .appendNewLine()
            }
            builder
                .append(
                    characteristics.storedProcedureSecurityContext.value == StoredProcedureSecurityContext.DEFINER ?
                    "SQL SECURITY DEFINER" :
                    "SQL SECURITY INVOKER"
                )
        })
}
