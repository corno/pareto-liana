import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Lines": module_(t.list(t.text_global("Output"))),
    }
)


