import * as _pi from 'pareto-core/dist/interface'

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
        "Character": n.positive_natural(null),
    },
)


