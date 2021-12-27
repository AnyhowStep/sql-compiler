import {choice} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const Statement = choice(
    //TODO
    SyntaxKind.BinLogStatement,
    SyntaxKind.CreateSchemaStatement,
    SyntaxKind.CreateTableStatement,
    SyntaxKind.CreateTableLikeStatement,
    SyntaxKind.CreateTableLikeStatement2,
    SyntaxKind.DropTableStatement,
    SyntaxKind.SelectStatement,
);
