import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
        "text": sh.text('single line'),
    },
    {
        // "Position": sh.n.natural(null),
    },
)


