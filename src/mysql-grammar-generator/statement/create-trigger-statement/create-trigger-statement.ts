import {CreateTriggerStatement, SyntaxKind, TriggerActionTime, TriggerEvent} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateTriggerStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            TokenKind.TRIGGER,
            SyntaxKind.TriggerIdentifier,
            union(
                TokenKind.BEFORE,
                TokenKind.AFTER,
            ),
            union(
                TokenKind.INSERT,
                TokenKind.UPDATE,
                TokenKind.DELETE,
            ),
            TokenKind.ON,
            SyntaxKind.TableIdentifier,
            TokenKind.FOR,
            TokenKind.EACH,
            TokenKind.ROW,
            optional(SyntaxKind.TriggerOrder),
            CustomSyntaxKind.StoredProcedureStatement,
        ] as const,
        (data) : CreateTriggerStatement => {
            const [
                ,
                definer,
                triggerToken,
                triggerIdentifier,
                triggerActionTime,
                triggerEvent,
                ,
                tableIdentifier,
                ,
                ,
                ,
                triggerOrder,
                statement,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateTriggerStatement,

                definer : (
                    definer == undefined ?
                    toValueNode(
                        "CURRENT_USER",
                        {
                            start : triggerToken.start,
                            end : triggerToken.start,
                        }
                    ) :
                    definer[2]
                ),
                triggerIdentifier,
                triggerActionTime : toValueNode(
                    (
                        triggerActionTime[0].tokenKind == TokenKind.BEFORE ?
                        TriggerActionTime.BEFORE :
                        TriggerActionTime.AFTER
                    ),
                    getTextRange(triggerActionTime)
                ),
                triggerEvent : toValueNode(
                    (
                        triggerEvent[0].tokenKind == TokenKind.INSERT ?
                        TriggerEvent.INSERT :
                        triggerEvent[0].tokenKind == TokenKind.UPDATE ?
                        TriggerEvent.UPDATE :
                        TriggerEvent.DELETE
                    ),
                    getTextRange(triggerActionTime)
                ),
                tableIdentifier,
                triggerOrder : triggerOrder ?? undefined,
                statement,
            };
        }
    );
