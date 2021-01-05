import {IntegerLiteral, StringLiteral} from "../../expression";
import {Identifier} from "../../identifier";
import {SizeNumber} from "../../misc";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L4763
 */
export interface CreateTablespaceOptions extends Node {
    syntaxKind : SyntaxKind.CreateTablespaceOptions,

    /**
     * NDB only
     */
    initialSize : SizeNumber|undefined,

    /**
     * NDB only
     */
    autoExtendSize : SizeNumber|undefined,

    /**
     * NDB only
     */
    maxSize : SizeNumber|undefined,

    /**
     * NDB only
     */
    extentSize : SizeNumber|undefined,

    /**
     * NDB only
     */
    nodeGroup : IntegerLiteral|undefined,

    /**
     * InnoDB and NDB
     */
    engine : Identifier|StringLiteral|undefined,

    /**
     * NDB only
     */
    wait : ValueNode<boolean>|undefined,

    /**
     * NDB only
     */
    comment : StringLiteral|undefined,

    /**
     * InnoDB only
     */
    fileBlockSize : SizeNumber|undefined,
}
