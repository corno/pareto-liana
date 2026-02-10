import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Graph": module_(t.group({
            "strict": prop(t.boolean()),
            "type": prop(t.state({
                "graph": toption(t.nothing()),
                "digraph": toption(t.nothing()),
            })),
            "name": prop(t.optional(t.component("ID"))),
            "statements": prop(t.component("Statement List")),
        })),
        "Statement List": module_(t.list(t.state({
            "node": toption(t.group({
                "node": prop(t.component("Node ID")),
                "attribute list": prop(t.component("Attribute List")),
            })),
            "edge": toption(t.group({
                "left": prop(t.state({
                    "node": toption(t.component("Node ID")),
                    "subgraph": toption(t.component("Subgraph")),
                })),
                //the operator (-- or ->) can be derived from the graph type
                "right": prop(t.list(t.state({
                    "node": toption(t.component("Node ID")),
                    "subgraph": toption(t.component("Subgraph")),
                }))),
                "attributes": prop(t.component("Attribute List")),
            })),
            "attribute list": toption(t.group({
                "type": prop(t.state({
                    "graph": toption(t.nothing()),
                    "node": toption(t.nothing()),
                    "edge": toption(t.nothing()),
                })),
                "attributes": prop(t.component("Attribute List")),
            })),
            "attribute assignment": toption(t.group({
                "name": prop(t.component("ID")),
                "value": prop(t.component("ID")),
            })),
            "subgraph": toption(t.component("Subgraph")),
        }))),
        "Attribute List": module_(t.list(t.group({
            "name": prop(t.component("ID")),
            "value": prop(t.component("ID")),
        }))),
        "Node ID": module_(t.group({
            "id": prop(t.component("ID")),
            "port": prop(t.optional(t.group({
                "port": prop(t.component("ID")),
                "compass point": prop(t.optional(t.component("ID"))),
            })))
        })),
        "ID": module_(t.state({
            "id": toption(t.text_global("id")),
            "string": toption(t.text_global("Text Value")),
            "html": toption(t.text_global("Text Value")),
            "number": toption(t.number_local(n.integer(null))),
        })),
        "Subgraph": module_(t.group({
            "subgraph": prop(t.optional(t.optional(t.component("ID")))), // is it a subgraph? and if yes, does it have a name?
            "statements": prop(t.component("Statement List")),
        })),
    }
)


