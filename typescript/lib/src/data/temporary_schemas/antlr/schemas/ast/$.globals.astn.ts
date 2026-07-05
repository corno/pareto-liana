
import * as sh from "../../../../../shorthands/schema/manual.js"


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