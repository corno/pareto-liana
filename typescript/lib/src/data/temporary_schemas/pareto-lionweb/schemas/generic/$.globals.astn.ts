


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
        "text": text('single line'),
    },
    {
        // "Position": n.natural(null),
    },
)


