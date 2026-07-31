import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.globals(

    'constrained',
    {
        "Pseudo Reference": sh.text('single line'),
        "TBD": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
        "boolean": sh.n.boolean(),
    },
)


