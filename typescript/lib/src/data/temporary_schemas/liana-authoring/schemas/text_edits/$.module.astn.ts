






import { schema_, constrained, schema_import_ } from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "location": schema_import_("astn location"),
    }, {},
    globals,
    schema,
    null,
)