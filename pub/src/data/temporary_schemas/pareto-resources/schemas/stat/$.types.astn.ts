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
            "node does not exist": tstate(t.nothing()),
        })),

        "Result": type(t.component("Node Type")),

        "Node Type": type(t.state({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
        })),
    }
)


