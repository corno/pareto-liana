import * as _pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "TBD": text('single line'),
        "Identifier": text('single line'),
        "Text Value": text('multi line'),
        "text": text('single line'),
    },
    {
        "Natural": n.natural(null),
        "Integer": n.integer(null),
        "Approximation": n.approximation(10),
        "boolean": n.boolean(),
    },
)


