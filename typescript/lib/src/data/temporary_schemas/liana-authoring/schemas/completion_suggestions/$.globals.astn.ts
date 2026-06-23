


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
        "text": text('single line'),
    },
    {
        "Position": n.natural(null),
    },
)


