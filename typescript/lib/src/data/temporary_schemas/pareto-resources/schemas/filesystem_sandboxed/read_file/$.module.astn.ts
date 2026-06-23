



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "list of characters": schema_import_("list of characters"),
        "unrestricted": schema_import_("fs unrestricted read file"),
    },
    {
        // "path": resolver_import_("path"),
        // "list of characters": resolver_import_("list of characters"),
    },
    globals,
    schema,
    null,
)