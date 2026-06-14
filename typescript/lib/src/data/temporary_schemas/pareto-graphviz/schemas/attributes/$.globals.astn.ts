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
        "multi line text": text('multi line'),
        "text": text('single line'),
    },
    {
        "Natural": n.natural(null),
        "Approximation": n.approximation(10),
        "boolean": n.boolean(),
    },
)
