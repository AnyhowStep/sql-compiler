import {optional, precedence, seq} from "../../../grammar-builder";
import {Precedence} from "../../precedence";
import {tuple1} from "../../rule-util";
import {SyntaxKind} from "../../syntax-kind.generated";
import {TokenKind} from "../../token.generated";

export const MultitonListPartitionDefinition = seq(
    TokenKind.PARTITION,
    SyntaxKind.Ident,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5558
     */
    TokenKind.VALUES,
    TokenKind.IN,
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5630
     *
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L5702
     */
    SyntaxKind.BitExpressionTuple1Tuple1,
    optional(SyntaxKind.PartitionDefinitionOptionRepeat1),
    optional(SyntaxKind.SubPartitionDefinitionTuple1),
);

export const MultitonListPartitionDefinitionTuple1 = precedence(
    Precedence.MultitonListPartitionDefinitionTuple1,
    tuple1(SyntaxKind.MultitonListPartitionDefinition)
);
