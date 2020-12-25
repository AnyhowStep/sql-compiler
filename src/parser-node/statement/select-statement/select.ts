import {Node, ValueNode} from "../../node";
import {NodeArray2} from "../../node-array";
import {SyntaxKind} from "../../syntax-kind.generated";
import {FromClause} from "../from-clause";
import {GroupByClause} from "../group-by-clause";
import {IntoClause} from "../into-clause";
import {Statement} from "../statement";
import {AsteriskSelectItem} from "./asterisk-select-item";
import {HavingClause} from "./having-clause";
import {Limit} from "./limit";
import {OrderExprList} from "./order-expr";
import {ProcedureAnalyseClause} from "./procedure-analyse-clause";
import {SelectItem} from "./select-item";
import {SelectOptions} from "./select-options";
import {TableAsteriskSelectItem} from "./table-asterisk-select-item";
import {WhereClause} from "./where-clause";

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L9189
 */
export enum SelectLockType {
    FOR_UPDATE,
    LOCK_IN_SHARE_MODE,
}

export interface SelectItemList extends NodeArray2<SyntaxKind.SelectItemList, SelectItem|AsteriskSelectItem|TableAsteriskSelectItem> {

}

export interface Select extends Node, Statement {
    syntaxKind : SyntaxKind.Select,

    parenthesized : boolean,

    selectOptions : SelectOptions,
    selectItems : SelectItemList,

    preIntoClause : IntoClause|undefined,

    fromClause : FromClause|undefined,
    whereClause : WhereClause|undefined,
    groupByClause : GroupByClause|undefined,
    havingClause : HavingClause|undefined,

    order : OrderExprList|undefined,
    limit : Limit|undefined,

    procedureAnalyseClause : ProcedureAnalyseClause|undefined,

    postIntoClause : IntoClause|undefined,

    selectLockType : ValueNode<SelectLockType>|undefined,
}
