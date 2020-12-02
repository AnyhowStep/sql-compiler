import {SyntaxKind} from "./syntax-kind.generated";
import {Node} from "./node";
import {BinaryDataType} from "./data-type/binary-data-type";
import {BitDataType} from "./data-type/bit-data-type";
import {BlobDataType} from "./data-type/blob-data-type";
import {BooleanDataType} from "./data-type/boolean-data-type";
import {CharacterDataType} from "./data-type/character-data-type";
import {DateDataType} from "./data-type/date-data-type";
import {DateTimeDataType} from "./data-type/date-time-data-type";
import {DecimalDataType} from "./data-type/decimal-data-type";
import {EnumDataType} from "./data-type/enum-data-type";
import {GeometryCollectionDataType} from "./data-type/geometry-collection-data-type";
import {GeometryDataType} from "./data-type/geometry-data-type";
import {IntegerDataType} from "./data-type/integer-data-type";
import {JsonDataType} from "./data-type/json-data-type";
import {RealDataType} from "./data-type/real-data-type";
import {SetDataType} from "./data-type/set-data-type";
import {TextDataType} from "./data-type/text-data-type";
import {TimeDataType} from "./data-type/time-data-type";
import {TimestampDataType} from "./data-type/timestamp-data-type";
import {UnionDataType} from "./data-type/union-data-type";
import {UnknownDataType} from "./data-type/unknown-data-type";
import {YearDataType} from "./data-type/year-data-type";
import {BitLiteral} from "./expression/bit-literal";
import {DecimalLiteral} from "./expression/decimal-literal";
import {HexLiteral} from "./expression/hex-literal";
import {IntegerLiteral} from "./expression/integer-literal";
import {RealLiteral} from "./expression/real-literal";
import {StringLiteral} from "./expression/string-literal";
import {UnknownExpression} from "./expression/unknown-expression";
import {ColumnIdentifier} from "./identifier/column-identifier";
import {Identifier} from "./identifier/identifier";
import {TableIdentifier} from "./identifier/table-identifier";
import {CurrentTimestamp} from "./misc/current-timestamp";
import {DefaultCharacterSet} from "./misc/default-character-set";
import {DefaultCollation} from "./misc/default-collation";
import {FieldLength} from "./misc/field-length";
import {Precision} from "./misc/precision";
import {SourceFile} from "./source-file";
import {SourceFileLite} from "./source-file";
import {CreateSchemaOptionList} from "./statement/create-schema-statement";
import {CreateSchemaStatement} from "./statement/create-schema-statement";
import {CheckDefinition} from "./statement/create-table-definition/check-definition";
import {ColumnDefinition} from "./statement/create-table-definition/column-definition";
import {ForeignKeyDefinition} from "./statement/create-table-definition/foreign-key-definition";
import {ForeignKeyReferenceDefinition} from "./statement/create-table-definition/foreign-key-reference-definition";
import {GeneratedDefinition} from "./statement/create-table-definition/generated-definition";
import {IndexPart} from "./statement/create-table-definition/index-definition";
import {IndexDefinition} from "./statement/create-table-definition/index-definition";
import {PrimaryKeyDefinition} from "./statement/create-table-definition/primary-key-definition";
import {CreateTableStatement} from "./statement/create-table-statement";
import {DeclareFunctionParameter} from "./statement/declare-function-parameter";
import {DeclareFunctionStatement} from "./statement/declare-function-statement";
import {DelimiterStatement} from "./statement/delimiter-statement";
import {UnknownStatement} from "./statement/unknown-statement";

