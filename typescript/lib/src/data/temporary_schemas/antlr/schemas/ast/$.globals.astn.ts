import * as _pi from 'pareto-core/dist/interface'


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema"


export const $ = globals(

         'unconstrained',
    {
        "Text Value": text('single line'),
        "Multi Line Text": text("multi line"),
    },
    {
        "Integer": n.integer(null),
    },
)