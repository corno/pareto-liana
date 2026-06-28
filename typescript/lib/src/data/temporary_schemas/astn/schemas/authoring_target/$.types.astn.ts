
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Document": sh.module_(sh.t.group({
            "header": sh.prop(sh.t.optional(sh.t.component("Value"))),
            "content": sh.prop(sh.t.component("Value")),
        })),

        "Value": sh.module_(sh.t.group({
            "data": sh.prop(sh.t.state({
                "missing": sh.toption(sh.t.group({
                    "#": sh.prop(sh.t.component("Token Trivia")),
                })),
                "include": sh.toption(sh.t.group({
                    "@": sh.prop(sh.t.component("Token Trivia")),
                    "path": sh.prop(sh.t.text_global("text")),
                })),
                "concrete": sh.toption(sh.t.group({
                    "type": sh.prop(sh.t.state({
                        "dictionary": sh.toption(sh.t.group({
                            "{": sh.prop(sh.t.component("Token Trivia")),
                            "entries": sh.prop(sh.t.component("ID Value Pairs")),
                            "}": sh.prop(sh.t.component("Token Trivia")),
                        })),
                        "group": sh.toption(sh.t.state({
                            "concise": sh.toption(sh.t.group({
                                "<": sh.prop(sh.t.component("Token Trivia")),
                                "properties": sh.prop(sh.t.component("Items")),
                                ">": sh.prop(sh.t.component("Token Trivia")),
                            })),
                            "verbose": sh.toption(sh.t.group({
                                "(": sh.prop(sh.t.component("Token Trivia")),
                                "properties": sh.prop(sh.t.component("ID Value Pairs")),
                                ")": sh.prop(sh.t.component("Token Trivia")),
                            })),
                        })),
                        "list": sh.toption(sh.t.group({
                            "[": sh.prop(sh.t.component("Token Trivia")),
                            "items": sh.prop(sh.t.component("Items")),
                            "]": sh.prop(sh.t.component("Token Trivia")),
                        })),
                        "nothing": sh.toption(sh.t.group({
                            "~": sh.prop(sh.t.component("Token Trivia")),
                        })),
                        "optional": sh.toption(sh.t.state({
                            "not set": sh.toption(sh.t.group({
                                "_": sh.prop(sh.t.component("Token Trivia")),
                            })),
                            "set": sh.toption(sh.t.group({
                                "*": sh.prop(sh.t.component("Token Trivia")),
                                "value": sh.prop(sh.t.component("Value")),
                            })),
                        })),
                        "state": sh.toption(sh.t.group({
                            "|": sh.prop(sh.t.component("Token Trivia")),
                            "status": sh.prop(sh.t.state({
                                "missing": sh.toption(sh.t.group({
                                    "#": sh.prop(sh.t.component("Token Trivia")),
                                })),
                                "set": sh.toption(sh.t.group({
                                    "option": sh.prop(sh.t.text_global("Text Value")),
                                    "value": sh.prop(sh.t.component("Value"))
                                }))
                            })),
                        })),
                        "text": sh.toption(sh.t.group({
                            "trivia": sh.prop(sh.t.component("Token Trivia")),
                            "value": sh.prop(sh.t.text_global("Text Value")),
                            "delimiter": sh.prop(sh.t.state({
                                "none": sh.toption(sh.t.nothing()),
                                "quote": sh.toption(sh.t.nothing()),
                                "apostrophe": sh.toption(sh.t.nothing()),
                            })),
                        })),
                    })),
                })),
            }))
        })),

        "Token Trivia": sh.module_(sh.t.group({
            "comments": sh.prop(sh.t.list(sh.t.group({
                "content": sh.prop(sh.t.text_global("text")),
                "type": sh.prop(sh.t.state({
                    "line": sh.toption(sh.t.nothing()),
                    "block": sh.toption(sh.t.nothing()),
                })),
            }))),
        })),

        "ID Value Pairs": sh.module_(sh.t.list(sh.t.group({
            "id": sh.prop(sh.t.text_global("text")),
            "value": sh.prop(sh.t.optional(sh.t.component("Value"))),
        }))),

        "Items": sh.module_(sh.t.list(sh.t.component("Value"))),
    }
)


