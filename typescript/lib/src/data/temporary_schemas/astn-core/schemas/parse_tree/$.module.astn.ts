



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "token": schema_import_("token"),
        "location": schema_import_("location"),
    },
    {
        // "token": resolver_import_("token"),
        // "location": resolver_import_("location"),
    },
    globals,
    schema,
    null,
)