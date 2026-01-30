import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Parameters": module_(t.component_external("path", "Node Path")),

        "Error": module_(t.state({
            "node does not exist": tstate(t.nothing()),
        })),

        "Result": module_(t.component("Node Type")),

        "Node Type": module_(t.state({
            "file": tstate(t.nothing()),
            "directory": tstate(t.nothing()),
        })),
    }
)


