import * as p_di from 'pareto-core/dist/data/interface'

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


