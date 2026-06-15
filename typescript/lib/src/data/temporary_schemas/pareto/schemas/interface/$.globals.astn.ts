

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

    'constrained',
    {
        "Pseudo Reference": text('single line'),
        "TBD": text('single line'),
    },
    {
        "Natural": n.natural(null),
        "boolean": n.boolean(),
    },
)


