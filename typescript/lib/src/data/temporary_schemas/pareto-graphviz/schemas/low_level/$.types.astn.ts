

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {

        "Graph": module_(t.group({
            "strict": prop(t.simple("boolean")),
            "type": prop(t.state({
                "graph": toption(t.nothing()),
                "digraph": toption(t.nothing()),
            })),
            "name": prop(t.optional(t.component("ID"))),
            "statements": prop(t.component("Statements")),
        })),

        "Statements": module_(t.list(t.state({
            "node": toption(t.group({
                "node": prop(t.component("Node ID")),
                "attributes": prop(t.component("Attributes")),
            })),
            "edge": toption(t.group({
                "left": prop(t.component("End Point")),
                //the operator (-- or ->) can be derived from the graph type
                "right": prop(t.list(t.component("End Point"))),
                "attributes": prop(t.component("Attributes")),
            })),
            "attributes": toption(t.group({
                "type": prop(t.state({
                    "graph": toption(t.nothing()),
                    "node": toption(t.nothing()),
                    "edge": toption(t.nothing()),
                })),
                "attributes": prop(t.component("Attributes")),
            })),
            "attribute assignment": toption(t.group({
                "name": prop(t.component("ID")),
                "value": prop(t.component("ID")),
            })),
            "subgraph": toption(t.component("Subgraph")),
        }))),

        "End Point": module_(t.state({
            "node": toption(t.component("Node ID")),
            "subgraph": toption(t.component("Subgraph")),
        })),

        "Attributes": module_(t.list(t.group({
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
            "html": toption(t.component_external("html", "Phrasing Element")),
            "number": toption(t.simple("Integer")),
        })),

        "Subgraph": module_(t.group({
            "subgraph": prop(t.optional(t.optional(t.component("ID")))), // is it a subgraph? and if yes, does it have a name?
            "statements": prop(t.component("Statements")),
        })),
    }
)


