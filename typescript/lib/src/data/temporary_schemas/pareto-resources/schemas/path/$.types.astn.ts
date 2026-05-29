import * as _pi from 'pareto-core/dist/interface'

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

        // "Optional Node Path": type(t.group({
        //     "start": prop(t.component("Start")),
        //     "subpath": prop(t.component("Node Subpath")),
        //     "node": prop(t.optional(t.text_global("text"))),
        // })),

        "Node Path": module_(t.group({
            "context": prop(t.component("Context Path")),
            "node": prop(t.text_global("text")),
        })),

        // "Node Subpath": type(t.group({
        //     "subpath": prop(t.component("Directory Subpath")),
        // })),

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

        "Non Normalized Path": module_(t.group({
            "leading slash": prop(t.simple("boolean")),
            "segments": prop(t.list(t.state({
                "parent": toption(t.nothing()),
                "child": toption(t.text_global("text")),
                "current": toption(t.nothing()),
                "nothing": toption(t.nothing()),
            }))),
            "trailing slash": prop(t.simple("boolean")),
        }))
    }
)


