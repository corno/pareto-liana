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
            "path": prop(t.component_external("path", "Context Path")),
            "error if not exists": prop(t.simple_boolean()),
        })),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Context Path")),
            "type": prop(t.state({
                "node does not exist": toption(t.nothing()),
                "permission denied": toption(t.nothing()),
            }))
        })),
    }
)


