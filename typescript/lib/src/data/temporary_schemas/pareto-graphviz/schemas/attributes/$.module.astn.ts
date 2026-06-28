



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

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
