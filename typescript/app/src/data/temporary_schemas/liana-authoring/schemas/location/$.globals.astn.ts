import * as sh from "lib/schemas/schema/shorthands/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null)
    },
)


