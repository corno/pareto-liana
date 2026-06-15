

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

        "Error": module_(t.component_external("unrestricted", "Error")),
        
    }
)


