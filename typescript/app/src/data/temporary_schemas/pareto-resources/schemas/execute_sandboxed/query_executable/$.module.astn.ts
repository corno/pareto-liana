



import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs unrestricted path"),
        "terminal output": sh.schema_import_("terminal output")
    },
    {
        // "terminal output": resolver_import_("terminal output")
    },
    globals,
    schema,
    null,
)