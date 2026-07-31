



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "generic": sh.schema_import_("generic"),
    },
    {
        // "generic": resolver_import_("generic"),
    },
    globals,
    schema,
    null,
)