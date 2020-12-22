import {StoredProcedureCharacteristics, Node, SyntacticErrorContainer, TextRange} from "../../parser-node";

type MakeStoredProcedureCharacteristic<T, K extends keyof T = Exclude<keyof T, keyof Node>> =
    K extends keyof T ?
    Pick<T, K> :
    never
;

export type StoredProcedureCharacteristic = MakeStoredProcedureCharacteristic<StoredProcedureCharacteristics> & TextRange & SyntacticErrorContainer
