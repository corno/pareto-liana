



import * as sh from "../../../../../shorthands/schema/manual.js"


import { $ as schema } from "./$.types.astn.js"
import { $ as globals } from "./$.globals.astn.js"

export const $ = sh.schema_(
    {
        "fountain pen": sh.schema_import_("fountain pen")
    },
    {
        // "fountain pen": resolver_import_("fountain pen")
    },
    globals,
    schema,
    null,
)