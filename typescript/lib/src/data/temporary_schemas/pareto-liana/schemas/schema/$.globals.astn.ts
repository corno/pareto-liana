import * as sh from "../../../../../shorthands/schema/manual"

export const $ = sh.globals(

         'constrained',
    {
        "multi line text": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
        "boolean": sh.n.boolean(),
    },
)


