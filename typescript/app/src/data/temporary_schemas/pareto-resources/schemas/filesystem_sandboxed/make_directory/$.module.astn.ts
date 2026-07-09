



import * as sh from "lib/shorthands/schema/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs sandboxed path"),
        "unrestricted": sh.schema_import_("fs unrestricted make directory"),
    },
    {
        // "path": resolver_import_("path")
    },
    globals,
    schema,
    null,
)