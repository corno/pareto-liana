import * as pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "ID": module_(t.group({
            "key": prop(t.text_global("text")),
            "id": prop(t.text_global("text")),
            "source": prop(t.optional(t.component_external("location", "Range"))),
        })),
        "Raw Reference": module_(t.group({
            "resolveInfo": prop(t.text_global("text")),
            "reference": prop(t.optional(t.text_global("text"))),
        })),
        "Singular Reference": module_(t.component("Raw Reference")),
        "References": module_(t.list(t.component("Raw Reference"))),
        "Optional Reference": module_(t.optional(t.component("Raw Reference"))),
    }
)