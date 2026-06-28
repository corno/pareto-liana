






import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

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