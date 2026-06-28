
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Graph": sh.module_(sh.t.group({
            "strict": sh.prop(sh.t.simple("boolean")),
            "type": sh.prop(sh.t.state({
                "graph": sh.toption(sh.t.nothing()),
                "digraph": sh.toption(sh.t.nothing()),
            })),
            "name": sh.prop(sh.t.optional(sh.t.component("ID"))),
            "statements": sh.prop(sh.t.component("Statements")),
        })),

        "Statements": sh.module_(sh.t.list(sh.t.state({
            "node": sh.toption(sh.t.group({
                "node": sh.prop(sh.t.component("Node ID")),
                "attributes": sh.prop(sh.t.component("Attributes")),
            })),
            "edge": sh.toption(sh.t.group({
                "left": sh.prop(sh.t.component("End Point")),
                //the operator (-- or ->) can be derived from the graph type
                "right": sh.prop(sh.t.list(sh.t.component("End Point"))),
                "attributes": sh.prop(sh.t.component("Attributes")),
            })),
            "attributes": sh.toption(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "graph": sh.toption(sh.t.nothing()),
                    "node": sh.toption(sh.t.nothing()),
                    "edge": sh.toption(sh.t.nothing()),
                })),
                "attributes": sh.prop(sh.t.component("Attributes")),
            })),
            "attribute assignment": sh.toption(sh.t.group({
                "name": sh.prop(sh.t.component("ID")),
                "value": sh.prop(sh.t.component("ID")),
            })),
            "subgraph": sh.toption(sh.t.component("Subgraph")),
        }))),

        "End Point": sh.module_(sh.t.state({
            "node": sh.toption(sh.t.component("Node ID")),
            "subgraph": sh.toption(sh.t.component("Subgraph")),
        })),

        "Attributes": sh.module_(sh.t.list(sh.t.group({
            "name": sh.prop(sh.t.component("ID")),
            "value": sh.prop(sh.t.component("ID")),
        }))),

        "Node ID": sh.module_(sh.t.group({
            "id": sh.prop(sh.t.component("ID")),
            "port": sh.prop(sh.t.optional(sh.t.group({
                "port": sh.prop(sh.t.component("ID")),
                "compass point": sh.prop(sh.t.optional(sh.t.component("ID"))),
            })))
        })),

        "ID": sh.module_(sh.t.state({
            "id": sh.toption(sh.t.text_global("id")),
            "string": sh.toption(sh.t.text_global("Text Value")),
            "html": sh.toption(sh.t.component_external("html", "Phrasing Element")),
            "number": sh.toption(sh.t.simple("Integer")),
        })),

        "Subgraph": sh.module_(sh.t.group({
            "subgraph": sh.prop(sh.t.optional(sh.t.optional(sh.t.component("ID")))), // is it a subgraph? and if yes, does it have a name?
            "statements": sh.prop(sh.t.component("Statements")),
        })),
    }
)


