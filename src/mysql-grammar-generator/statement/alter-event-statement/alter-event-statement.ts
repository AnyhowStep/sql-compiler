import {AlterEventStatement, SyntaxKind, EventStatus} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.AlterEventStatement)
    .addSubstitution(
        [
            TokenKind.ALTER,
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            TokenKind.EVENT,
            SyntaxKind.EventIdentifier,
            optional([
                TokenKind.ON,
                TokenKind.SCHEDULE,
                CustomSyntaxKind.Schedule,
            ] as const),
            optional([
                TokenKind.ON,
                TokenKind.COMPLETION,
                optional(TokenKind.NOT),
                TokenKind.PRESERVE,
            ] as const),
            optional([
                TokenKind.RENAME,
                TokenKind.TO,
                SyntaxKind.EventIdentifier,
            ] as const),
            optional(union(
                [TokenKind.ENABLE] as const,
                [TokenKind.DISABLE] as const,
                [TokenKind.DISABLE, TokenKind.ON, TokenKind.SLAVE] as const,
            )),
            optional([
                TokenKind.COMMENT,
                SyntaxKind.StringLiteral,
            ] as const),
            optional([
                TokenKind.DO,
                CustomSyntaxKind.StoredProcedureStatement,
            ] as const),
        ] as const,
        (data) : AlterEventStatement => {
            const [
                ,
                definer,
                eventToken,
                eventIdentifier,
                schedule,
                onCompletionPreserve,
                newEventIdentifier,
                eventStatus,
                comment,
                statement,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.AlterEventStatement,

                definer : (
                    definer == undefined ?
                    toValueNode(
                        "CURRENT_USER",
                        {
                            start : eventToken.start,
                            end : eventToken.start,
                        }
                    ) :
                    definer[2]
                ),
                eventIdentifier,
                schedule : schedule?.[2],
                onCompletionPreserve : (
                    onCompletionPreserve == undefined ?
                    undefined :
                    onCompletionPreserve[2] == undefined
                ),
                newEventIdentifier : newEventIdentifier?.[2],
                eventStatus : (
                    eventStatus == undefined ?
                    undefined :
                    eventStatus[0].length == 3 ?
                    EventStatus.DISABLE_ON_SLAVE :
                    eventStatus[0][0].tokenKind == TokenKind.ENABLE ?
                    EventStatus.ENABLE :
                    EventStatus.DISABLE
                ),
                comment : (
                    comment == undefined ?
                    undefined :
                    comment[1]
                ),
                statement : statement?.[1],
            };
        }
    );
