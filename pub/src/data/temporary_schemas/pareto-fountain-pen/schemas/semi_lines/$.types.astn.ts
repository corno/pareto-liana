import * as _pi from 'pareto-core/dist/interface'

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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types  = types(
    {
        "Lines": type(t.list(t.group({
            "text": prop(t.text_global("Output")),
            "indentation": prop(t.number_local(n.natural()))
        }))),

        "Directory": type(t.dictionary(
            t.state({
                "file": tstate(t.component("Lines")),
                "directory": tstate(t.component_cyclic("Directory")),
            })
        )),
    }
)


