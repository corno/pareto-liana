



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs sandboxed path"),
        "unrestricted": sh.schema_import_("fs unrestricted remove"),
    },
    {
        // "path": resolver_import_("path")
    },
    globals,
    schema,
    null,
)