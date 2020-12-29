import {StringLiteral} from "../../expression";
import {Node, ValueNode} from "../../node";
import {SyntaxKind} from "../../syntax-kind.generated";

export interface RequiredEncryptedConnectionOptions extends Node {
    syntaxKind : SyntaxKind.RequiredEncryptedConnectionOptions,

    x509Subject : StringLiteral|undefined,
    x509Issuer : StringLiteral|undefined,
    sslCipher : StringLiteral|undefined,

    optionLocations : ValueNode<"x509Subject"|"x509Issuer"|"sslCipher">[],
}
