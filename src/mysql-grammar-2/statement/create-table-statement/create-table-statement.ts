import {field, seq, optional, repeat} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateTableStatement = seq(
    field("createToken", TokenKind.CREATE),
    field("temporaryToken", repeat(TokenKind.TEMPORARY)),
    field("tableToken", TokenKind.TABLE),
    field("ifNotExists", optional(SyntaxKind.IfNotExists)),
    field("tableIdentifier", SyntaxKind.TableIdentifier),
    field("createTableDefinitionTuple1", SyntaxKind.CreateTableDefinitionTuple1),
    field("createTableOptionSemiList1", optional(SyntaxKind.CreateTableOptionSemiList1)),
    field("partition", optional(SyntaxKind.Partition)),
);
