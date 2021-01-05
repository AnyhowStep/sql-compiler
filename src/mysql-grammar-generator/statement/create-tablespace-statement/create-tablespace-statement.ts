import {CreateTablespaceStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional} from "../../../nearley-wrapper";
import {getTextRange} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateTablespaceStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            TokenKind.TABLESPACE,
            SyntaxKind.Identifier,

            TokenKind.ADD,
            TokenKind.DATAFILE,
            SyntaxKind.StringLiteral,

            optional([
                TokenKind.USE,
                TokenKind.LOGFILE,
                TokenKind.GROUP,
                SyntaxKind.Identifier,
            ] as const),

            SyntaxKind.CreateTablespaceOptions,
        ] as const,
        (data) : CreateTablespaceStatement => {
            const [
                ,
                ,
                identifier,

                ,
                ,
                addDataFile,
                useLogFileGroup,
                createTablespaceOptions,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTablespaceStatement,

                identifier,
                addDataFile,
                useLogFileGroup : (
                    useLogFileGroup == undefined ?
                    undefined :
                    useLogFileGroup[3]
                ),
                createTablespaceOptions,
            };
        }
    );
