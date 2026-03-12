import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Range": module_(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),

        "Possible Range": module_(t.state({
            "range": toption(t.component("Range")),
            "end of document": toption(t.nothing()),
        })),

        "Location": module_(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.number_local(n.natural(null))),
        })),

        "Relative Location": module_(t.group({
            "line": prop(t.number_local(n.natural(null))),
            "column": prop(t.number_local(n.natural(null))), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

    }
)