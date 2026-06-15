


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
        "multi line text": text('multi line'),
        "text": text('single line'),
    },
    {
        "Natural": n.natural(null)
    },
)


