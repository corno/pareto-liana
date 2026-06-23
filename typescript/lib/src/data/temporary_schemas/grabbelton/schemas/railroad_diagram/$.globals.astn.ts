

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'constrained',
    {
        "url": text('single line'),
    },
    {
        "Natural": n.natural(null),
    },
)


