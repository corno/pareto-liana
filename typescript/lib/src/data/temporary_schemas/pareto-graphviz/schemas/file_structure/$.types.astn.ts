

import {
    modules,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {
        "Directory": module_(t.dictionary(
            t.state({
                "file": toption(t.component_external("high level", "Graph")),
                "directory": toption(t.component("Directory")),
            })
        )),
    }
)


