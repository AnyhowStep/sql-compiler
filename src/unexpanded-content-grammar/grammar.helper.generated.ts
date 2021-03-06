
import * as nearley from "nearley";
import * as grammar from "./grammar.generated";

export function bindGrammar<ParserStateT> (state : ParserStateT) : nearley.Grammar {
    return nearley.Grammar.fromCompiled({
        ...grammar.default,
        ParserRules : grammar.default.ParserRules.map(rule => {
            return {
                ...rule,
                postprocess : (
                    rule.postprocess == undefined ?
                    undefined :
                    rule.postprocess.bind(state)
                ),
            }
        }),
    });
}
        