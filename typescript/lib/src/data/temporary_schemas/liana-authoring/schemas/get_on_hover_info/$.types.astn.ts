import * as p_di from 'pareto-core/dist/data/interface'

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

        "Result": module_(t.group({
            "contents": prop(t.group({
                "hover texts": prop(t.component_external("hover info", "Hover Texts")),
            })),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_global("multi line text")),
            "source": prop(t.group({
                "file path": prop(t.component_external("path unrestricted", "Node Path")),
                "tab size": prop(t.simple("Natural")),
            })),
            "position": prop(t.component_external("location", "Position")),
        })),

    }
)