import {getTextRange, toValueNode} from "../../mysql-grammar/parse-util";
import {Identifier, StringLiteral, SyntaxKind, ValueNode} from "../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../factory";

makeCustomRule(CustomSyntaxKind.CharacterSetNameOrDefault)
    .addSubstitution(
        [SyntaxKind.Identifier] as const,
        function (data) : Identifier|ValueNode<"DEFAULT"> {
            const identifier = data[0];

            if (
                !identifier.quoted &&
                identifier.identifier.toUpperCase() == "DEFAULT"
            ) {
                /**
                 * We allow `DEFAULT` here.
                 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L7028
                 */
                return toValueNode(
                    "DEFAULT",
                    getTextRange(data)
                );
            }

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
    )
    .addSubstitution(
        [SyntaxKind.StringLiteral] as const,
        function (data) : StringLiteral {
            return data[0];
        }
    );
