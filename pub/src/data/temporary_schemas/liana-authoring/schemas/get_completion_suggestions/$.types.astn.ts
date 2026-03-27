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
            "completion suggestions": prop(t.component_external("completion suggestions", "Completion Suggestions")),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
            "source": prop(t.group({
                "file path": prop(t.component_external("path", "Node Path")),
                "tab size": prop(t.simple("Natural")),
            })),
            "position": prop(t.component_external("location", "Position")),
            "indent": prop(t.text_local(text('single line'))),
        })),

    }
)