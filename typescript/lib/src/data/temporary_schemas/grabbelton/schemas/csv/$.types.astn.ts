

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
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
            "ends with unterminated string": prop(t.simple("boolean")),
        })),
    }
)


