



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "token": sh.schema_import_("token"),
        "location": sh.schema_import_("location"),
    },
    {
        // "token": resolver_import_("token"),
        // "location": resolver_import_("location"),
    },
    globals,
    schema,
    null,
)