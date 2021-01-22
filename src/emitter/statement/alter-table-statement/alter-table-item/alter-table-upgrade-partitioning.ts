import {AlterTableUpgradePartitioning} from "../../../../parser-node";
import {StringBuilder} from "../../../string-builder";

export function emitAlterTableUpgradePartitioning (_item : AlterTableUpgradePartitioning) : StringBuilder {
    return new StringBuilder()
        .append("UPGRADE PARTITIONING")
}
