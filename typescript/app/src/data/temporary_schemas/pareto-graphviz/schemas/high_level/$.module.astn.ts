



import * as sh from "lib/shorthands/schema/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "attributes": sh.schema_import_("attributes"),
    },
    {
        // "attributes": resolver_import_("attributes"),
    },
    globals,
    schema,
    null,
)