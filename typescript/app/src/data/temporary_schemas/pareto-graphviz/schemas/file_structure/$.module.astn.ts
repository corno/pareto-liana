



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "high level": sh.schema_import_("high level"),
    },
    {
        // "high level": resolver_import_("high level"),
    },
    globals,
    schema,
    null,
)