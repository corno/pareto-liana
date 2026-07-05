






import * as sh from "../../../../../shorthands/schema/manual.js"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "hover info": sh.schema_import_("hover info"),
        "location": sh.schema_import_("location"),
        "path unrestricted": sh.schema_import_("fs unrestricted path"),
    }, {},
    globals,
    schema,
    null,
)