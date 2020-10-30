export interface CustomToken {

}

export type CustomTokenKind = CustomToken extends Array<infer T> ? T : never;
