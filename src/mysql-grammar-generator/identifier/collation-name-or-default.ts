import {Identifier, StringLiteral, SyntaxKind, ValueNode} from "../../parser-node";
import {union} from "../../nearley-wrapper";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {toValueNode, getTextRange} from "../parse-util";

makeCustomRule(CustomSyntaxKind.CollationNameOrDefault)
    .addSubstitution(
        [
            union(SyntaxKind.Identifier, SyntaxKind.StringLiteral),
        ] as const,
        function (data) : Identifier|StringLiteral|ValueNode<"DEFAULT"> {
            let [[collationName]] = data;
            collationName = (
                collationName.syntaxKind == SyntaxKind.StringLiteral ?
                {
                    ...collationName,
                    value : collationName.value.toLowerCase(),
                } :
                {
                    ...collationName,
                    identifier : collationName.identifier.toLowerCase(),
                }
            );
            return (
                collationName.syntaxKind == SyntaxKind.StringLiteral ?
                collationName :
                collationName.quoted ?
                collationName :
                collationName.identifier.toUpperCase() == "DEFAULT" ?
                toValueNode(
                    "DEFAULT",
                    getTextRange(collationName)
                ) :
                collationName
            );
        }
    )
