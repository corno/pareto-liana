



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "attributes": schema_import_("attributes"),
    },
    {
        // "attributes": resolver_import_("attributes"),
    },
    globals,
    schema,
    null,
)