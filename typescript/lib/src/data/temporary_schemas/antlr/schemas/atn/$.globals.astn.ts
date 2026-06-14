import * as pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
    },
    {
        "Integer": n.integer(null),
        "State Number": n.natural(null),
    },
)