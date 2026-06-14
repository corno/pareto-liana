import * as p_di from 'pareto-core/dist/data/interface'

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
            "start": prop(t.nothing()), //to make sure it is not castable to a unrestricted context path
            "subpath": prop(t.component("Context Subpath")),
        })),

        "Context Subpath": module_(t.list(t.text_global("text"))),

    }
)


