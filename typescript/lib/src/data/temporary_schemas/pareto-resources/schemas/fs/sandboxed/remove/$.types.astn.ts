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
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Context Path")),
            "error if not exists": prop(t.simple("boolean")),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
        
    }
)


