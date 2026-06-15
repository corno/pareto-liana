

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


