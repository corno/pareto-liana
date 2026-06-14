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
        "Lines": module_(t.list(t.group({
            "text": prop(t.text_global("Output")),
            "indentation": prop(t.simple("Natural"))
        }))),
    }
)


