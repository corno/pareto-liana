import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

import { schema_, constrained, import_ } from "../../../../../shorthands/schema"


import { $ as schema } from "./$.types.astn"
import { $ as globals } from "./$.globals.astn"

export const $: g_.Schemas.dictionary.D.entry = schema_(
    {
        "graphviz": import_("graphviz high level"),
        //"railroad diagram": import_("railroad diagram"),
    },
    globals,
    schema,
    null,
)