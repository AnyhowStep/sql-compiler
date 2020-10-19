
export function emitQuotedIdentifier (str : string) : string {
    return "`" + str.replace("`", "``") + "`";
}
