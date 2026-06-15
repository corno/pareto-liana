



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "xml": schema_import_("xml")
    },
    {
        // "xml": resolver_import_("xml")
    },
    globals,
    schema,
    null,
)
