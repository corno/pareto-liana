import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.globals(

    'unconstrained',
    {
        "Identifier": sh.text('single line'),
        "Output": sh.text('single line'),
        "text": sh.text('single line'),
    },
    {
        "number": sh.n.approximation(10),
        "boolean": sh.n.boolean(),
    },
)


