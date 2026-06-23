

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
    },
    {
        "Character": n.positive_natural(null),
    },
)


