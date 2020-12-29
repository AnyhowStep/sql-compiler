import {CreateUserStatement, SyntaxKind} from "../../../parser-node";
import {emitStringLiteral} from "../../expression";
import {StringBuilder} from "../../string-builder";

export function emitRequiredEncryptedConnectionOptions (options : CreateUserStatement["requiredEncryptedConnectionOptions"]) {
    if (options.syntaxKind == SyntaxKind.Value) {
        if (options.value == "NONE") {
            return new StringBuilder()
                .append("REQUIRE NONE")
        } else if (options.value == "SSL") {
            return new StringBuilder()
                .append("REQUIRE SSL")
        } else {
            return new StringBuilder()
                .append("REQUIRE X509")
        }
    }

    return new StringBuilder()
        .append("REQUIRE")
        .scope(builder => {
            if (options.x509Subject == undefined) {
                return;
            }
            const x509Subject = emitStringLiteral(options.x509Subject)
            builder.indent(builder => {
                builder
                    .append("SUBJECT ")
                    .appendBuilder(x509Subject)
            })
        })
        .scope(builder => {
            if (options.x509Issuer == undefined) {
                return;
            }
            const x509Issuer = emitStringLiteral(options.x509Issuer)
            builder.indent(builder => {
                builder
                    .append("ISSUER ")
                    .appendBuilder(x509Issuer)
            })
        })
        .scope(builder => {
            if (options.sslCipher == undefined) {
                return;
            }
            const sslCipher = emitStringLiteral(options.sslCipher)
            builder.indent(builder => {
                builder
                    .append("CIPHER ")
                    .appendBuilder(sslCipher)
            })
        })
}
