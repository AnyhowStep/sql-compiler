import {DataType} from "../data-type";
import {Identifier} from "../identifier";
import {SyntaxKind} from "../syntax-kind.generated";
import {DeclareFunctionParameterList} from "./declare-function-parameter";
import {Statement} from "./statement";

export interface DeclareFunctionStatement extends Statement {
    readonly syntaxKind : SyntaxKind.DeclareFunctionStatement,

    readonly functionName : Identifier,

    readonly parameters : DeclareFunctionParameterList,

    readonly returns : DataType,

    readonly aggregate : boolean,
    readonly window : boolean,
    readonly fromFirstLast : boolean,
    readonly nullTreatment : boolean,
}
