import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Annotation": module_(t.group({
            "position": prop(t.number_local(n.natural(null))),
            "line": prop(t.number_local(n.natural(null))),
            "column": prop(t.number_local(n.natural(null))),
        })),

        "Data Set": module_(t.group({
            "lines": prop(t.list(t.group({
                "fields": prop(t.list(t.group({
                    "annotation": prop(t.component("Annotation")),
                    "value": prop(t.text_local(text("single line"))),
                })))
            }))),
            "ends with unterminated string": prop(t.boolean()),
        })),
    }
)


