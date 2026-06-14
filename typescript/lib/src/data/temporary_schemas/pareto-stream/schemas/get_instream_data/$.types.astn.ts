import * as p_di from 'pareto-core/dist/data/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.nothing()),
        
        "Result": module_(t.text_global("multi line text")),
    }
)


