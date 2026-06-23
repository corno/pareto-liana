

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

    'unconstrained',
    {
        "Identifier": text('single line'),
        "Output": text('single line'),
        "text": text('single line'),
    },
    {
        "Approximation": n.approximation(10),
        "boolean": n.boolean(),
    },
)


