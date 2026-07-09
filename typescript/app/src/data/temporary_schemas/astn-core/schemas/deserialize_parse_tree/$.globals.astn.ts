import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.globals(

         'unconstrained',
    {
    },
    {
        "Natural": sh.n.natural(null),
        "boolean": sh.n.boolean(),
    },
)


