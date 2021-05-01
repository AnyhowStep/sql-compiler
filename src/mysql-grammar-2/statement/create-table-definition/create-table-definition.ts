import {choice, seq} from "../../../grammar-builder";
import {tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const CreateTableDefinitionTuple1 = tuple1(SyntaxKind.CreateTableDefinition);

export const CreateTableDefinition = choice(
    SyntaxKind.ColumnDefinition,
    SyntaxKind.IndexDefinition,
    SyntaxKind.CheckDefinition,
    SyntaxKind.PrimaryKeyDefinition,
    SyntaxKind.ForeignKeyDefinition,
);

/**
 * @todo
 */
export const ColumnDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const IndexDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const CheckDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const PrimaryKeyDefinition = seq(TokenKind.UnknownToken);

/**
 * @todo
 */
export const ForeignKeyDefinition = seq(TokenKind.UnknownToken);
