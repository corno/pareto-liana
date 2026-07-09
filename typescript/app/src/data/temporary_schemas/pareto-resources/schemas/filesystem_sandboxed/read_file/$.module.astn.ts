



import * as sh from "lib/shorthands/schema/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "list of characters": sh.schema_import_("list of characters"),
        "unrestricted": sh.schema_import_("fs unrestricted read file"),
    },
    {
        // "path": resolver_import_("path"),
        // "list of characters": resolver_import_("list of characters"),
    },
    globals,
    schema,
    null,
)