import {choice, field, inline, optional, seq, tokenSymbol} from "../../grammar-builder";
import {SyntaxKind} from "../syntax-kind.generated";
import {TokenKind} from "../token.generated";

export const DataType = inline(choice(
    SyntaxKind.BinaryDataType,
    SyntaxKind.VarBinaryDataType,
    SyntaxKind.BitDataType,
    SyntaxKind.BlobDataType,
    SyntaxKind.LongVarBinaryDataType,
    SyntaxKind.BooleanDataType,
    SyntaxKind.CharacterDataType,
    SyntaxKind.DateDataType,
    SyntaxKind.DateTimeDataType,
    SyntaxKind.DecimalDataType,
    SyntaxKind.EnumDataType,
    SyntaxKind.GeometryCollectionDataType,
    SyntaxKind.GeometryDataType,
    SyntaxKind.IntegerDataType,
    SyntaxKind.JsonDataType,
    SyntaxKind.RealDataType,
    SyntaxKind.FloatDataType,
    SyntaxKind.SetDataType,
    SyntaxKind.TextDataType,
    SyntaxKind.LongVarCharDataType,
    SyntaxKind.TimeDataType,
    SyntaxKind.TimestampDataType,
    SyntaxKind.YearDataType,
));

/**
 * https://dev.mysql.com/doc/refman/5.7/en/char.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html
 *
 * https://stackoverflow.com/questions/29292353/whats-the-difference-between-varchar-binary-and-varbinary-in-mysql
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6534-L6540
 */
