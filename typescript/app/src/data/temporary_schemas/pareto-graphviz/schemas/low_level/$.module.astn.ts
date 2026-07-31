



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "html": sh.schema_import_("html"),
    },
    {
        // "html": resolver_import_("html"),
    },
    globals,
    schema,
    null,
)