import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'constrained',
    {
        "url": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


