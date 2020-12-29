import {RateLimitOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeRateLimitOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type RateLimitOption = MakeRateLimitOption<RateLimitOptions> & TextRange & SyntacticErrorContainer
