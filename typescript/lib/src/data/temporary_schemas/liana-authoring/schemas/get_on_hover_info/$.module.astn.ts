import * as pi from 'pareto-core/dist/interface'






import { schema_, constrained, schema_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "hover info": schema_import_("hover info"),
        "location": schema_import_("location"),
        "path unrestricted": schema_import_("fs unrestricted path"),
    }, {},
    globals,
    schema,
    null,
)