import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Parameters": type(t.group({
            "lines": prop(t.list(t.text_local(text('single line')))),
        })),

        "Error": type(t.nothing()) //I'm not aware of any errors that could occur at this time
        
    }
)


