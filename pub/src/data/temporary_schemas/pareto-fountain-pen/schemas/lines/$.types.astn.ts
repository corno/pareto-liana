import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    tr,
    module_,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Lines": module_(t.list(t.text_global("Output"))),

        "Directory": module_(t.dictionary(
            t.state({
                "file": tstate(t.component("Lines")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


