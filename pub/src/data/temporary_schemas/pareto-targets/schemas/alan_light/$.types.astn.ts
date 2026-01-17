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
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types  = types(
    {
        "Identifier": type(t.text_global("Pseudo Reference")),

        "Path": type(t.group({
            "up steps": prop(t.list(t.group({}))),
            "context": prop(t.group({
                "sibling": prop(t.group({})),
                "state constraint": prop(t.group({
                    "name": prop(t.component("Identifier")),
                })),
            })),
            "selection steps": prop(t.list(t.group({
                "group": prop(t.group({
                    "name": prop(t.component("Identifier")),
                })),
                "state constraint": prop(t.group({
                    "name": prop(t.component("Identifier")),
                })),
                "reference": prop(t.group({
                    "name": prop(t.component("Identifier")),
                })),
            })))
        })),

        "Node": type(t.group({
            "properties": prop(t.dictionary(t.group({
                "type": prop(t.state_group({
                    "collection": tstate(t.group({
                        "node": prop(t.component_cyclic("Node")),
                        "key": prop(t.component("Identifier")),
                    })),
                    "group": tstate(t.group({
                        "node": prop(t.component_cyclic("Node")),
                    })),
                    "text": tstate(t.group({
                        "constraint": prop(t.optional(t.group({
                            "path": prop(t.component("Path")),
                            "dictionary": prop(t.component("Identifier")),
                        }))),
                    })),
                    "state group": tstate(t.group({
                        "states": prop(t.dictionary(t.group({
                            "constraints": prop(t.dictionary(t.group({
                                "path": prop(t.component("Path"))
                            }))),
                            "node": prop(t.component_cyclic("Node"))
                        })))
                    })),
                })),
            }))),
        })),
        
        "Root": type(t.group({
            "numerical types": prop(t.dictionary(t.group({

            }))),
            "root": prop(t.component("Node")),
        }))
    }
)


