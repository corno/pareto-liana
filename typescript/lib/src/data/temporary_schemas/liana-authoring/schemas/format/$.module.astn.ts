import * as _pi from 'pareto-core/dist/interface'




import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import { schema_, constrained, schema_import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.l_dictionary.D.l_entry = schema_(
    {
        "location": schema_import_("location"),
        "text edits": schema_import_("text edits"),
    },
     {},
    globals,
    schema,
    null,
)