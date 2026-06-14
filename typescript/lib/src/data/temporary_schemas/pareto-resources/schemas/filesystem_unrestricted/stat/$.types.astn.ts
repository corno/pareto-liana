import * as p_di from 'pareto-core/dist/data/interface'

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


