import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "TBD": sh.text('single line'),
        "Identifier": sh.text('single line'),
        "Text Value": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
        "Integer": sh.n.integer(null),
        "Approximation": sh.n.approximation(10),
        "boolean": sh.n.boolean(),
    },
)


