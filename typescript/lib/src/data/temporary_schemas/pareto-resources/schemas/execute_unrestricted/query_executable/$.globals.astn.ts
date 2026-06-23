


import {
    globals,
    n,
    text,
} from "../../../../../../shorthands/schema/manual"


export const $ = globals(

    'unconstrained',
    {
        "text": text('single line'),
    },
    {
        "Integer": n.integer(null)
    },
)


