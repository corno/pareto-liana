


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
        "Approximation": n.approximation(16),
        "boolean": n.boolean(),
    },
)
