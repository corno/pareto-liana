import * as _pi from 'pareto-core/dist/interface'



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "fountain pen": schema_import_("fountain pen")
    },
    {
        // "fountain pen": resolver_import_("fountain pen")
    },
    globals,
    schema,
    null,
)