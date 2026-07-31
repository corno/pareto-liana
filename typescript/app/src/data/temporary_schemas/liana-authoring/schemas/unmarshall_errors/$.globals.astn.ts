import * as sh from "lib/schemas/schema/shorthands/manual"

export const $ = sh.globals(
         'constrained',
    {
        "text": sh.text('single line'),
    },
    {},
)