export const BinaryDataType = seq(
    field("binaryToken", TokenKind.BINARY),
    field("fieldLength", optional(SyntaxKind.FieldLength))
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/char.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/binary-varbinary.html
 *
 * https://stackoverflow.com/questions/29292353/whats-the-difference-between-varchar-binary-and-varbinary-in-mysql
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6560
 */
export const VarBinaryDataType = seq(
    field("varBinaryToken", TokenKind.VARBINARY),
    field("fieldLength", SyntaxKind.FieldLength),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6486-L6491
 */
export const BitDataType = seq(
    field("bitToken", TokenKind.BIT),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/blob.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6623-L6628
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6640-L6645
 */
export const BlobDataType = choice(
    seq(
        field("blobToken", tokenSymbol(
            TokenKind.TINYBLOB,
            TokenKind.MEDIUMBLOB,
            TokenKind.LONGBLOB,
        )),
    ),
    seq(
        field("blobToken", TokenKind.BLOB),
        field("fieldLength", optional(SyntaxKind.FieldLength)),
    )
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6650
 *
 * Synonym for `MEDIUMBLOB`
 */
export const LongVarBinaryDataType = seq(
    field("longToken", TokenKind.LONG),
    field("varBinaryToken", TokenKind.VARBINARY),
);

export const BooleanDataType = seq(
    field("booleanToken", tokenSymbol(
        TokenKind.BOOLEAN,
        TokenKind.BOOL,
    )),
);

export const CharacterDataType = inline(choice(
    SyntaxKind.NCharDataType,
    SyntaxKind.CharDataType,
    SyntaxKind.NVarCharDataType,
    SyntaxKind.VarCharDataType,
));
/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6520-L6527
 */
export const NCharDataType = seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6759
     */
    choice(
        field("nCharToken", TokenKind.NCHAR),
        seq(
            field("nCharToken", TokenKind.NATIONAL),
            field("nCharToken", SyntaxKind.Char)
        ),
    ),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
    field("binaryToken", optional(TokenKind.BINARY)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6506-L6513
 */
export const CharDataType = seq(
    field("charToken", SyntaxKind.Char),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
    field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6553
 */
export const NVarCharDataType = seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6769
     */
    choice(
        seq(
            field("nVarCharToken", TokenKind.NATIONAL),
            choice(
                field("nVarCharToken", SyntaxKind.VarChar),
                seq(
                    field("nVarCharToken", SyntaxKind.Char),
                    field("nVarCharToken", TokenKind.VARYING)
                )
            ),
        ),
        seq(
            field("nVarCharToken", TokenKind.NCHAR),
            choice(
                field("nVarCharToken", TokenKind.VARYING),
                field("nVarCharToken", SyntaxKind.VarChar),
            ),
        ),
        field("nVarCharToken", TokenKind.NVARCHAR),
    ),
    field("fieldLength", SyntaxKind.FieldLength),
    field("binaryToken", optional(TokenKind.BINARY)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6546
 */
export const VarCharDataType = seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6764
     */
    choice(
        seq(
            field("varCharToken", SyntaxKind.Char),
            field("varCharToken", TokenKind.VARYING)
        ),
        field("varCharToken", SyntaxKind.VarChar),
    ),
    field("fieldLength", SyntaxKind.FieldLength),
    field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6582
 */
export const DateDataType = field("dateToken", TokenKind.DATE);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/datetime.html
 *
 * https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-syntax.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6618
 */
export const DateTimeDataType = seq(
    field("dateTimeToken", TokenKind.DATETIME),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/fixed-point-types.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6686-L6703
 */
export const DecimalDataType = seq(
    field("decimalToken", tokenSymbol(
        TokenKind.DECIMAL,
        TokenKind.DEC,
        TokenKind.NUMERIC,
        TokenKind.FIXED,
    )),
    field("precision", optional(choice(
        SyntaxKind.FieldLength,
        SyntaxKind.DecimalPrecision,
    ))),
    field("integerDataTypeOptionRepeat1", optional(SyntaxKind.IntegerDataTypeOptionRepeat1)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/enum.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6704-L6711
 */
export const EnumDataType = seq(
    field("enumToken", TokenKind.ENUM),
    field("textStringTuple1", SyntaxKind.TextStringTuple1),
    field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/floating-point-types.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6474
 */
export const RealDataType = seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6785
     */
    choice(
        /**
         * When the `REAL` token is used, it may be a `FLOAT` or `DOUBLE`.
         *
         * @see {} `MODE_REAL_AS_FLOAT`
         *
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6785
         *
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6788
         */
        field("realToken", TokenKind.REAL),
        field("realToken", TokenKind.DOUBLE),
        seq(
            field("realToken", TokenKind.DOUBLE),
            field("realToken", TokenKind.PRECISION)
        ),
    ),
    field("precision", optional(SyntaxKind.RealPrecision)),
    field("integerDataTypeOptionRepeat1", optional(SyntaxKind.IntegerDataTypeOptionRepeat1)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6480
 */
export const FloatDataType = seq(
    field("floatToken", TokenKind.FLOAT),
    field("precision", optional(choice(
        SyntaxKind.FieldLength,
        SyntaxKind.RealPrecision,
    ))),
    field("integerDataTypeOptionRepeat1", optional(SyntaxKind.IntegerDataTypeOptionRepeat1)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/spatial-type-overview.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6739-L6752
 */
export const GeometryCollectionDataType = field("geometryCollectionToken", tokenSymbol(
    TokenKind.GEOMETRYCOLLECTION,
    TokenKind.MULTIPOINT,
    TokenKind.MULTILINESTRING,
    TokenKind.MULTIPOLYGON,
));

/**
 * https://dev.mysql.com/doc/refman/5.7/en/spatial-type-overview.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6739-L6752
 */
export const GeometryDataType = field("geometryToken", tokenSymbol(
    TokenKind.GEOMETRY,
    TokenKind.POINT,
    TokenKind.LINESTRING,
    TokenKind.POLYGON,
));

/**
 * https://dev.mysql.com/doc/refman/5.7/en/integer-types.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6469
 */
export const IntegerDataType = seq(
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6777
     */
    field("integerToken", tokenSymbol(
        TokenKind.INT,
        TokenKind.TINYINT,
        TokenKind.SMALLINT,
        TokenKind.MEDIUMINT,
        TokenKind.INTEGER,
        TokenKind.BIGINT,
    )),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
    field("integerDataTypeOptionRepeat1", optional(SyntaxKind.IntegerDataTypeOptionRepeat1)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6732
 */
export const JsonDataType = field("jsonToken", TokenKind.JSON);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/set.html
 *
 * A SET column can have a maximum of 64 distinct members.
 * A table can have no more than 255 unique element list definitions among its
 * ENUM and SET columns considered as a group.
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6712
 */
export const SetDataType = seq(
    field("setToken", TokenKind.SET),
    field("textStringTuple1", SyntaxKind.TextStringTuple1),
    field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/blob.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6661-L6680
 */
export const TextDataType = choice(
    seq(
        /**
         * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6661-L6680
         */
        field("textToken", tokenSymbol(
            TokenKind.TINYTEXT,
            TokenKind.MEDIUMTEXT,
            TokenKind.LONGTEXT,
        )),
        field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
    ),
    /**
     * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6667
     */
    seq(
        field("textToken", TokenKind.TEXT),
        field("fieldLength", optional(SyntaxKind.FieldLength)),
        field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
    ),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6655
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6720
 *
 * Synonym for `MEDIUMBLOB`/`MEDIUMTEXT`,
 * depending on `CharacterDataTypeOption` or schema/table default character set.
 *
 * ```sql
 *  -- T.X is MEDIUMBLOB
 *  CREATE TABLE T (X LONG) DEFAULT CHARSET BINARY;
 *  -- T.X is MEDIUMTEXT
 *  CREATE TABLE T (X LONG) DEFAULT CHARSET latin1;
 * ```
 */
export const LongVarCharDataType = seq(
    field("longToken", TokenKind.LONG),
    optional(choice(
        field("varCharToken", SyntaxKind.VarChar),
        seq(
            field("varCharToken", SyntaxKind.Char),
            field("varCharToken", TokenKind.VARYING),
        ),
    )),
    field("characterDataTypeOption", optional(SyntaxKind.CharacterDataTypeOption)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6584
 */
export const TimeDataType = seq(
    field("timeToken", TokenKind.TIME),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
);

/**
 * https://dev.mysql.com/doc/refman/5.7/en/date-and-time-type-syntax.html
 *
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6589
 */
export const TimestampDataType = seq(
    field("timestampToken", TokenKind.TIMESTAMP),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
);

/**
 * https://github.com/mysql/mysql-server/blob/5c8c085ba96d30d697d0baa54d67b102c232116b/sql/sql_yacc.yy#L6566
 *
 * This type seems so useless. Max value is 2155.
 */
export const YearDataType = seq(
    field("yearToken", TokenKind.YEAR),
    field("fieldLength", optional(SyntaxKind.FieldLength)),
    field("integerDataTypeOptionRepeat1", optional(SyntaxKind.IntegerDataTypeOptionRepeat1)),
);
