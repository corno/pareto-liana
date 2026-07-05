
import * as sh from "../../../../../shorthands/schema/manual.js"



export const $ = sh.modules(
    {
        "Document": sh.module_(sh.t.group({
            "header": sh.prop(sh.t.optional(sh.t.group({
                "!": sh.prop(sh.t.component("Structural Token")),
                "value": sh.prop(sh.t.component("Value")),
            }))),
            "content": sh.prop(sh.t.component("Content")),
        })),

        "Content": sh.module_(sh.t.component("Value")),

        "Value": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.state({
                "concrete": sh.toption(sh.t.state({
                    "dictionary": sh.toption(sh.t.group({
                        "{": sh.prop(sh.t.component("Structural Token")),
                        "entries": sh.prop(sh.t.component("ID Value Pairs")),
                        "}": sh.prop(sh.t.component("Structural Token")),
                    })),
                    "group": sh.toption(sh.t.state({
                        "concise": sh.toption(sh.t.group({
                            "<": sh.prop(sh.t.component("Structural Token")),
                            "properties": sh.prop(sh.t.component("Items")),
                            ">": sh.prop(sh.t.component("Structural Token")),
                        })),
                        "verbose": sh.toption(sh.t.group({
                            "(": sh.prop(sh.t.component("Structural Token")),
                            "properties": sh.prop(sh.t.component("ID Value Pairs")),
                            ")": sh.prop(sh.t.component("Structural Token")),
                        })),
                    })),
                    "list": sh.toption(sh.t.group({
                        "[": sh.prop(sh.t.component("Structural Token")),
                        "items": sh.prop(sh.t.component("Items")),
                        "]": sh.prop(sh.t.component("Structural Token")),
                    })),
                    "nothing": sh.toption(sh.t.group({
                        "~": sh.prop(sh.t.component("Structural Token")),
                    })),
                    "optional": sh.toption(sh.t.state({
                        "set": sh.toption(sh.t.group({
                            "*": sh.prop(sh.t.component("Structural Token")),
                            "value": sh.prop(sh.t.component("Value")),
                        })),
                        "not set": sh.toption(sh.t.group({
                            "_": sh.prop(sh.t.component("Structural Token")),
                        })),
                    })),
                    "state": sh.toption(sh.t.group({
                        "|": sh.prop(sh.t.component("Structural Token")),
                        "status": sh.prop(sh.t.state({
                            "missing": sh.toption(sh.t.group({
                                "#": sh.prop(sh.t.component("Structural Token")),
                            })),
                            "set": sh.toption(sh.t.group({
                                "option": sh.prop(sh.t.component("Text")),
                                "value": sh.prop(sh.t.component("Value")),
                            }))
                        })),
                    })),
                    "text": sh.toption(sh.t.component("Text")),
                })),
                "include": sh.toption(sh.t.component("Include")),
                "missing": sh.toption(sh.t.group({
                    "#": sh.prop(sh.t.component("Structural Token")),
                })),
            })),
        })),

        "Include": sh.module_(sh.t.group({
            "@": sh.prop(sh.t.component("Structural Token")),
            "path": sh.prop(sh.t.component("Text")),
        })),

        "Structural Token": sh.module_(sh.t.group({
            "trailing trivia": sh.prop(sh.t.component_external("token", "Trivia")),
            "range": sh.prop(sh.t.component_external("location", "Range")),
        })),

        "Text": sh.module_(sh.t.group({
            "trailing trivia": sh.prop(sh.t.component_external("token", "Trivia")),
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "token": sh.prop(sh.t.component_external("token", "Text")),
        })),

        "ID Value Pairs": sh.module_(sh.t.list(sh.t.component("ID Value Pair"))),

        "ID Value Pair": sh.module_(sh.t.group({
            "id": sh.prop(sh.t.component("Text")),
            "assignment": sh.prop(sh.t.optional(sh.t.group({
                ":": sh.prop(sh.t.component("Structural Token")),
                "value": sh.prop(sh.t.optional(sh.t.component("Value"))),
            }))),
        })),

        "Items": sh.module_(sh.t.list(sh.t.group({
            "value": sh.prop(sh.t.component("Value")),
        }))),
    },
)


