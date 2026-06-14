import * as pi from 'pareto-core/dist/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "id": text('single line'),
        "Text Value": text('single line'),
        "": text('single line'),
    },
    {
        "Integer": n.integer(null),
        "boolean": n.boolean(),
    },
)


