import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Graph": type(t.group({
            "strict": prop(t.boolean()),
            "type": prop(t.state_group({
                "graph": tstate(t.nothing()),
                "digraph": tstate(t.nothing()),
            })),
            "name": prop(t.optional(t.component("ID"))),
            "statements": prop(t.component("Statement List")),
        })),
        "Statement List": type(t.list(t.state_group({
            "node": tstate(t.group({
                "node": prop(t.component("Node ID")),
                "attribute list": prop(t.component("Attribute List")),
            })),
            "edge": tstate(t.group({
                "left": prop(t.state_group({
                    "node": tstate(t.component("Node ID")),
                    "subgraph": tstate(t.component("Subgraph")),
                })),
                //the operator (-- or ->) can be derived from the graph type
                "right": prop(t.list(t.state_group({
                    "node": tstate(t.component("Node ID")),
                    "subgraph": tstate(t.component("Subgraph")),
                }))),
                "attributes": prop(t.component("Attribute List")),
            })),
            "attribute list": tstate(t.group({
                "type": prop(t.state_group({
                    "graph": tstate(t.nothing()),
                    "node": tstate(t.nothing()),
                    "edge": tstate(t.nothing()),
                })),
                "attributes": prop(t.component("Attribute List")),
            })),
            "attribute assignment": tstate(t.group({
                "name": prop(t.component("ID")),
                "value": prop(t.component("ID")),
            })),
            "subgraph": tstate(t.component("Subgraph")),
        }))),
        "Attribute List": type(t.list(t.group({
            "name": prop(t.component("ID")),
            "value": prop(t.component("ID")),
        }))),
        "Node ID": type(t.group({
            "id": prop(t.component("ID")),
            "port": prop(t.optional(t.group({
                "port": prop(t.component("ID")),
                "compass point": prop(t.optional(t.component("ID"))),
            })))
        })),
        "ID": type(t.state_group({
            "id": tstate(t.text_global("id")),
            "string": tstate(t.text_global("Text Value")),
            "html": tstate(t.text_global("Text Value")),
            "number": tstate(t.number_local(n.integer())),
        })),
        "Subgraph": type(t.group({
            "subgraph": prop(t.optional(t.optional(t.component("ID")))), // is it a subgraph? and if yes, does it have a name?
            "statements": prop(t.component_cyclic("Statement List")),
        })),
    }
)


