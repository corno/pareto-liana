import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "delete existing": prop(t.simple("boolean")),
            "path": prop(t.component_external("path", "Node Path")),
        })),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "directory already exists": toption(t.nothing()),
                "permission denied": toption(t.nothing()),
            }))
        })),

    }
)


