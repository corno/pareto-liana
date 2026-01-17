import * as _pi from 'pareto-core-interface'

import {
    types,
    text,
    n,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types  = types(
    {
        "Lines": type(t.text_global("Output")),

        "Directory": type(t.dictionary(
            t.state_group({
                "file": tstate(t.component("Lines")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


