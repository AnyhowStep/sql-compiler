import {ColumnFormat, SyntaxKind} from "../../../parser-node";
import {DataTypeRule} from "../../data-type/data-type";
import {
    makeRule,
} from "../../nearley-util";
import {getTextRange} from "../../parse-util";

makeRule(SyntaxKind.ColumnDefinition)
    .addSubstitution(
        [
            SyntaxKind.ColumnIdentifier,
            DataTypeRule,
        ] as const,
        (data) => {
            const [columnIdentifier, dataType] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.ColumnDefinition,
                columnIdentifier,
                dataType,
                generated : undefined,
                autoIncrement : false,
                columnFormat : ColumnFormat.DEFAULT,
                storage : undefined,
                defaultValue : undefined,
                nullable : true,
                uniqueKey : false,
                primaryKey : false,
                comment : undefined,
                foreignKeyReferenceDefinition : undefined,
            };
        }
    );
