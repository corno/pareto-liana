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


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "data": prop(t.component_external("list of characters", "List of Characters")),
        })),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "permission denied": toption(t.nothing()),
            }))
        })),
    }
)


