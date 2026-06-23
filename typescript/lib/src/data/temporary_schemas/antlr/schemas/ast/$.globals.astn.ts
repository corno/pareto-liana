


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
        "Multi Line Text": text('multi line'),
    },
    {
        "Integer": n.integer(null),
    },
)