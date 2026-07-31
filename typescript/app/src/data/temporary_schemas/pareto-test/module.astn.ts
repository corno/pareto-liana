
import * as sh from "lib/schemas/schema/shorthands/manual"

import { $ as schema_tree } from "./schema_tree.astn.js"

export const $ = sh.package_(
    schema_tree,
    false,
)