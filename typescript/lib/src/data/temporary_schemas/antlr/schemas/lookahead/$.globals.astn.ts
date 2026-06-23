


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
        "Integer": n.integer(null),
        "State Number": n.natural(null),
    },
)