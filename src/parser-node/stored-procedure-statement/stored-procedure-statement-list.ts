import {NodeArray2} from "../node-array";
import {StoredProcedureStatement} from "./stored-procedure-statement";
import {SyntaxKind} from "../syntax-kind.generated";

export interface StoredProcedureStatementList extends NodeArray2<SyntaxKind.StoredProcedureStatementList, StoredProcedureStatement> {

}
