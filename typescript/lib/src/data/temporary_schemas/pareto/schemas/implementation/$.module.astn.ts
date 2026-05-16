import * as _pi from 'pareto-core/dist/interface'



import { schema_, constrained, schema_import_, resolver_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"
import { $ as signatures } from "./$.signatures.astn"
import { $ as resolver } from "./$.resolvers.astn"

export const $ = schema_(
    {
        "interface": schema_import_("interface"),
    },
    {
        "interface": resolver_import_("interface"),
    },
    globals,
    schema,
    constrained(
        signatures,
        resolver,
    ),
)