import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Sort Parameters": module_(t.group({
            "position": prop(t.component_external("location", "Position")),
        })),

    }
)