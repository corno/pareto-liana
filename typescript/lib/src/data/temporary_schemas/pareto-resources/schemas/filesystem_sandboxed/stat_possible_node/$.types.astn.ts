

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

        "Result": module_(t.state({
            "does not exist": toption(t.nothing()),
            "file": toption(t.nothing()),
            "directory": toption(t.nothing()),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
    }
)


