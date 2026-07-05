import * as sh from "../../../../../shorthands/schema/manual.js"

export const $ = sh.globals(
    'unconstrained',
    {
        "multi line text": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
        "status": sh.n.integer(null),
    },
)


