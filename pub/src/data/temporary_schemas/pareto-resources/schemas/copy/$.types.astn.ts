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
            "source": prop(t.component_external("path", "Node Path")),
            "target": prop(t.component_external("path", "Node Path")),
            "options": prop(t.group({
                "recursive": prop(t.boolean()),
                "force": prop(t.boolean()),
                "errorOnExist": prop(t.boolean()),
            })),
        })),

        "Error": module_(t.state({
            "source does not exist": toption(t.nothing()),
            "node is not a file": toption(t.nothing()),
            "permission denied": toption(t.nothing()),
            "file too large": toption(t.nothing()),
            "device not ready": toption(t.nothing()),
        })),
    }
)


