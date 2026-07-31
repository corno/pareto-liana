import * as sh from "lib/schemas/schema/shorthands/manual"

export const $ = sh.globals(

         'constrained',
    {
        "url": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


