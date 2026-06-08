import * as _pi from 'pareto-core/dist/interface'



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "path": schema_import_("fs sandboxed path"),
        "unrestricted": schema_import_("fs unrestricted copy"),
    },
    {
        // "path": resolver_import_("path")
    },
    globals,
    schema,
    null,
)