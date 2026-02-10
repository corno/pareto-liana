import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Directory": module_(t.dictionary(
            t.state({
                "file": toption(t.component_external("high level", "Graph")),
                "directory": toption(t.component("Directory")),
            })
        )),
    }
)


