import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "message": prop(t.component_external("fountain pen", "Paragraph")),
        })),

        "Error": module_(t.nothing()) //I'm not aware of any errors that could occur at this time
    }
)


