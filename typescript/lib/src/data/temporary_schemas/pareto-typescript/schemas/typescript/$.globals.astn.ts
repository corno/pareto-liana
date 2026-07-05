import * as sh from "../../../../../shorthands/schema/manual.js"

export const $ = sh.globals(

    'unconstrained',
    {
        "Text Value": sh.text('single line'),
    },
    {
        "Integer": sh.n.integer(null),
        "Approximation": sh.n.approximation(16),
        "boolean": sh.n.boolean(),
    },
)
