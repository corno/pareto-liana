import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Parameters": type(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "data": prop(t.text_local(text('multi line'))),
        })),

        "Error": type(t.state({
            "permission denied": tstate(t.nothing()),
        })),
    }
)


