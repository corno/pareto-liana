import * as sh from "../../../../../shorthands/schema"


export const $ = sh.globals(

         'unconstrained',
    {
        "Output": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


