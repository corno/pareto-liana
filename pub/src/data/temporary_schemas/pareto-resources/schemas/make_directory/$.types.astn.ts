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
        "Parameters": type(t.component_external("path", "Node Path")),

        "Error": type(t.state({
            "directory already exists": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
        })),

    }
)


