import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../shorthands/schema"


export const $ = modules(
    {

        "Node Path": module_(t.group({
            "context": prop(t.component("Context Path")),
            "node": prop(t.text_global("text")),
        })),

        "Context Path": module_(t.group({
            "start": prop(t.component("Start")),
            "subpath": prop(t.component("Context Subpath")),
        })),

        "Context Subpath": module_(t.list(t.text_global("text"))),

        "Start": module_(t.state({
            "absolute": toption(t.nothing()),
            "relative": toption(t.group({
                "up steps": prop(t.component("Up Steps")),
            })),
        })),

        "Up Steps": module_(t.simple("Natural")),
        
    }
)


