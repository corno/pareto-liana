import * as p_di from 'pareto-core/dist/data/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "url": text('single line'),
        "text value": text('single line'),
        "regex": text('single line'),
        "identifier": text('single line'),
    },
    {
        "amount": n.natural(null),
    },
)


