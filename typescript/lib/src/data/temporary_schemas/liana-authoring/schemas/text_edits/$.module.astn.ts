import * as p_di from 'pareto-core/dist/data/interface'






import { schema_, constrained, schema_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "location": schema_import_("astn location"),
    }, {},
    globals,
    schema,
    null,
)