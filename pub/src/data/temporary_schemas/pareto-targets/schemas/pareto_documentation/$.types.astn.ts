import * as _pi from 'pareto-core-interface'

import {
    types,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types  = types(
    {
        // "Railroad Directory": type(t.dictionary(
        //     t.state_group({
        //         "file": t.component_external("railroad diagram", "Grammar"),
        //         "directory": t.component_cyclic("Railroad Directory"),
        //     })
        // )),
        "Graphviz Directory": type(t.dictionary(
            t.state_group({
                "file": tstate(t.component_external("graphviz", "Graph")),
                "directory": tstate(t.component_cyclic("Graphviz Directory")),
            })
        )),
    }
)


