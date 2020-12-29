import {RequiredEncryptedConnectionOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeRequiredEncryptedConnectionOption<T, K extends keyof T = Exclude<keyof T, keyof Node|"optionLocations">> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type RequiredEncryptedConnectionOption = MakeRequiredEncryptedConnectionOption<RequiredEncryptedConnectionOptions> & TextRange & SyntacticErrorContainer
