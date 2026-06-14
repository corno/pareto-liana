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
        
        "List of Characters": module_(t.list(t.simple("Natural"))),

    }
)


