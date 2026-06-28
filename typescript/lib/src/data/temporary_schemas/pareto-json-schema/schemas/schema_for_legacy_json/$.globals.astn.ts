import * as sh from "../../../../../shorthands/schema/manual"

export const $ = sh.globals(

         'unconstrained',
    {
        "temp_ref": sh.text('single line'),
        "string": sh.text('single line'),
    },
    {
        "boolean": sh.n.boolean(),
        "number": sh.n.integer(0), //FIXME; allow any number, not just integers
    },
)


