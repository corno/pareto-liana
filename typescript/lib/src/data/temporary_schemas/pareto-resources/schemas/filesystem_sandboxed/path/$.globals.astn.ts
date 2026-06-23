


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
        "Natural": n.natural(null),
        "boolean": n.boolean(),
    },
)


