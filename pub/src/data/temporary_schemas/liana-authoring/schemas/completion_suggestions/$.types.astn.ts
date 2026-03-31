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
            "label": prop(t.text_global("text")),
            "insert text": prop(t.text_global("text")),
            "documentation": prop(t.text_global("multi line text")),
            "additional text edits": prop(t.component_external("text edits", "Text Edits")),
            "type": prop(t.state({
                "component": toption(t.nothing()),
                "dictionary": toption(t.nothing()),
                "group": toption(t.nothing()),
                "list": toption(t.nothing()),
                "nothing": toption(t.nothing()),
                "simple": toption(t.nothing()),
                "optional": toption(t.nothing()),
                "reference": toption(t.nothing()),
                "state": toption(t.nothing()),
                "text": toption(t.nothing()),
            }))
        }))),

    }
)