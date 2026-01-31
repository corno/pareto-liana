import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "data": prop(t.text_local(text('multi line'))),
        })),

        "Error": module_(t.state({
            "permission denied": toption(t.nothing()),
        })),
    }
)


