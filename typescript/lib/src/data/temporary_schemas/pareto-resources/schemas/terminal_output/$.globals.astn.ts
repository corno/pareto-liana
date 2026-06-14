import * as p_di from 'pareto-core/dist/data/interface'


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "multi line text": text('multi line'),
        "text": text('single line'),
    },
    {
    },
)


