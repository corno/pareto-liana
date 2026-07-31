import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "text": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
        "boolean": sh.n.boolean(),
    },
)


