
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "Text Value": sh.text('single line'),
        "Multi Line Text": sh.text('multi line'),
    },
    {
        "Integer": sh.n.integer(null),
    },
)