






import * as sh from "lib/schemas/schema/shorthands/manual"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "location": sh.schema_import_("location"),
        "text edits": sh.schema_import_("text edits"),
    },
    {},
    globals,
    schema,
    null,
)