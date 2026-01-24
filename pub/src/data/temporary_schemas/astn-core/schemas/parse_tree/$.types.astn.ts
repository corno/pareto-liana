import * as _pi from 'pareto-core/dist/interface'

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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Types = types(
    {
        "Document": type(t.group({
            "header": prop(t.optional(t.group({
                "!": prop(t.component("Structural Token")),
                "value": prop(t.component("Value")),
            }))),
            "content": prop(t.component("Content")),
        })),

        "Content": type(t.component("Value")),

        "Value": type(t.group({
            "type": prop(t.state({
                "concrete": tstate(t.state({
                    "dictionary": tstate(t.group({
                        "{": prop(t.component("Structural Token")),
                        "entries": prop(t.component("Key Value Pairs")),
                        "}": prop(t.component("Structural Token")),
                    })),
                    "group": tstate(t.state({
                        "concise": tstate(t.group({
                            "<": prop(t.component("Structural Token")),
                            "elements": prop(t.component("Elements")),
                            ">": prop(t.component("Structural Token")),
                        })),
                        "verbose": tstate(t.group({
                            "(": prop(t.component("Structural Token")),
                            "entries": prop(t.component("Key Value Pairs")),
                            ")": prop(t.component("Structural Token")),
                        })),
                    })),
                    "list": tstate(t.group({
                        "[": prop(t.component("Structural Token")),
                        "elements": prop(t.component("Elements")),
                        "]": prop(t.component("Structural Token")),
                    })),
                    "nothing": tstate(t.group({
                        "~": prop(t.component("Structural Token")),
                    })),
                    "optional": tstate(t.state({
                        "set": tstate(t.group({
                            "*": prop(t.component("Structural Token")),
                            "value": prop(t.component_cyclic("Value")),
                        })),
                        //not set is the same as 'nothing'
                    })),
                    "state group": tstate(t.group({
                        "|": prop(t.component("Structural Token")),
                        "status": prop(t.state({
                            "missing data": tstate(t.group({
                                "#": prop(t.component("Structural Token")),
                            })),
                            "set": tstate(t.group({
                                "state": prop(t.component("Text")),
                                "value": prop(t.component_cyclic("Value")),
                            }))
                        })),
                    })),
                    "text": tstate(t.component("Text")),
                })),
                "include": tstate(t.group({
                    "@": prop(t.component("Structural Token")),
                    "path": prop(t.component("Text")),
                })),
                "missing data": tstate(t.group({
                    "#": prop(t.component("Structural Token")),
                })),
            })),
        })),

        "Structural Token": type(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("token", "Range")),
        })),

        "Text": type(t.group({
            "trailing trivia": prop(t.component_external("token", "Trivia")),
            "range": prop(t.component_external("token", "Range")),
            "value": prop(t.text_local(text('single line'))),
            "type": prop(t.component_external("token", "Text Type")),
        })),

        "Key Value Pairs": type(t.list(t.group({
            "key": prop(t.component("Text")),
            "value": prop(t.optional(t.group({
                ":": prop(t.component("Structural Token")),
                "value": prop(t.component_cyclic("Value")),
            }))),
        }))),

        "Elements": type(t.list(t.group({
            "value": prop(t.component_cyclic("Value")),
        }))),
    },
)


