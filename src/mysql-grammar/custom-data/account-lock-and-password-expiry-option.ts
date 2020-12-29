import {AccountLockAndPasswordExpiryOptions, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeAccountLockAndPasswordExpiryOption<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type AccountLockAndPasswordExpiryOption = MakeAccountLockAndPasswordExpiryOption<AccountLockAndPasswordExpiryOptions> & TextRange & SyntacticErrorContainer
