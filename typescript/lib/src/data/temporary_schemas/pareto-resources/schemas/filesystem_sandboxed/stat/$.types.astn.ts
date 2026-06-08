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
        "Parameters": module_(t.component_external("path", "Node Path")),

        "Result": module_(t.component("Node Type")),

        "Node Type": module_(t.state({
            "file": toption(t.nothing()),
            "directory": toption(t.nothing()),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
    }
)


