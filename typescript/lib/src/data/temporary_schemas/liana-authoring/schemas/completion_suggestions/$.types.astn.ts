

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Completion Suggestions": module_(t.optional(t.group({
            "type": prop(t.state({
                "missing value": toption(t.nothing()),
                "missing option": toption(t.nothing()),
                "reference": toption(t.nothing()),
                "property name": toption(t.nothing()),
                "option name": toption(t.nothing()),
            })),
            "suggestions": prop(t.list(t.group({
                "label": prop(t.text_global("text")),
                "insert text": prop(t.text_global("text")),
                "documentation": prop(t.text_global("multi line text")),
            })))
        }))),

    }
)