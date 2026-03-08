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

        "Completion Suggestions": module_(t.list(t.group({
            "label": prop(t.text_local(text('single line'))),
            "insert text": prop(t.text_local(text('single line'))),
            "documentation": prop(t.text_local(text('multi line'))),
            "additional text edits": prop(t.component_external("text edits", "Text Edits"))
        }))),

    }
)