import {CreateUserStatement, SyntaxKind} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(CustomSyntaxKind.RequiredEncryptedConnectionOptions2)
    .addSubstitution(
        [
            optional([
                TokenKind.REQUIRE,
                union(
                    TokenKind.NONE,
                    TokenKind.SSL,
                    TokenKind.X509,
                    SyntaxKind.RequiredEncryptedConnectionOptions,
                ),
            ] as const),
        ] as const,
        (data) : CreateUserStatement["requiredEncryptedConnectionOptions"] => {
            const item = data[0];
            if (item == undefined) {
                return toValueNode(
                    "NONE",
                    {
                        start : -1,
                        end : -1,
                    }
                )
            }
            const options = item[1][0];
            if ("syntaxKind" in options) {
                return options;
            }
            return toValueNode(
                (
                    options.tokenKind == TokenKind.NONE ?
                    "NONE" :
                    options.tokenKind == TokenKind.SSL ?
                    "SSL" :
                    "X509"
                ),
                options
            )
        }
    )
