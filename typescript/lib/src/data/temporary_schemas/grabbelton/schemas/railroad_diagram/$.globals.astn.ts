import * as sh from "../../../../../shorthands/schema/manual.js"

export const $ = sh.globals(

         'constrained',
    {
        "url": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
    },
)


