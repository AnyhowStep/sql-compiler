import {BlobDataType} from "../../parser-node";
import {StringBuilder} from "../string-builder";

export function emitBlobDataType (dataType : BlobDataType) : StringBuilder {
    return new StringBuilder()
        .append(
            dataType.lengthBytes == 8 ?
            "TINYBLOB" :
            dataType.lengthBytes == 16 ?
            "BLOB" :
            dataType.lengthBytes == 24 ?
            "MEDIUMBLOB" :
            "LONGBLOB"
        );
}
