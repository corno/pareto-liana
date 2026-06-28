



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = sh.schema_(
    {
        "high level": sh.schema_import_("high level"),
    },
    {
        // "high level": resolver_import_("high level"),
    },
    globals,
    schema,
    null,
)