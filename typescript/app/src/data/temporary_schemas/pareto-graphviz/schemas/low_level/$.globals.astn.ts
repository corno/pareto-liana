import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "id": sh.text('single line'),
        "Text Value": sh.text('single line'),
        "": sh.text('single line'),
    },
    {
        "Integer": sh.n.integer(null),
        "boolean": sh.n.boolean(),
    },
)


