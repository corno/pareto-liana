


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
        "multi line text": text('multi line'),
    },
    {
        "Position": n.natural(null),
    },
)


