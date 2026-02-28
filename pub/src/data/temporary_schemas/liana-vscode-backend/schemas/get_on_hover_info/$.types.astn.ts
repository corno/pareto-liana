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
            "contents": prop(t.group({
                "hover texts": prop(t.optional(t.list(t.text_local(text('single line'))))),
            })),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "file path": prop(t.text_local(text('single line'))),
            "position": prop(t.component_external("location", "Position")),
        })),

    }
)