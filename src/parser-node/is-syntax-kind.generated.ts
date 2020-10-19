import {SyntaxKind} from "./syntax-kind.generated";
import {Node} from "./node";
import {BinaryDataType} from "./data-type/binary-data-type";
import {BlobDataType} from "./data-type/blob-data-type";
import {BooleanDataType} from "./data-type/boolean-data-type";
import {CharacterDataType} from "./data-type/character-data-type";
import {DateTimeDataType} from "./data-type/date-time-data-type";
import {DecimalDataType} from "./data-type/decimal-data-type";
import {GeometryCollectionDataType} from "./data-type/geometry-collection-data-type";
import {GeometryDataType} from "./data-type/geometry-data-type";
import {IntegerDataType} from "./data-type/integer-data-type";
import {JsonDataType} from "./data-type/json-data-type";
import {RealDataType} from "./data-type/real-data-type";
import {TextDataType} from "./data-type/text-data-type";
import {UnionDataType} from "./data-type/union-data-type";
import {UnknownDataType} from "./data-type/unknown-data-type";
import {UnknownExpression} from "./expression/unknown-expression";
import {Identifier} from "./identifier";
import {SourceFile} from "./source-file";
import {CreateSchemaStatement} from "./statement/create-schema-statement";
import {DeclareFunctionParameter} from "./statement/declare-function-parameter";
import {DeclareFunctionStatement} from "./statement/declare-function-statement";
import {DelimiterStatement} from "./statement/delimiter-statement";
import {UnknownStatement} from "./statement/unknown-statement";

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BinaryDataType) : node is BinaryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BlobDataType) : node is BlobDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BooleanDataType) : node is BooleanDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CharacterDataType) : node is CharacterDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DateTimeDataType) : node is DateTimeDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DecimalDataType) : node is DecimalDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryCollectionDataType) : node is GeometryCollectionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryDataType) : node is GeometryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntegerDataType) : node is IntegerDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.JsonDataType) : node is JsonDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RealDataType) : node is RealDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TextDataType) : node is TextDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnionDataType) : node is UnionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownDataType) : node is UnknownDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownExpression) : node is UnknownExpression;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Identifier) : node is Identifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SourceFile) : node is SourceFile;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateSchemaStatement) : node is CreateSchemaStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DeclareFunctionParameter) : node is DeclareFunctionParameter;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DeclareFunctionStatement) : node is DeclareFunctionStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DelimiterStatement) : node is DelimiterStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownStatement) : node is UnknownStatement;

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind) : boolean {
    return node.syntaxKind == syntaxKind;
}



interface SwitchSyntaxKind<ReturnT> {

    case<ResultT> (syntaxKind : SyntaxKind.BinaryDataType, callback : (node : BinaryDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BlobDataType, callback : (node : BlobDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BooleanDataType, callback : (node : BooleanDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CharacterDataType, callback : (node : CharacterDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DateTimeDataType, callback : (node : DateTimeDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DecimalDataType, callback : (node : DecimalDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryCollectionDataType, callback : (node : GeometryCollectionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryDataType, callback : (node : GeometryDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntegerDataType, callback : (node : IntegerDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.JsonDataType, callback : (node : JsonDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RealDataType, callback : (node : RealDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TextDataType, callback : (node : TextDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnionDataType, callback : (node : UnionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownDataType, callback : (node : UnknownDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownExpression, callback : (node : UnknownExpression) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Identifier, callback : (node : Identifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SourceFile, callback : (node : SourceFile) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateSchemaStatement, callback : (node : CreateSchemaStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DeclareFunctionParameter, callback : (node : DeclareFunctionParameter) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DeclareFunctionStatement, callback : (node : DeclareFunctionStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
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

