import * as _pi from 'pareto-core/dist/interface'


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Globals = globals(

         'unconstrained',
    {
        "Text Value": text("single line"),
    },
    {
        "Position": n.natural(),
    },
)
