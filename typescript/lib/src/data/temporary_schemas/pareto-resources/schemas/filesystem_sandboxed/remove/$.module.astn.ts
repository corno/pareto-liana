



import * as sh from "../../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs sandboxed path"),
        "unrestricted": sh.schema_import_("fs unrestricted remove"),
    },
    {
        // "path": resolver_import_("path")
    },
    globals,
    schema,
    null,
)