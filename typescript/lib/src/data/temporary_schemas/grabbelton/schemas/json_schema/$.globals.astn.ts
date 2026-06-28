import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.globals(

         'unconstrained',
    {
        "url": sh.text('single line'),
        "text value": sh.text('single line'),
        "regex": sh.text('single line'),
        "identifier": sh.text('single line'),
    },
    {
        "amount": sh.n.natural(null),
    },
)


