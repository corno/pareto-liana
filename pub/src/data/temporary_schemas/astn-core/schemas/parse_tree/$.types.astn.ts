import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Modules = modules(
    {
        "Document": module_(t.group({
            "header": prop(t.optional(t.group({
                "!": prop(t.component("Structural Token")),
                "value": prop(t.component("Value")),
            }))),
            "content": prop(t.component("Content")),
        })),

        "Content": module_(t.component("Value")),

        "Value": module_(t.group({
            "type": prop(t.state({
                "concrete": toption(t.state({
                    "dictionary": toption(t.group({
                        "{": prop(t.component("Structural Token")),
                        "entries": prop(t.component("ID Value Pairs")),
                        "}": prop(t.component("Structural Token")),
                    })),
                    "group": toption(t.state({
                        "concise": toption(t.group({
                            "<": prop(t.component("Structural Token")),
                            "items": prop(t.component("Items")),
                            ">": prop(t.component("Structural Token")),
                        })),
                        "verbose": toption(t.group({
                            "(": prop(t.component("Structural Token")),
                            "entries": prop(t.component("ID Value Pairs")),
                            ")": prop(t.component("Structural Token")),
                        })),
                    })),
                    "list": toption(t.group({
                        "[": prop(t.component("Structural Token")),
                        "items": prop(t.component("Items")),
                        "]": prop(t.component("Structural Token")),
                    })),
                    "nothing": toption(t.group({
                        "~": prop(t.component("Structural Token")),
                    })),
                    "optional": toption(t.state({
                        "set": toption(t.group({
                            "*": prop(t.component("Structural Token")),
                            "value": prop(t.component("Value")),
                        })),
                        //not set is the same as 'nothing'
                    })),
                    "state": toption(t.group({
                        "|": prop(t.component("Structural Token")),
                        "status": prop(t.state({
                            "missing data": toption(t.group({
                                "#": prop(t.component("Structural Token")),
                            })),
                            "set": toption(t.group({
                                "option": prop(t.component("Text")),
                                "value": prop(t.component("Value")),
                            }))
                        })),
                    })),
                    "text": toption(t.component("Text")),
                })),
                "include": toption(t.group({
                    "@": prop(t.component("Structural Token")),
                    "path": prop(t.component("Text")),
                })),
                "missing data": toption(t.group({
                    "#": prop(t.component("Structural Token")),
                })),
            })),
        })),

        "Structural Token": module_(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("location", "Range")),
        })),

        "Text": module_(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("location", "Range")),
            "value": prop(t.text_local(text('single line'))),
            "type": prop(t.component_external("token", "Text Type")),
        })),

        "ID Value Pairs": module_(t.list(t.group({
            "id": prop(t.component("Text")),
            "value": prop(t.optional(t.group({
                ":": prop(t.component("Structural Token")),
                "value": prop(t.component("Value")),
            }))),
        }))),

        "Items": module_(t.list(t.group({
            "value": prop(t.component("Value")),
        }))),
    },
)


