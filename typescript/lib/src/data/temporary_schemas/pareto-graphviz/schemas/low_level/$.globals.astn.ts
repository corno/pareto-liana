

import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(

         'unconstrained',
    {
        "id": text('single line'),
        "Text Value": text('single line'),
        "": text('single line'),
    },
    {
        "Integer": n.integer(null),
        "boolean": n.boolean(),
    },
)


