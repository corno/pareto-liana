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

        "Result": module_(t.list(t.state({
            "replace": toption(t.group({
                "range": prop(t.component_external("location", "Range")),
                "text": prop(t.text_local(text('multi line'))),
            })),
            "delete": toption(t.group({
                "range": prop(t.component_external("location", "Range")),
            })),
            "insert": toption(t.group({
                "location": prop(t.component_external("location", "Position")),
                "text": prop(t.text_local(text('multi line'))),
            })),
        }))),

        "Error": module_(t.group({
            "message": prop(t.text_local(text('single line'))),
        })),

        "Parameters": module_(t.group({
            "options": prop(t.group({
                "insert spaces": prop(t.boolean()),
                "preserve delimiters": prop(t.boolean()),
                "preserve final newline state": prop(t.boolean()),
                "preserve commas": prop(t.boolean()),
                "indent string": prop(t.text_local(text('single line'))),
            })),
        })),

    }
)