



import * as sh from "../../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "path": sh.schema_import_("fs sandboxed path"),
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