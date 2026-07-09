import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Output": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


