import * as sh from "lib/schemas/schema/shorthands/manual"



export const $ = sh.globals(

    'unconstrained',
    {
        "Text Value": sh.text('single line'),
    },
    {
        "Integer": sh.n.integer(null),
        "State Number": sh.n.natural(null),
    },
)