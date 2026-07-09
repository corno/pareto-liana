import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.globals(

    'unconstrained',
    {
        "text": sh.text('single line'),
    },
    {
        "Integer": sh.n.integer(null)
    },
)


