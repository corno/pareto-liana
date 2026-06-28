import * as sh from "../../../../../../shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


