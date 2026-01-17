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

        "Directory": type(t.dictionary(
            t.component("Node")
        )),

        "Node": type(t.state_group({
            "file": tstate(t.component("Group")),
            "directory": tstate(t.component_cyclic("Directory")),
        })),

        "Group": type(t.list(t.component("Group Part"))),

        "Group Part": type(t.state_group({
            "nested block": tstate(t.component("Block")),
            "block": tstate(t.text_global("Output")),
            "sub group": tstate(t.component_cyclic("Group")),
            "optional": tstate(t.optional(t.component_cyclic("Group Part"))),
            "nothing": tstate(t.nothing()),
        })),

        "Block": type(t.list(t.component("Block Part"))),

        "Block Part": type(t.state_group({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component_cyclic("Group")),
            "sub block": tstate(t.component_cyclic("Block")),
            "optional": tstate(t.optional(t.component_cyclic("Block Part"))),
            "nothing": tstate(t.nothing()),
        })),
    }
)


