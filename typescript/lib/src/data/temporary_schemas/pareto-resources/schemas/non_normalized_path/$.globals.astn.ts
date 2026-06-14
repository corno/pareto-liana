import * as p_di from 'pareto-core/dist/data/interface'


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "text": text('single line'),
    },
    {
        "Natural": n.natural(null),
        "boolean": n.boolean(),
    },
)


