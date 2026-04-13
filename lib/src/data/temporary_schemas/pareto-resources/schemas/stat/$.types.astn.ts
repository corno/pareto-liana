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
        "Parameters": module_(t.component_external("path", "Node Path")),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "node does not exist": toption(t.nothing()),
            }))
        })),

        "Result": module_(t.component("Node Type")),

        "Node Type": module_(t.state({
            "file": toption(t.nothing()),
            "directory": toption(t.nothing()),
        })),
    }
)


