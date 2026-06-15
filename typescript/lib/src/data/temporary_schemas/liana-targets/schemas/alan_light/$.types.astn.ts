

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
        "Identifier": module_(t.text_global("Pseudo Reference")),

        "Path": module_(t.group({
            "up steps": prop(t.list(t.group({}))),
            "context": prop(t.state({
                "sibling": toption(t.group({})),
                "state constraint": toption(t.group({
                    "name": prop(t.component("Identifier")),
                })),
            })),
            "selection steps": prop(t.list(t.state({
                "group": toption(t.group({
                    "name": prop(t.component("Identifier")),
                })),
                "state constraint": toption(t.group({
                    "name": prop(t.component("Identifier")),
                })),
                "reference": toption(t.group({
                    "name": prop(t.component("Identifier")),
                })),
            })))
        })),

        "Node": module_(t.group({
            "properties": prop(t.dictionary(t.group({
                "type": prop(t.state({
                    "collection": toption(t.group({
                        "node": prop(t.component("Node")),
                        "key": prop(t.component("Identifier")),
                    })),
                    "group": toption(t.group({
                        "node": prop(t.component("Node")),
                    })),
                    "text": toption(t.group({
                        "constraint": prop(t.optional(t.group({
                            "path": prop(t.component("Path")),
                            "dictionary": prop(t.component("Identifier")),
                        }))),
                    })),
                    "state group": toption(t.group({
                        "states": prop(t.dictionary(t.group({
                            "constraints": prop(t.dictionary(t.group({
                                "path": prop(t.component("Path"))
                            }))),
                            "node": prop(t.component("Node"))
                        })))
                    })),
                })),
            }))),
        })),
        
        "Root": module_(t.group({
            "numerical types": prop(t.dictionary(t.group({

            }))),
            "root": prop(t.component("Node")),
        }))
    }
)


