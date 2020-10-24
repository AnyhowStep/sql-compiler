import {Identifier, SyntaxKind} from "../../parser-node";
import {makeCustomRule} from "../nearley-util";

export const CharacterSetNameRule = makeCustomRule("CharacterSetName")
    .addSubstitution(
        [SyntaxKind.Identifier] as const,
        function (data) : Identifier {
            const identifier = data[0];

            //We allow `BINARY` here
            //https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7016
            if (identifier.identifier.toUpperCase() == "BINARY") {
                return {
                    ...identifier,
                    identifier : identifier.identifier.toLowerCase(),
                    //Hack; remove the syntactic error
                    syntacticErrors : undefined,
                }
            } else {
                return {
                    ...identifier,
                    identifier : identifier.identifier.toLowerCase(),
                };
            }
        }
    );
