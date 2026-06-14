import * as pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    text,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Graph": module_(t.group({
            "attributes": prop(t.component_external("attributes", "Attributes")),
            "nodes": prop(t.dictionary(t.group({
                "attributes": prop(t.component_external("attributes", "Attributes"))
            }))),
            "edges": prop(t.list(t.group({
                "from": prop(t.text_global("text")),
                "to": prop(t.text_global("text")),
                "attributes": prop(t.component_external("attributes", "Attributes"))
            }))),
        })),
    }
)
