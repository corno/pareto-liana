



import * as sh from "lib/schemas/schema/shorthands/manual"


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