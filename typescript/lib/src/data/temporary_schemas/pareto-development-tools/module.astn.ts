import * as sh from "../../../shorthands/schema/manual.js"

import { $ as schema_tree } from "./schema_tree.astn.js"

export const $ = sh.package_(
    schema_tree,
    false,
)