



import * as sh from "../../../../../shorthands/schema/manual.js"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "location": sh.schema_import_("location"),
    },
    {
        // "location": resolver_import_("location"),
    },
    globals,
    schema,
    null,
)