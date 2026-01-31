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
        // "Railroad Directory": type(t.dictionary(
        //     t.state({
        //         "file": t.component_external("railroad diagram", "Grammar"),
        //         "directory": t.component_cyclic("Railroad Directory"),
        //     })
        // )),
        "Graphviz Directory": module_(t.dictionary(
            t.state({
                "file": toption(t.component_external("graphviz", "Graph")),
                "directory": toption(t.component_cyclic("Graphviz Directory")),
            })
        )),
    }
)


