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
        "Diagnostics": module_(t.list(t.group({
            "severity": prop(t.state({
                "error": toption(t.nothing()),
                "warning": toption(t.nothing()),
                "information": toption(t.nothing()),
                "hint": toption(t.nothing()),
            })),
            "range": prop(t.component_external("location", "Range")),
            "message": prop(t.text_local(text('single line'))),
            "related information": prop(t.optional(t.list(t.group({
                "location": prop(t.group({
                    "file path": prop(t.component_external("path", "Node Path")),
                    "range": prop(t.component_external("location", "Range")),
                })),
                "message": prop(t.text_local(text('single line'))),
            })))),
        }))),


        //are these below still needed?
        "Result": module_(t.group({
            "diagnostics": prop(t.component("Diagnostics")),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.component_external("path", "Node Path")),
            "tab size": prop(t.number_local(n.natural(null))),
        })),
    }
)