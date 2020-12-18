import {IntoDestinationDumpFile} from "./into-destination-dump-file";
import {IntoDestinationOutFile} from "./into-destination-out-file";
import {IntoDestinationVariableList} from "./into-destination-variable-list";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L11105
 */
export type IntoDestination =
    | IntoDestinationDumpFile
    | IntoDestinationOutFile
    | IntoDestinationVariableList
;
