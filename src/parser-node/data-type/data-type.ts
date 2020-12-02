import {BinaryDataType} from "./binary-data-type";
import {BitDataType} from "./bit-data-type";
import {BlobDataType} from "./blob-data-type";
import {BooleanDataType} from "./boolean-data-type";
import {CharacterDataType} from "./character-data-type";
import {DateDataType} from "./date-data-type";
import {DateTimeDataType} from "./date-time-data-type";
import {DecimalDataType} from "./decimal-data-type";
import {EnumDataType} from "./enum-data-type";
import {GeometryCollectionDataType} from "./geometry-collection-data-type";
import {GeometryDataType} from "./geometry-data-type";
import {IntegerDataType} from "./integer-data-type";
import {JsonDataType} from "./json-data-type";
import {RealDataType} from "./real-data-type";
import {SetDataType} from "./set-data-type";
import {TextDataType} from "./text-data-type";
import {TimeDataType} from "./time-data-type";
import {TimestampDataType} from "./timestamp-data-type";
import {UnknownDataType} from "./unknown-data-type";
import {YearDataType} from "./year-data-type";

export type DataType =
    | BinaryDataType
    | BitDataType
    | BlobDataType
    | BooleanDataType
    | CharacterDataType
    | DateDataType
    | DateTimeDataType
    | DecimalDataType
    | EnumDataType
    | GeometryCollectionDataType
    | GeometryDataType
    | IntegerDataType
    | JsonDataType
    | RealDataType
    | SetDataType
    | TextDataType
    | TimeDataType
    | TimestampDataType
    | UnknownDataType
    | YearDataType
;
