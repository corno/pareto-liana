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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Position": module_(t.group({
            "line": prop(t.number_local(n.natural(null))),
            "character": prop(t.number_local(n.natural(null))),
        })),

        "Range": module_(t.group({
            "start": prop(t.component("Position")),
            "end": prop(t.component("Position")),
        })),

    }
)