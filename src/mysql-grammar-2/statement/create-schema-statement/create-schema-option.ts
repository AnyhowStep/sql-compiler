import {choice, field, inline, repeat1} from "../../../grammar-builder";
import {SyntaxKind} from "../../syntax-kind.generated";

export const CreateSchemaOption = inline(choice(
    SyntaxKind.DefaultCharacterSet,
    SyntaxKind.DefaultCollate,
));

export const CreateSchemaOptionRepeat1 = repeat1(field("item", SyntaxKind.CreateSchemaOption));
