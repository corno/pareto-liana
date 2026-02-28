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
                "hover texts": prop(t.component_external("hover info", "Hover Texts")),
            })),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "source": prop(t.group({
                "file path": prop(t.component_external("path", "Node Path")),
                "tab size": prop(t.number_local(n.natural(null))),
            })),
            "position": prop(t.component_external("location", "Position")),
        })),

    }
)