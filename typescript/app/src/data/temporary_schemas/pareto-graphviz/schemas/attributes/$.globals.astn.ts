import * as sh from "lib/schemas/schema/shorthands/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
        "multi line text": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
        "Natural": sh.n.natural(null),
        "Approximation": sh.n.approximation(10),
        "boolean": sh.n.boolean(),
    },
)
