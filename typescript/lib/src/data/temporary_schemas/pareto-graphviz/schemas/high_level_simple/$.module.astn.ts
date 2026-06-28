



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "attributes": sh.schema_import_("attributes")
    },
    {
        // "attributes": resolver_import_("attributes")
    },
    globals,
    schema,
    null,
)
