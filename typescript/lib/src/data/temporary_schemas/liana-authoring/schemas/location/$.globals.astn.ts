import * as sh from "../../../../../shorthands/schema/manual.js"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null)
    },
)


