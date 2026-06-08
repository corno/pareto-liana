import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.component_external("path", "Node Path")),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "unknown": toption(t.nothing()), //FIX this
            }))
        })),

        "Result": module_(t.component("Node Type")),

        "Node Type": module_(t.state({
            "does not exist": toption(t.nothing()),
            "file": toption(t.nothing()),
            "directory": toption(t.nothing()),
        })),
    }
)


