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
        "text": text('single line'),
    },
    {
        "Position": n.natural(null),
        "boolean": n.boolean(),
    },
)


