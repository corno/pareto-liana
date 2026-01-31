import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    n,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Directory": module_(t.dictionary(
            t.component("Node")
        )),

        "Node": module_(t.state({
            "file": toption(t.component("Group")),
            "directory": toption(t.component("Directory")),
        })),

        "Group": module_(t.list(t.component("Group Part"))),

        "Group Part": module_(t.state({
            "nested block": toption(t.component("Block")),
            "block": toption(t.text_global("Output")),
            "sub group": toption(t.component("Group")),
            "optional": toption(t.optional(t.component("Group Part"))),
            "nothing": toption(t.nothing()),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Group Part"))),
                "if empty": prop(t.component("Group Part")),
                "if not empty": prop(t.group({
                    "indent": prop(t.boolean()),
                    "before": prop(t.component("Group Part")),
                    "separator": prop(t.component("Group Part")),
                    "after": prop(t.component("Group Part")),
                })),
            }))
        })),

        "Block": module_(t.list(t.component("Block Part"))),

        "Block Part": module_(t.state({
            "snippet": toption(t.text_global("Output")),
            "indent": toption(t.component("Group")),
            "sub block": toption(t.component("Block")),
            "optional": toption(t.optional(t.component("Block Part"))),
            "nothing": toption(t.nothing()),
            "rich list": toption(t.group({
                "items": prop(t.list(t.component("Block Part"))),
                "if empty": prop(t.component("Block Part")),
                "if not empty": prop(t.group({
                    "before": prop(t.component("Block Part")),
                    "separator": prop(t.component("Block Part")),
                    "after": prop(t.component("Block Part")),
                })),
            }))
        })),
    }
)


