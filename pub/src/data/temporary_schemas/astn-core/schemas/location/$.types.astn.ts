import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Range": type(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),

        "Location": type(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.number_local(n.natural(null))),
        })),

        "Relative Location": type(t.group({
            "document resource identifier": prop(t.text_local(text('single line'))),
            "line": prop(t.number_local(n.natural(null))),
            "column": prop(t.number_local(n.natural(null))), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

    }
)