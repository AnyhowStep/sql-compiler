import {BinaryDataType} from "./binary-data-type";
import {BlobDataType} from "./blob-data-type";
import {BooleanDataType} from "./boolean-data-type";
import {CharacterDataType} from "./character-data-type";
import {DateTimeDataType} from "./date-time-data-type";
import {DecimalDataType} from "./decimal-data-type";
import {GeometryCollectionDataType} from "./geometry-collection-data-type";
import {GeometryDataType} from "./geometry-data-type";
import {IntegerDataType} from "./integer-data-type";
import {JsonDataType} from "./json-data-type";
import {RealDataType} from "./real-data-type";
import {TextDataType} from "./text-data-type";
import {UnknownDataType} from "./unknown-data-type";

export type DataType =
    | BinaryDataType
    | BlobDataType
    | BooleanDataType
    | CharacterDataType
    | DateTimeDataType
    | DecimalDataType
    | GeometryCollectionDataType
    | GeometryDataType
    | IntegerDataType
    | JsonDataType
    | RealDataType
    | TextDataType
    | UnknownDataType
;
