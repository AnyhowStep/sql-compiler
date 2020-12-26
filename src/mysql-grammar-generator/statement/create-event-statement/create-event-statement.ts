import {CreateEventStatement, SyntaxKind, EventStatus} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {CustomSyntaxKind, makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateEventStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional([
                TokenKind.DEFINER,
                TokenKind.Equal,
                CustomSyntaxKind.AccountIdentifierOrCurrentUser,
            ] as const),
            TokenKind.EVENT,
            optional([
                TokenKind.IF,
                TokenKind.NOT,
                TokenKind.EXISTS,
            ] as const),
            SyntaxKind.EventIdentifier,
            TokenKind.ON,
            TokenKind.SCHEDULE,
            CustomSyntaxKind.Schedule,
            optional([
                TokenKind.ON,
                TokenKind.COMPLETION,
                optional(TokenKind.NOT),
                TokenKind.PRESERVE,
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
            TokenKind.DO,
            CustomSyntaxKind.StoredProcedureStatement,
        ] as const,
        (data) : CreateEventStatement => {
            const [
                ,
                definer,
                eventToken,
                ifNotExists,
                eventIdentifier,
                ,
                ,
                schedule,
                onCompletionPreserve,
                eventStatus,
                comment,
                ,
                statement,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateEventStatement,

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
                ifNotExists : ifNotExists != undefined,
                eventIdentifier,
                schedule,
                onCompletionPreserve : (
                    onCompletionPreserve == undefined ?
                    false :
                    onCompletionPreserve[2] == undefined
                ),
                eventStatus : (
                    eventStatus == undefined ?
                    EventStatus.ENABLE :
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
                statement,
            };
        }
    );
