



import * as sh from "../../../../../shorthands/schema/manual"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

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