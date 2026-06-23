import * as sh from "../../../shorthands/schema/manual"

import { $ as schema_tree } from "./schema_tree.astn"

export const $ = sh.package_(
    schema_tree,
    false,
)