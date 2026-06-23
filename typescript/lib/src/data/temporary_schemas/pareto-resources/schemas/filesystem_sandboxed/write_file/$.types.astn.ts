

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
            "path": prop(t.component_external("path", "Node Path")),
            "data": prop(t.component_external("list of characters", "List of Characters")),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
        
    }
)


