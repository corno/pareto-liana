import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        // "Optional Node Path": type(t.group({
        //     "start": prop(t.component("Start")),
        //     "subpath": prop(t.component("Node Subpath")),
        //     "node": prop(t.optional(t.text_local(text('single line')))),
        // })),

        "Node Path": type(t.group({
            "context": prop(t.component("Context Path")),
            "node": prop(t.text_local(text('single line'))),
        })),

        // "Node Subpath": type(t.group({
        //     "subpath": prop(t.component("Directory Subpath")),
        // })),

        "Context Path": type(t.group({
            "start": prop(t.component("Start")),
            "subpath": prop(t.component("Context Subpath")),
        })),

        "Context Subpath": type(t.list(t.text_local(text('single line')))),

        "Start": type(t.state_group({
            "absolute": tstate(t.nothing()),
            "relative": tstate(t.group({
                "up steps": prop(t.component("Up Steps")),
            })),
        })),

        "Up Steps": type(t.number_local(n.natural())),

        "Non Normalized Path": type(t.group({
            "leading slash": prop(t.boolean()),
            "segments": prop(t.list(t.state_group({
                "parent": tstate(t.nothing()),
                "child": tstate(t.text_local(text('single line'))),
                "current": tstate(t.nothing()),
                "nothing": tstate(t.nothing()),
            }))),
            "trailing slash": prop(t.boolean()),
        }))
    }
)


