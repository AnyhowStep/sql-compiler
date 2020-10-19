import {DataType} from "../../parser-node";
import {DiagnosticMessages} from "../diagnostic-messages";
import {ParserState} from "../parser-state";
import {pushSyntacticErrorAtPeek} from "../util";
import {tryParseBinaryDataType} from "./parse-binary-data-type";
import {tryParseBlobDataType} from "./parse-blob-data-type";
import {tryParseBooleanDataType} from "./parse-boolean-data-type";
import {tryParseCharacterDataType} from "./parse-character-data-type";
import {tryParseDateTimeDataType} from "./parse-date-time-data-type";
import {tryParseDecimalDataType} from "./parse-decimal-data-type";
import {tryParseGeometryCollectionDataType} from "./parse-geometry-collection-data-type";
import {tryParseGeometryDataType} from "./parse-geometry-data-type";
import {tryParseIntegerDataType} from "./parse-integer-data-type";
import {tryParseJsonDataType} from "./parse-json-data-type";
import {tryParseRealDataType} from "./parse-real-data-type";
import {tryParseTextDataType} from "./parse-text-data-type";

const dataTypeParsers = [
    tryParseBinaryDataType,
    tryParseBlobDataType,
    tryParseBooleanDataType,
    tryParseCharacterDataType,
    tryParseDateTimeDataType,
    tryParseDecimalDataType,
    tryParseGeometryCollectionDataType,
    tryParseGeometryDataType,
    tryParseIntegerDataType,
    tryParseJsonDataType,
    tryParseRealDataType,
    tryParseTextDataType,
];

export function tryParseDataType (state : ParserState, reportError : boolean) : DataType|undefined {
    for (const parser of dataTypeParsers) {
        const result = parser(state);
        if (result != undefined) {
            return result;
        }
    }

    if (reportError) {
        pushSyntacticErrorAtPeek(
            state,
            DiagnosticMessages.ExpectedDataType
        );
    }

    return undefined;
}
