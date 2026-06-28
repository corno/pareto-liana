



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "xml": sh.schema_import_("xml")
    },
    {
        // "xml": resolver_import_("xml")
    },
    globals,
    schema,
    null,
)
