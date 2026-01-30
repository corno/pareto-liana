import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Lines": type(t.list(t.text_global("Output"))),

        "Directory": type(t.dictionary(
            t.state({
                "file": tstate(t.component("Lines")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


