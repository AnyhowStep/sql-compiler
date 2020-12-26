import {CreateUserDefinedFunctionStatement, SyntaxKind, UserDefinedFunctionReturnType} from "../../../parser-node";
import {TokenKind} from "../../../scanner";
import {optional, union} from "../../../nearley-wrapper";
import {getTextRange, toValueNode} from "../../parse-util";
import {makeCustomRule} from "../../factory";

makeCustomRule(SyntaxKind.CreateUserDefinedFunctionStatement)
    .addSubstitution(
        [
            TokenKind.CREATE,
            optional(TokenKind.AGGREGATE),
            TokenKind.FUNCTION,
            SyntaxKind.Identifier,
            TokenKind.RETURNS,
            union(
                TokenKind.STRING,
                TokenKind.INTEGER,
                TokenKind.REAL,
                TokenKind.DECIMAL,
            ),
            TokenKind.SONAME,
            SyntaxKind.StringLiteral,
        ] as const,
        (data) : CreateUserDefinedFunctionStatement => {
            const [
                ,
                aggregate,
                functionToken,
                identifier,
                ,
                returnType,
                ,
                sharedLibraryName,
            ] = data;
            return {
                ...getTextRange(data),
                syntaxKind : SyntaxKind.CreateUserDefinedFunctionStatement,

                aggregate : (
                    aggregate == undefined ?
                    toValueNode(
                        false,
                        {
                            start : functionToken.start,
                            end : functionToken.start,
                        }
                    ) :
                    toValueNode(
                        true,
                        getTextRange(aggregate)
                    )
                ),
                identifier,
                returnType : toValueNode(
                    (
                        returnType[0].tokenKind == TokenKind.STRING ?
                        UserDefinedFunctionReturnType.STRING :
                        returnType[0].tokenKind == TokenKind.INTEGER ?
                        UserDefinedFunctionReturnType.INTEGER :
                        returnType[0].tokenKind == TokenKind.REAL ?
                        UserDefinedFunctionReturnType.REAL :
                        UserDefinedFunctionReturnType.DECIMAL
                    ),
                    getTextRange(returnType)
                ),
                sharedLibraryName,
            };
        }
    );
