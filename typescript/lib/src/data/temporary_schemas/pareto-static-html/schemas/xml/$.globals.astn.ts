import * as sh from "../../../../../shorthands/schema/manual.js"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
        "text": sh.text('single line'),
    },
    {
        "Position": sh.n.natural(null),
    },
)
