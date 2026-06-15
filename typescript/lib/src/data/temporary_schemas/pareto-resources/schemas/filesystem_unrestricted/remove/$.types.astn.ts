

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
            "path": prop(t.component_external("path", "Context Path")),
            "error if not exists": prop(t.simple("boolean")),
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


