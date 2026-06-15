






import { schema_, constrained, schema_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "location": schema_import_("location"),
        "text edits": schema_import_("text edits"),
    },
    {},
    globals,
    schema,
    null,
)