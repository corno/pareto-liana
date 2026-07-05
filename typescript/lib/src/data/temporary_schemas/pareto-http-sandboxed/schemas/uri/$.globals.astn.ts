import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.globals(
    'unconstrained',
    {
        "scheme": sh.text('single line'),
        "userinfo": sh.text('single line'),
        "host": sh.text('single line'),
        "segment": sh.text('single line'),
        "query": sh.text('single line'),
        "fragment": sh.text('single line'),
    },
    {
        "port": sh.n.integer(null),
    },
)


