import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(
         'constrained',
    {
        "text": sh.text('single line'),
    },
    {},
)


