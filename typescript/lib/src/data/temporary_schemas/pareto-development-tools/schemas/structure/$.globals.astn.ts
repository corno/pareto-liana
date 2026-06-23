


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
        "Natural": n.natural(null),
        "boolean": n.boolean(),
    },
)
