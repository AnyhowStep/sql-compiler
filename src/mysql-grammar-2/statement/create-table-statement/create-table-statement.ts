import {field, seq, optional} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateTableStatement = seq(
    field("createToken", TokenKind.CREATE),
    field("temporaryToken", optional(TokenKind.TEMPORARY)),
    field("tableToken", TokenKind.TABLE),
    field("ifNotExists", optional(SyntaxKind.IfNotExists)),
    field("tableIdentifier", SyntaxKind.TableIdentifier),
    field("createTableDefinitionList", SyntaxKind.CreateTableDefinitionTuple1),
    field("createTableOptions", optional(SyntaxKind.CreateTableOptionSemiList1)),
    field("partition", optional(SyntaxKind.Partition)),
);
