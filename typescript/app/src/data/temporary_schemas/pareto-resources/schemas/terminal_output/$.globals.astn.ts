import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "multi line text": sh.text('multi line'),
        "text": sh.text('single line'),
    },
    {
    },
)


