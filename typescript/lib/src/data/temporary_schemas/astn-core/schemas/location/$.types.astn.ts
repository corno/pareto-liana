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


export const $ = modules(
    {

        "Range": module_(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),

        "Possible Range": module_(t.state({
            "range": toption(t.component("Range")),
            "end of document": toption(t.group({
                "end": prop(t.component("Location"))
            })),
        })),

        "Location": module_(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.simple("Natural")),
        })),

        "Relative Location": module_(t.group({
            "line": prop(t.simple("Natural")),
            "column": prop(t.simple("Natural")), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

    }
)