



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "high level": schema_import_("high level"),
    },
    {
        // "high level": resolver_import_("high level"),
    },
    globals,
    schema,
    null,
)