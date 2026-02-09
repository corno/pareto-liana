import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        
        "List of Characters": module_(t.list(t.number_local(n.natural(null)))),

    }
)


