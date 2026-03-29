import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,

} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

/**
 * dit schema gebruik ik voor het parsen van de oude boekhoudingen.
 * Het enige verschil met de normale alan_light is het ontbreken van de key van de collection
 * In deze versie werd de data nog als objecten opgeslagen ipv arrays
 */
export const $: g_.Modules = modules(
    {
        "Path": module_(t.group({
            "up steps": prop(t.list(t.group({}))),
            "context": prop(t.group({
                "sibling": prop(t.group({})),
                "state constraint": prop(t.group({
                    "name": prop(t.text_global("Pseudo Reference")),
                })),
            })),
            "selection steps": prop(t.list(t.group({
                // "dictionary": t.group({
                //     "name": t.basic_local(b.text()),
                // }),
                "group": prop(t.group({
                    "name": prop(t.text_global("Pseudo Reference")),
                })),
                "state constraint": prop(t.group({
                    "name": prop(t.text_global("Pseudo Reference")),
                })),
                "reference": prop(t.group({
                    "name": prop(t.text_global("Pseudo Reference")),
                })),
            })))
        })),
        "Node": module_(t.group({
            "properties": prop(t.dictionary(t.group({
                "type": prop(t.state({
                    "collection": toption(t.group({
                        "node": prop(t.component("Node")),
                    })),
                    "file": toption(t.nothing()),
                    "group": toption(t.group({
                        "node": prop(t.component("Node")),
                    })),
                    "natural": toption(t.text_global("text")), //why is this not a number?
                    "text": toption(t.nothing()),
                    "reference": toption(t.nothing()),
                    "state group": toption(t.group({
                        "states": prop(t.dictionary(t.group({
                            // "constraints": t.dictionary(t.group({
                            //     "path": t.component("Path")
                            // })),
                            "node": prop(t.component("Node"))
                        })))
                    }))
                }))
            })))
        })),
        "Root": module_(t.group({
            "numerical types": prop(t.dictionary(t.group({

            }))),
            "root": prop(t.component("Node")),
        }))
    }
)


