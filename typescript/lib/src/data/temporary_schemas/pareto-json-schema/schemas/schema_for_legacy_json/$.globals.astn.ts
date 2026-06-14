import * as p_di from 'pareto-core/dist/data/interface'

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "temp_ref": text('single line'),
        "string": text('single line'),
    },
    {
        "boolean": n.boolean(),
        "number": n.integer(0), //FIXME; allow any number, not just integers
    },
)


