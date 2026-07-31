import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "Output": sh.text('single line'),
    },
    {},
)


