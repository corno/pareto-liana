import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.globals(

         'unconstrained',
    {
    },
    {
        "Natural": sh.n.natural(null),
        "boolean": sh.n.boolean(),
    },
)


