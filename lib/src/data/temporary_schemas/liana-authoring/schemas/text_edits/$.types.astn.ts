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

        "Text Edits": module_(t.list(t.state({
            "replace": toption(t.group({
                "range": prop(t.component_external("location", "Range FE")),
                "text": prop(t.text_global("multi line text")),
            })),
            "delete": toption(t.group({
                "range": prop(t.component_external("location", "Range FE")),
            })),
            "insert": toption(t.group({
                "location": prop(t.component_external("location", "Position")),
                "text": prop(t.text_global("multi line text")),
            })),
        }))),

    }
)