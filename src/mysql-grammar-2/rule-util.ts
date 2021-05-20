/**
 * + Repeat   = repeated elements, no separator
 * + SemiList = repeated elements, optionally comma-separated
 * + List     = repeated elements, comma-separated
 * + Tuple    = parenthesized list
 */

import {field, optional, repeat, repeat1, Rule, seq, tokenSymbol, tokenSymbol2} from "../grammar-builder";
import {nonReservedKeywords, TokenKind} from "./token.generated";

export const identifier = tokenSymbol(
    TokenKind.Identifier,
    TokenKind.DoubleQuotedLiteral,
    ...nonReservedKeywords,
);

/**
 * Double quoted literals are a pain.
 * They may be string literals, or identifiers.
 * Depending on the `ANSI_QUOTES` config
 */
export const stringLiteral = tokenSymbol(
    TokenKind.StringLiteral,
    TokenKind.DoubleQuotedLiteral,
);

export const identifierOrStringLiteral = tokenSymbol2(
    identifier,
    TokenKind.StringLiteral,
);

export function semiList1 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat(seq(
            field("commaToken", optional(TokenKind.Comma)),
            field("item", rule),
        )),
    );
}

export function list1 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat(seq(
            field("commaToken", TokenKind.Comma),
            field("item", rule),
        )),
    );
}

export function list2 (rule : Rule) {
    return seq(
        field("item", rule),
        repeat1(seq(
            field("commaToken", TokenKind.Comma),
            field("item", rule),
        )),
    );
}

export function list3 (rule : Rule) {
    return seq(
        field("item", rule),
        field("commaToken", TokenKind.Comma),
        field("item", rule),
        repeat1(seq(
            field("commaToken", TokenKind.Comma),
            field("item", rule),
        )),
    );
}

export function list (rule : Rule) {
    return optional(list1(rule));
}

export function parentheses(rule : Rule) {
    return seq(
        field("openParenthesesToken", TokenKind.OpenParentheses),
        rule,
        field("closeParenthesesToken", TokenKind.CloseParentheses),
    );
}

export function tuple1 (rule : Rule) {
    return parentheses(list1(rule));
}

export function tuple2 (rule : Rule) {
    return parentheses(list2(rule));
}

export function tuple (rule : Rule) {
    return parentheses(list(rule));
}
