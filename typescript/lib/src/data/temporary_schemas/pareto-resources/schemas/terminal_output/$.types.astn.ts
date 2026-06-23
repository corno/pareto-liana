

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {
        "Message": module_(t.group({
            "lines": prop(t.list(t.text_global("text"))),
            "raw": prop(t.text_global("multi line text")),
        })),
    }
)


