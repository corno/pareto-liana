



import * as sh from "../../../../../shorthands/schema/manual.js"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "html": sh.schema_import_("html")
    },
    {
        // "html": resolver_import_("html")
    },
    globals,
    schema,
    null,
)
