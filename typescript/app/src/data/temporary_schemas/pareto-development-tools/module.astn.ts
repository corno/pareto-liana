import * as sh from "lib/shorthands/schema/manual"

import { $ as schema_tree } from "./schema_tree.astn.js"

export const $ = sh.package_(
    schema_tree,
    false,
)