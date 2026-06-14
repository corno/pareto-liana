import * as pi from 'pareto-core/dist/interface'

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

        "Position": module_(t.group({
            "line": prop(t.simple("Natural")),
            "character": prop(t.simple("Natural")),
        })),

        "Range FE": module_(t.group({
            "start": prop(t.component("Position")),
            "end": prop(t.component("Position")),
        })),

    }
)