import {Identifier, SyntaxKind} from "../../parser-node";
import {CustomSyntaxKind, makeCustomRule} from "../factory";
import {labelIdentifierNonReservedKeywords} from "../../mysql-grammar/constants";

makeCustomRule(CustomSyntaxKind.LabelIdentifier)
    .addSubstitution(
        [SyntaxKind.Identifier] as const,
        function (data) : Identifier {
            if (data[0].quoted) {
                return data[0];
            }
            /**
             * @todo Should this check be in linter instead?
             *
             * It shouldn't introduce an ambiguous grammar.
             */
            if (labelIdentifierNonReservedKeywords.includes(data[0].identifier.toUpperCase())) {
                /**
                 * We allow certain keywords for label identifiers
                 */
                return {
                    ...data[0],
                    syntacticErrors : undefined,
                }
            }

            return data[0];
        }
    );
