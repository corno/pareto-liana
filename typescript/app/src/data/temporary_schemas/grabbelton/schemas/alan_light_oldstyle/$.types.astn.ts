
import * as sh from "lib/shorthands/schema/manual"


/**
 * dit schema gebruik ik voor het parsen van de oude boekhoudingen.
 * Het enige verschil met de normale alan_light is het ontbreken van de key van de collection
 * In deze versie werd de data nog als objecten opgeslagen ipv arrays
 */
export const $ = sh.modules(
    {
        "Path": sh.module_(sh.t.group({
            "up steps": sh.prop(sh.t.list(sh.t.group({}))),
            "context": sh.prop(sh.t.group({
                "sibling": sh.prop(sh.t.group({})),
                "state constraint": sh.prop(sh.t.group({
                    "name": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
            })),
            "selection steps": sh.prop(sh.t.list(sh.t.group({
                // "dictionary": sh.t.group({
                //     "name": sh.t.basic_local(b.text()),
                // }),
                "group": sh.prop(sh.t.group({
                    "name": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
                "state constraint": sh.prop(sh.t.group({
                    "name": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
                "reference": sh.prop(sh.t.group({
                    "name": sh.prop(sh.t.text_global("Pseudo Reference")),
                })),
            })))
        })),
        "Node": sh.module_(sh.t.group({
            "properties": sh.prop(sh.t.dictionary(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "collection": sh.toption(sh.t.group({
                        "node": sh.prop(sh.t.component("Node")),
                    })),
                    "file": sh.toption(sh.t.nothing()),
                    "group": sh.toption(sh.t.group({
                        "node": sh.prop(sh.t.component("Node")),
                    })),
                    "natural": sh.toption(sh.t.text_global("text")), //why is this not a number?
                    "text": sh.toption(sh.t.nothing()),
                    "reference": sh.toption(sh.t.nothing()),
                    "state group": sh.toption(sh.t.group({
                        "states": sh.prop(sh.t.dictionary(sh.t.group({
                            // "constraints": sh.t.dictionary(sh.t.group({
                            //     "path": sh.t.component("Path")
                            // })),
                            "node": sh.prop(sh.t.component("Node"))
                        })))
                    }))
                }))
            })))
        })),
        "Root": sh.module_(sh.t.group({
            "numerical types": sh.prop(sh.t.dictionary(sh.t.group({

            }))),
            "root": sh.prop(sh.t.component("Node")),
        }))
    }
)


