


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(
    'unconstrained',
    {
        "multi line text": text('multi line'),
        "text": text('single line'),
    },
    {
        "status": n.integer(null),
    },
)


