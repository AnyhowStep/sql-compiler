
import {Rule} from "../grammar-builder";

export interface MySqlRuleCollection {
    SourceFile : Rule,
    LeadingStatement : Rule,
    TrailingStatement : Rule,
    Statement : Rule,
    DelimiterStatement : Rule,
    BinLogStatement : Rule,
    CreateSchemaStatement : Rule,
    CreateSchemaOptionList : Rule,
    DefaultCharacterSet : Rule,
    DefaultCollate : Rule,
    CharacterSetNameOrDefault : Rule,
    CollationNameOrDefault : Rule,
    CharSet : Rule,
    Schema : Rule,
    IfNotExists : Rule,
    Ident : Rule
}
export interface MySqlGrammar {
    tokens : string[];
    extras : string[];

    inline : string[];
    start : string;
    rules : MySqlRuleCollection;
}
