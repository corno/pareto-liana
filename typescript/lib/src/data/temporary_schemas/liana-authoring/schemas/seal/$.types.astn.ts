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


export const $ = modules(
    {

        "Result": module_(t.text_global("text")),

        // "Error": module_(t.state({

        // })),

        "Parameters": module_(t.group({
            "content": prop(t.text_global("multi line text")),
            "source": prop(t.group({
                "file path": prop(t.component_external("path", "Node Path")),
                "tab size": prop(t.simple("Natural")),
            })),
            "target": prop(t.group({
                "indentation": prop(t.text_global("text")),
                "newline": prop(t.text_global("text")),
            })),
        })),

    }
)