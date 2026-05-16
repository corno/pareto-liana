import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    text,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Document": module_(t.group({
            "header": prop(t.optional(t.component("Value"))),
            "content": prop(t.component("Value")),
        })),

        "Value": module_(t.group({
            "data": prop(t.state({
                "missing": toption(t.group({
                    "#": prop(t.component("Token Trivia")),
                })),
                "include": toption(t.group({
                    "@": prop(t.component("Token Trivia")),
                    "path": prop(t.text_global("text")),
                })),
                "concrete": toption(t.group({
                    "type": prop(t.state({
                        "dictionary": toption(t.group({
                            "{": prop(t.component("Token Trivia")),
                            "entries": prop(t.component("ID Value Pairs")),
                            "}": prop(t.component("Token Trivia")),
                        })),
                        "group": toption(t.state({
                            "concise": toption(t.group({
                                "<": prop(t.component("Token Trivia")),
                                "properties": prop(t.component("Items")),
                                ">": prop(t.component("Token Trivia")),
                            })),
                            "verbose": toption(t.group({
                                "(": prop(t.component("Token Trivia")),
                                "properties": prop(t.component("ID Value Pairs")),
                                ")": prop(t.component("Token Trivia")),
                            })),
                        })),
                        "list": toption(t.group({
                            "[": prop(t.component("Token Trivia")),
                            "items": prop(t.component("Items")),
                            "]": prop(t.component("Token Trivia")),
                        })),
                        "nothing": toption(t.group({
                            "~": prop(t.component("Token Trivia")),
                        })),
                        "optional": toption(t.state({
                            "not set": toption(t.group({
                                "_": prop(t.component("Token Trivia")),
                            })),
                            "set": toption(t.group({
                                "*": prop(t.component("Token Trivia")),
                                "value": prop(t.component("Value")),
                            })),
                        })),
                        "state": toption(t.group({
                            "|": prop(t.component("Token Trivia")),
                            "status": prop(t.state({
                                "missing": toption(t.group({
                                    "#": prop(t.component("Token Trivia")),
                                })),
                                "set": toption(t.group({
                                    "option": prop(t.text_global("Text Value")),
                                    "value": prop(t.component("Value"))
                                }))
                            })),
                        })),
                        "text": toption(t.group({
                            "trivia": prop(t.component("Token Trivia")),
                            "value": prop(t.text_global("Text Value")),
                            "delimiter": prop(t.state({
                                "none": toption(t.nothing()),
                                "quote": toption(t.nothing()),
                                "apostrophe": toption(t.nothing()),
                            })),
                        })),
                    })),
                })),
            }))
        })),

        "Token Trivia": module_(t.group({
            "comments": prop(t.list(t.group({
                "content": prop(t.text_global("text")),
                "type": prop(t.state({
                    "line": toption(t.nothing()),
                    "block": toption(t.nothing()),
                })),
            }))),
        })),

        "ID Value Pairs": module_(t.list(t.group({
            "id": prop(t.text_global("text")),
            "value": prop(t.optional(t.component("Value"))),
        }))),

        "Items": module_(t.list(t.component("Value"))),
    }
)


