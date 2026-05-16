import * as _pi from 'pareto-core/dist/interface'



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "html": schema_import_("html")
    },
    {
        // "html": resolver_import_("html")
    },
    globals,
    schema,
    null,
)
