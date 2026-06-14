import * as pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {


        "Graph": module_(t.group({
            "name": prop(t.optional(t.text_global("Text Value"))),
            "tree": prop(t.component("Tree")),
            "type": prop(t.state({
                "undirected": toption(t.group({
                    "edges": prop(t.list(t.group({
                        "yin": prop(t.component("End Point Specification")),
                        "yang": prop(t.component("End Point Specification")),
                        "attributes": prop(t.component_external("attributes", "Attributes")),
                    })))
                })),
                "directed": toption(t.group({
                    "edges": prop(t.list(t.group({
                        "from": prop(t.component("End Point Specification")),
                        "to": prop(t.component("End Point Specification")),
                        "attributes": prop(t.component_external("attributes", "Attributes")),
                    })))
                })),
            })),
        })),

        /**
         * a tree contains nodes and subgraphs
         */
        "Tree": module_(t.group({
            "attributes": prop(t.component_external("attributes", "Attributes")),
            "elements": prop(t.dictionary(t.state({
                "node": toption(t.group({
                    "attributes": prop(t.component_external("attributes", "Attributes")),
                })),
                "sub": toption(t.group({
                    "type": prop(t.state({
                        "group": toption(t.nothing()),
                        "cluster": toption(t.nothing()),
                        "subgraph": toption(t.nothing()),
                    })),
                    "tree": prop(t.component("Tree")),
                })),
                //}), 'ordered') cannot be ordered until the schema is constrained
            })))
        })),

        "End Point Specification": module_(t.group({
            "start": prop(t.text_global("Text Value")),
            "tail": prop(t.list(t.text_global("Text Value"))),
            "port data": prop(t.optional(t.group({
                "port": prop(t.text_global("Text Value")),
                "compass direction": prop(t.optional(t.text_global("Text Value"))),
            }))),
        })),

    }
)


