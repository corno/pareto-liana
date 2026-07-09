



import * as sh from "lib/shorthands/schema/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "location": sh.schema_import_("location")
    },
    {
        // "location": resolver_import_("location")
    },
    globals,
    schema,
    null,
)