import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Output": sh.text('single line'),
    },
    {
        "boolean": sh.n.boolean(),
    },
)


