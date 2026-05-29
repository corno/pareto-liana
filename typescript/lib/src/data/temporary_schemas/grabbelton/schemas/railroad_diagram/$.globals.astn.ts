import * as _pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'constrained',
    {
        "url": text('single line'),
    },
    {
        "Natural": n.natural(null),
    },
)


