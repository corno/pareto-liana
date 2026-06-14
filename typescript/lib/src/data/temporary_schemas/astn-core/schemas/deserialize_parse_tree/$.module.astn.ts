import * as pi from 'pareto-core/dist/interface'



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $ = schema_(
    {
        "parse tree": schema_import_("parse tree"),
        "token": schema_import_("token"),
        "location": schema_import_("location"),
    },
    {
        // "parse tree": resolver_import_("parse tree"),
        // "token": resolver_import_("token"),
        // "location": resolver_import_("location"),
    },
    globals,
    schema,
    null,
)