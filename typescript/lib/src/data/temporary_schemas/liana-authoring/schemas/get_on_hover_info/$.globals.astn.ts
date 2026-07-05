import * as sh from "../../../../../shorthands/schema/manual.js"

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


