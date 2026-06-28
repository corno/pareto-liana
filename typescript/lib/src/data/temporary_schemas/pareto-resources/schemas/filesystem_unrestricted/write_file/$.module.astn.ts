



import * as sh from "../../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs unrestricted path"),
        "list of characters": sh.schema_import_("list of characters"),
    },
    {
        // "path": resolver_import_("path"),
        // "list of characters": resolver_import_("list of characters"),
    },
    globals,
    schema,
    null,
)