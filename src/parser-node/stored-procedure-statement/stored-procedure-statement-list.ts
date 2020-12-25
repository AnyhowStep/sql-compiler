import {NodeArray2} from "../node-array";
import {StoredProcedureStatement} from "../statement";
import {SyntaxKind} from "../syntax-kind.generated";

export interface StoredProcedureStatementList extends NodeArray2<SyntaxKind.StoredProcedureStatementList, StoredProcedureStatement> {

}