export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BinaryDataType) : node is BinaryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BitDataType) : node is BitDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BlobDataType) : node is BlobDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BooleanDataType) : node is BooleanDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CharacterDataType) : node is CharacterDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DateDataType) : node is DateDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DateTimeDataType) : node is DateTimeDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DecimalDataType) : node is DecimalDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.EnumDataType) : node is EnumDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryCollectionDataType) : node is GeometryCollectionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeometryDataType) : node is GeometryDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntegerDataType) : node is IntegerDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.JsonDataType) : node is JsonDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RealDataType) : node is RealDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SetDataType) : node is SetDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TextDataType) : node is TextDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TimeDataType) : node is TimeDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TimestampDataType) : node is TimestampDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnionDataType) : node is UnionDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownDataType) : node is UnknownDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.YearDataType) : node is YearDataType;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.BitLiteral) : node is BitLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DecimalLiteral) : node is DecimalLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.HexLiteral) : node is HexLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IntegerLiteral) : node is IntegerLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.RealLiteral) : node is RealLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.StringLiteral) : node is StringLiteral;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.UnknownExpression) : node is UnknownExpression;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ColumnIdentifier) : node is ColumnIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Identifier) : node is Identifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.TableIdentifier) : node is TableIdentifier;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CurrentTimestamp) : node is CurrentTimestamp;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DefaultCharacterSet) : node is DefaultCharacterSet;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.DefaultCollation) : node is DefaultCollation;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.FieldLength) : node is FieldLength;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.Precision) : node is Precision;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SourceFile) : node is SourceFile;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.SourceFileLite) : node is SourceFileLite;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateSchemaOptionList) : node is CreateSchemaOptionList;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateSchemaStatement) : node is CreateSchemaStatement;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CheckDefinition) : node is CheckDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ColumnDefinition) : node is ColumnDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ForeignKeyDefinition) : node is ForeignKeyDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition) : node is ForeignKeyReferenceDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.GeneratedDefinition) : node is GeneratedDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IndexPart) : node is IndexPart;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.IndexDefinition) : node is IndexDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.PrimaryKeyDefinition) : node is PrimaryKeyDefinition;
export function isSyntaxKind (node : Node, syntaxKind : SyntaxKind.CreateTableStatement) : node is CreateTableStatement;
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
    case<ResultT> (syntaxKind : SyntaxKind.BitDataType, callback : (node : BitDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BlobDataType, callback : (node : BlobDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BooleanDataType, callback : (node : BooleanDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CharacterDataType, callback : (node : CharacterDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DateDataType, callback : (node : DateDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DateTimeDataType, callback : (node : DateTimeDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DecimalDataType, callback : (node : DecimalDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.EnumDataType, callback : (node : EnumDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryCollectionDataType, callback : (node : GeometryCollectionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeometryDataType, callback : (node : GeometryDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntegerDataType, callback : (node : IntegerDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.JsonDataType, callback : (node : JsonDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RealDataType, callback : (node : RealDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SetDataType, callback : (node : SetDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TextDataType, callback : (node : TextDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TimeDataType, callback : (node : TimeDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TimestampDataType, callback : (node : TimestampDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnionDataType, callback : (node : UnionDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownDataType, callback : (node : UnknownDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.YearDataType, callback : (node : YearDataType) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.BitLiteral, callback : (node : BitLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DecimalLiteral, callback : (node : DecimalLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.HexLiteral, callback : (node : HexLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IntegerLiteral, callback : (node : IntegerLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.RealLiteral, callback : (node : RealLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.StringLiteral, callback : (node : StringLiteral) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.UnknownExpression, callback : (node : UnknownExpression) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ColumnIdentifier, callback : (node : ColumnIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Identifier, callback : (node : Identifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.TableIdentifier, callback : (node : TableIdentifier) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CurrentTimestamp, callback : (node : CurrentTimestamp) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DefaultCharacterSet, callback : (node : DefaultCharacterSet) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.DefaultCollation, callback : (node : DefaultCollation) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.FieldLength, callback : (node : FieldLength) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.Precision, callback : (node : Precision) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SourceFile, callback : (node : SourceFile) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.SourceFileLite, callback : (node : SourceFileLite) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateSchemaOptionList, callback : (node : CreateSchemaOptionList) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateSchemaStatement, callback : (node : CreateSchemaStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CheckDefinition, callback : (node : CheckDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ColumnDefinition, callback : (node : ColumnDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ForeignKeyDefinition, callback : (node : ForeignKeyDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.ForeignKeyReferenceDefinition, callback : (node : ForeignKeyReferenceDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.GeneratedDefinition, callback : (node : GeneratedDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IndexPart, callback : (node : IndexPart) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.IndexDefinition, callback : (node : IndexDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.PrimaryKeyDefinition, callback : (node : PrimaryKeyDefinition) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
    case<ResultT> (syntaxKind : SyntaxKind.CreateTableStatement, callback : (node : CreateTableStatement) => ResultT) : SwitchSyntaxKind<ResultT|ReturnT>;
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

