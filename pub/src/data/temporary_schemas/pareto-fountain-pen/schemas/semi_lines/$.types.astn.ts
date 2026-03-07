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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Lines": module_(t.list(t.group({
            "text": prop(t.text_global("Output")),
            "indentation": prop(t.number_local(n.natural(null)))
        }))),
    }
)


