

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../shorthands/schema/manual"


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "delete existing": prop(t.simple("boolean")),
            "path": prop(t.component_external("path", "Node Path")),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),

    }
)


