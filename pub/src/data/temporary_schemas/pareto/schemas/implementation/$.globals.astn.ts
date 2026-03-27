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
        "TBD": text('single line'),
        "Identifier": text('single line'),
        "Text Value": text('multi line'),
    },
    {
        "Natural": n.natural(null),
        "Integer": n.integer(null),
        "Approximation": n.approximation(10),
    },
)


