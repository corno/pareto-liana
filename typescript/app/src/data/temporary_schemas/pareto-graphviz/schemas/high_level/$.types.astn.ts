
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {


        "Graph": sh.module_(sh.t.group({
            "name": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            "tree": sh.prop(sh.t.component("Tree")),
            "type": sh.prop(sh.t.state({
                "undirected": sh.toption(sh.t.group({
                    "edges": sh.prop(sh.t.list(sh.t.group({
                        "yin": sh.prop(sh.t.component("End Point Specification")),
                        "yang": sh.prop(sh.t.component("End Point Specification")),
                        "attributes": sh.prop(sh.t.component_external("attributes", "Attributes")),
                    })))
                })),
                "directed": sh.toption(sh.t.group({
                    "edges": sh.prop(sh.t.list(sh.t.group({
                        "from": sh.prop(sh.t.component("End Point Specification")),
                        "to": sh.prop(sh.t.component("End Point Specification")),
                        "attributes": sh.prop(sh.t.component_external("attributes", "Attributes")),
                    })))
                })),
            })),
        })),

        /**
         * a tree contains nodes and subgraphs
         */
        "Tree": sh.module_(sh.t.group({
            "attributes": sh.prop(sh.t.component_external("attributes", "Attributes")),
            "elements": sh.prop(sh.t.dictionary(sh.t.state({
                "node": sh.toption(sh.t.group({
                    "attributes": sh.prop(sh.t.component_external("attributes", "Attributes")),
                })),
                "sub": sh.toption(sh.t.group({
                    "type": sh.prop(sh.t.state({
                        "group": sh.toption(sh.t.nothing()),
                        "cluster": sh.toption(sh.t.nothing()),
                        "subgraph": sh.toption(sh.t.nothing()),
                    })),
                    "tree": sh.prop(sh.t.component("Tree")),
                })),
                //}), 'ordered') cannot be ordered until the schema is constrained
            })))
        })),

        "End Point Specification": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.text_global("Text Value")),
            "tail": sh.prop(sh.t.list(sh.t.text_global("Text Value"))),
            "port data": sh.prop(sh.t.optional(sh.t.group({
                "port": sh.prop(sh.t.text_global("Text Value")),
                "compass direction": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            }))),
        })),

    }
)


