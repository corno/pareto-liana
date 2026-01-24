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

        "Directory": type(t.dictionary(
            t.component("Node")
        )),

        "Node": type(t.state({
            "file": tstate(t.component("Group")),
            "directory": tstate(t.component_cyclic("Directory")),
        })),

        "Group": type(t.list(t.component("Group Part"))),

        "Group Part": type(t.state({
            "nested block": tstate(t.component("Block")),
            "block": tstate(t.text_global("Output")),
            "sub group": tstate(t.component_cyclic("Group")),
            "optional": tstate(t.optional(t.component_cyclic("Group Part"))),
            "nothing": tstate(t.nothing()),
            "rich list": tstate(t.group({
                "elements": prop(t.list(t.component_cyclic("Group Part"))),
                "if empty": prop(t.component_cyclic("Group Part")),
                "if not empty": prop(t.group({
                    "indent": prop(t.boolean()),
                    "before": prop(t.component_cyclic("Group Part")),
                    "separator": prop(t.component_cyclic("Group Part")),
                    "after": prop(t.component_cyclic("Group Part")),
                })),
            }))
        })),

        "Block": type(t.list(t.component("Block Part"))),

        "Block Part": type(t.state({
            "snippet": tstate(t.text_global("Output")),
            "indent": tstate(t.component_cyclic("Group")),
            "sub block": tstate(t.component_cyclic("Block")),
            "optional": tstate(t.optional(t.component_cyclic("Block Part"))),
            "nothing": tstate(t.nothing()),
            "rich list": tstate(t.group({
                "elements": prop(t.list(t.component_cyclic("Block Part"))),
                "if empty": prop(t.component_cyclic("Block Part")),
                "if not empty": prop(t.group({
                    "before": prop(t.component_cyclic("Block Part")),
                    "separator": prop(t.component_cyclic("Block Part")),
                    "after": prop(t.component_cyclic("Block Part")),
                })),
            }))
        })),
    }
)


