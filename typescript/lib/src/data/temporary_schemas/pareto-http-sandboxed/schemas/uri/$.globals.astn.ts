


import {
    globals,
    n,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = globals(
    'unconstrained',
    {
        "scheme": text('single line'),
        "userinfo": text('single line'),
        "host": text('single line'),
        "segment": text('single line'),
        "query": text('single line'),
        "fragment": text('single line'),
    },
    {
        "port": n.integer(null),
    },
)


