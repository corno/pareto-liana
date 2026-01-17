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

/**
 * dit schema gebruik ik voor het parsen van de oude boekhoudingen.
 * Het enige verschil met de normale alan_light is het ontbreken van de key van de collection
 * In deze versie werd de data nog als objecten opgeslagen ipv arrays
 */
export const $: g_.Types  = types(
    {
        "Path": type(t.group({
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
        "Node": type(t.group({
            "properties": prop(t.dictionary(t.group({
                "type": prop(t.state_group({
                    "collection": tstate(t.group({
                        "node": prop(t.component_cyclic("Node")),
                    })),
                    "file": tstate(t.nothing()),
                    "group": tstate(t.group({
                        "node": prop(t.component_cyclic("Node")),
                    })),
                    "natural": tstate(t.text_local(text('single line'))), //why is this not a number?
                    "text": tstate(t.nothing()),
                    "reference": tstate(t.nothing()),
                    "state group": tstate(t.group({
                        "states": prop(t.dictionary(t.group({
                            // "constraints": t.dictionary(t.group({
                            //     "path": t.component("Path")
                            // })),
                            "node": prop(t.component_cyclic("Node"))
                        })))
                    }))
                }))
            })))
        })),
        "Root": type(t.group({
            "numerical types": prop(t.dictionary(t.group({

            }))),
            "root": prop(t.component("Node")),
        }))
    }
)


