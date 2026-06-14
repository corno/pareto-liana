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
        "Parameters": module_(t.group({
            "source": prop(t.component_external("path", "Node Path")),
            "target": prop(t.component_external("path", "Node Path")),
            "options": prop(t.group({
                "recursive": prop(t.simple("boolean")),
                "force": prop(t.simple("boolean")),
                "errorOnExist": prop(t.simple("boolean")),
            })),
        })),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "source does not exist": toption(t.nothing()),
                "node is not a file": toption(t.nothing()),
                "permission denied": toption(t.nothing()),
                "file too large": toption(t.nothing()),
                "device not ready": toption(t.nothing()),
            }))
        })),
    }
)


