import * as p_di from 'pareto-core/dist/data/interface'

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

        "Text Edits": module_(t.list(t.state({
            "replace": toption(t.group({
                "range": prop(t.component_external("location", "Range")),
                "text": prop(t.text_global("multi line text")),
            })),
            "delete": toption(t.group({
                "range": prop(t.component_external("location", "Range")),
            })),
            "insert": toption(t.group({
                "location": prop(t.component_external("location", "Location")),
                "text": prop(t.text_global("multi line text")),
            })),
        }))),

    }
)