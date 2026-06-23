

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "Output": text('single line'),
    },
    {
        "boolean": n.boolean(),
    },
)


