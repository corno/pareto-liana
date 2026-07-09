import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
        "multi line text": sh.text('multi line'),
    },
    {
        "Natural": sh.n.natural(null)
    },
)


