import {SelectStatement, SyntaxKind} from "../../../parser-node";
import {StringBuilder} from "../../string-builder";
import {emitSelect} from "./select";
import {emitUnion} from "./union";
import {emitUnionOrderLimit} from "./union-order-limit";

export function emitSelectStatement (statement : SelectStatement) : StringBuilder {
    switch (statement.syntaxKind) {
        case SyntaxKind.Select:
            return emitSelect(statement).append(";");
        case SyntaxKind.Union:
            return emitUnion(statement).append(";");
        case SyntaxKind.UnionOrderLimit:
            return emitUnionOrderLimit(statement).append(";");
    }
}

export function emitSelectStatementNoSemicolon (statement : SelectStatement) : StringBuilder {
    switch (statement.syntaxKind) {
        case SyntaxKind.Select:
            return emitSelect(statement);
        case SyntaxKind.Union:
            return emitUnion(statement);
        case SyntaxKind.UnionOrderLimit:
            return emitUnionOrderLimit(statement);
    }
}
