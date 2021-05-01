import {field, optional, seq} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateSchemaStatement = seq(
    field("createToken", TokenKind.CREATE),
    field("schemaToken", SyntaxKind.Schema),
    field("ifNotExists", optional(SyntaxKind.IfNotExists)),
    field("identifier", SyntaxKind.Ident),
    field("createSchemaOptionRepeat1", optional(SyntaxKind.CreateSchemaOptionRepeat1)),
);
