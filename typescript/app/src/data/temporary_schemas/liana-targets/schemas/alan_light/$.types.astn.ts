
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Identifier": sh.module_(sh.t.text_global("Pseudo Reference")),

        "Path": sh.module_(sh.t.group({
            "up steps": sh.prop(sh.t.list(sh.t.group({}))),
            "context": sh.prop(sh.t.state({
                "sibling": sh.toption(sh.t.group({})),
                "state constraint": sh.toption(sh.t.group({
                    "name": sh.prop(sh.t.component("Identifier")),
                })),
            })),
            "selection steps": sh.prop(sh.t.list(sh.t.state({
                "group": sh.toption(sh.t.group({
                    "name": sh.prop(sh.t.component("Identifier")),
                })),
                "state constraint": sh.toption(sh.t.group({
                    "name": sh.prop(sh.t.component("Identifier")),
                })),
                "reference": sh.toption(sh.t.group({
                    "name": sh.prop(sh.t.component("Identifier")),
                })),
            })))
        })),

        "Node": sh.module_(sh.t.group({
            "properties": sh.prop(sh.t.dictionary(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "collection": sh.toption(sh.t.group({
                        "node": sh.prop(sh.t.component("Node")),
                        "key": sh.prop(sh.t.component("Identifier")),
                    })),
                    "group": sh.toption(sh.t.group({
                        "node": sh.prop(sh.t.component("Node")),
                    })),
                    "text": sh.toption(sh.t.group({
                        "constraint": sh.prop(sh.t.optional(sh.t.group({
                            "path": sh.prop(sh.t.component("Path")),
                            "dictionary": sh.prop(sh.t.component("Identifier")),
                        }))),
                    })),
                    "state group": sh.toption(sh.t.group({
                        "states": sh.prop(sh.t.dictionary(sh.t.group({
                            "constraints": sh.prop(sh.t.dictionary(sh.t.group({
                                "path": sh.prop(sh.t.component("Path"))
                            }))),
                            "node": sh.prop(sh.t.component("Node"))
                        })))
                    })),
                })),
            }))),
        })),
        
        "Root": sh.module_(sh.t.group({
            "numerical types": sh.prop(sh.t.dictionary(sh.t.group({

            }))),
            "root": sh.prop(sh.t.component("Node")),
        }))
    }
)


