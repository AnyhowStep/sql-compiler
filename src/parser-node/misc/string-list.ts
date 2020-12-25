import {BitLiteral, HexLiteral, StringLiteral} from "../expression";
import {NodeArray2} from "../node-array";
import {SyntaxKind} from "../syntax-kind.generated";

export interface StringList extends NodeArray2<SyntaxKind.StringList, StringLiteral|HexLiteral|BitLiteral> {

}
