import {DatabaseAccessCharacteristic, StoredProcedureSecurityContext, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange, toValueNode} from "../../parse-util";
import {StoredProcedureCharacteristic} from "../../custom-data";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2726
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L2708
 */
makeCustomRule(CustomSyntaxKind.StoredProcedureCharacteristic)
    .addSubstitution(
        [
            TokenKind.DETERMINISTIC,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                deterministic : toValueNode(
                    true,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.NOT,
            TokenKind.DETERMINISTIC,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                deterministic : toValueNode(
                    false,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.COMMENT,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                comment : data[1],
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.LANGUAGE,
            TokenKind.SQL,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                language : toValueNode(
                    "SQL",
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.NO,
            TokenKind.SQL,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                databaseAccessCharacteristic : toValueNode(
                    DatabaseAccessCharacteristic.NO_SQL,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.CONTAINS,
            TokenKind.SQL,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                databaseAccessCharacteristic : toValueNode(
                    DatabaseAccessCharacteristic.CONTAINS_SQL,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.READS,
            TokenKind.SQL,
            TokenKind.DATA,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                databaseAccessCharacteristic : toValueNode(
                    DatabaseAccessCharacteristic.READS_SQL_DATA,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.MODIFIES,
            TokenKind.SQL,
            TokenKind.DATA,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                databaseAccessCharacteristic : toValueNode(
                    DatabaseAccessCharacteristic.MODIFIES_SQL_DATA,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL,
            TokenKind.SECURITY,
            TokenKind.DEFINER,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                storedProcedureSecurityContext : toValueNode(
                    StoredProcedureSecurityContext.DEFINER,
                    getTextRange(data)
                ),
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL,
            TokenKind.SECURITY,
            TokenKind.INVOKER,
        ] as const,
        (data) : StoredProcedureCharacteristic => {
            return {
                ...getTextRange(data),
                storedProcedureSecurityContext : toValueNode(
                    StoredProcedureSecurityContext.INVOKER,
                    getTextRange(data)
                ),
            };
        }
    )
