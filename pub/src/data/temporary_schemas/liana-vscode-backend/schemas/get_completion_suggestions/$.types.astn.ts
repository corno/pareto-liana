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

        "Result": module_(t.group({
            "completion items": prop(t.list(t.group({
                "label": prop(t.text_local(text('single line'))),
                "insert text": prop(t.text_local(text('single line'))),
                "documentation": prop(t.text_local(text('multi line'))),
            }))),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component_external("location", "Position")),
            "indent": prop(t.text_local(text('single line'))),
        })),

    }
)