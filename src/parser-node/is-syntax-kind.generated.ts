import {SyntaxKind} from "./syntax-kind.generated";
import {Node} from "./node";
import {UnknownExpression} from "./expression/unknown-expression";
import {Identifier} from "./identifier";
import {CreateSchemaStatement} from "./statement/create-schema-statement";
import {DelimiterStatement} from "./statement/delimiter-statement";
import {UnknownStatement} from "./statement/unknown-statement";

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownExpression) : node is UnknownExpression;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Identifier) : node is Identifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateSchemaStatement) : node is CreateSchemaStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DelimiterStatement) : node is DelimiterStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownStatement) : node is UnknownStatement;

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean {
    return node.syntaxKind == syntaxKind;
}



interface SwitchSyntaxKind<ReturnT> {

    case<ResultT> (syntaxKind : SyntaxKind.UnknownExpression, callback : (node : UnknownExpression) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Identifier, callback : (node : Identifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateSchemaStatement, callback : (node : CreateSchemaStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DelimiterStatement, callback : (node : DelimiterStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownStatement, callback : (node : UnknownStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;

    default<ResultT> (callback : () => ResultT) : ResultT|ReturnT;
}

export function switchSyntaxKind (node : Node) : SwitchSyntaxKind<never> {
    let matched = false;
    let returnValue : unknown = undefined;
    const switcher = {
        case : (syntaxKind : SyntaxKind, callback : (node : Node) => unknown) : SwitchSyntaxKind<any> => {
            if (matched) {
                return switcher;
            }

            if (node.syntaxKind == syntaxKind) {
                matched = true;
                returnValue = callback(node);
            }

            return switcher;
        },
        default : (callback : () => unknown) : any => {
            if (matched) {
                return returnValue;
            }

            return callback();
        }
    } as SwitchSyntaxKind<never>;
    return switcher;
}

