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

        "Annotation": module_(t.group({
            "position": prop(t.simple("Natural")),
            "line": prop(t.simple("Natural")),
            "column": prop(t.simple("Natural")),
        })),

        "Data Set": module_(t.group({
            "lines": prop(t.list(t.group({
                "fields": prop(t.list(t.group({
                    "annotation": prop(t.component("Annotation")),
                    "value": prop(t.text_global("text")),
                })))
            }))),
            "ends with unterminated string": prop(t.simple_boolean()),
        })),
    }
)


