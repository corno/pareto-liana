



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

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