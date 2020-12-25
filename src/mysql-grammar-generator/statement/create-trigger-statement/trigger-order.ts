import {SyntaxKind, TriggerActionOrder, TriggerOrder} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.TriggerOrder)
    .addSubstitution(
        [
            union(
                TokenKind.FOLLOWS,
                TokenKind.PRECEDES,
            ),
            union(
                SyntaxKind.Identifier,
                SyntaxKind.StringLiteral,
            ),
        ] as const,
        (data) : TriggerOrder => {
            const [
                triggerActionOrder,
                otherTriggerName,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.TriggerOrder,

                triggerActionOrder : toValueNode(
                    (
                        triggerActionOrder[0].tokenKind == TokenKind.FOLLOWS ?
                        TriggerActionOrder.FOLLOWS :
                        TriggerActionOrder.PRECEDES
                    ),
                    getTextRange(triggerActionOrder)
                ),
                otherTriggerName : otherTriggerName[0],
            };
        }
    );
