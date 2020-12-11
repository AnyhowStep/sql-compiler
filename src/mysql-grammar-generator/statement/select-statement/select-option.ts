import {TokenKind} from "../../../scanner";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";
import {getTextRange} from "../../parse-util";
import {SelectOption} from "../../custom-data";

makeCustomRule(CustomSyntaxKind.SelectOption)
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9167
     */
    .addSubstitution(
        [
            TokenKind.SQL_NO_CACHE,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlCache : false,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL_CACHE,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlCache : true,
            };
        }
    )
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L14828
     */
    .addSubstitution(
        [
            TokenKind.STRAIGHT_JOIN,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                straightJoin : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.HIGH_PRIORITY,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                highPriority : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.DISTINCT,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                distinct : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.DISTINCTROW,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                distinct : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL_SMALL_RESULT,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlSmallResult : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL_BIG_RESULT,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlBigResult : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL_BUFFER_RESULT,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlBufferResult : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.SQL_CALC_FOUND_ROWS,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                sqlCalcFoundRows : true,
            };
        }
    )
    .addSubstitution(
        [
            TokenKind.ALL,
        ] as const,
        (data) : SelectOption => {
            return {
                ...getTextRange(data),
                distinct : false,
            };
        }
    )
