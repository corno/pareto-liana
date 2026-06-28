






import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "completion suggestions": sh.schema_import_("completion suggestions"),
        "location": sh.schema_import_("location"),
        "path unrestricted": sh.schema_import_("fs unrestricted path"),
    }, {},
    globals,
    schema,
    null,
)