import * as p_di from 'pareto-core/dist/data/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

    'unconstrained',
    {
        "Identifier": text('single line'),
        "Output": text('single line'),
        "text": text('single line'),
    },
    {
        "Approximation": n.approximation(10),
        "boolean": n.boolean(),
    },
)


