
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "ATN": sh.module_(sh.t.group({
            "grammar name": sh.prop(sh.t.text_global("Text Value")),
            "grammar type": sh.prop(sh.t.state({
                "lexer": sh.toption(sh.t.nothing()),
                "parser": sh.toption(sh.t.nothing()),
                "unknown": sh.toption(sh.t.nothing()),
            })),
            "max token type": sh.prop(sh.t.simple("Integer")),
            "states": sh.prop(sh.t.list(sh.t.group({
                "state number": sh.prop(sh.t.simple("State Number")),
                "type": sh.prop(sh.t.state({
                    "null": sh.toption(sh.t.nothing()),
                    "normal": sh.toption(sh.t.group({
                        "rule index": sh.prop(sh.t.simple("Integer")),
                        "transitions": sh.prop(sh.t.list(sh.t.group({
                            "target": sh.prop(sh.t.simple("State Number")),
                            "type": sh.prop(sh.t.state({
                                "atom": sh.toption(sh.t.group({
                                    "label": sh.prop(sh.t.simple("Integer")),
                                })),
                                "set": sh.toption(sh.t.group({
                                    "set": sh.prop(sh.t.text_global("Text Value")),
                                })),
                                "range": sh.toption(sh.t.group({
                                    "from": sh.prop(sh.t.simple("Integer")),
                                    "to": sh.prop(sh.t.simple("Integer")),
                                })),
                                "rule": sh.toption(sh.t.group({
                                    "rule index": sh.prop(sh.t.simple("Integer")),
                                    "precedence": sh.prop(sh.t.simple("Integer")),
                                    "follow state": sh.prop(sh.t.optional(sh.t.simple("State Number"))),
                                })),
                                "predicate": sh.toption(sh.t.group({
                                    "rule index": sh.prop(sh.t.simple("Integer")),
                                    "pred index": sh.prop(sh.t.simple("Integer")),
                                    "is ctx dependent": sh.prop(sh.t.simple("boolean")),
                                })),
                                "action": sh.toption(sh.t.group({
                                    "rule index": sh.prop(sh.t.simple("Integer")),
                                    "action index": sh.prop(sh.t.simple("Integer")),
                                    "is ctx dependent": sh.prop(sh.t.simple("boolean")),
                                })),
                                "epsilon": sh.toption(sh.t.nothing()),
                                "wildcard": sh.toption(sh.t.nothing()),
                                "unknown": sh.toption(sh.t.nothing()),
                            })),
                        }))),
                        "state type": sh.prop(sh.t.state({
                            "rule start": sh.toption(sh.t.group({
                                "is left recursive rule": sh.prop(sh.t.simple("boolean")),
                                "stop state number": sh.prop(sh.t.optional(sh.t.simple("State Number"))),
                            })),
                            "rule stop": sh.toption(sh.t.nothing()),
                            "tokens start": sh.toption(sh.t.nothing()),
                            "plus block start": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                                "loop back state number": sh.prop(sh.t.optional(sh.t.simple("State Number"))),
                            })),
                            "star block start": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                            })),
                            "plus loopback": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                            })),
                            "star loopback": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                            })),
                            "loop end": sh.toption(sh.t.nothing()),
                            "block start": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                            })),
                            "block end": sh.toption(sh.t.group({
                                "start state number": sh.prop(sh.t.optional(sh.t.simple("State Number"))),
                            })),
                            "basic": sh.toption(sh.t.nothing()),
                            "decision": sh.toption(sh.t.group({
                                "decision info": sh.prop(sh.t.component("Decision Info")),
                            })),
                            "unknown": sh.toption(sh.t.nothing()),
                        })),
                    })),
                })),
            }))),
            "decision to state": sh.prop(sh.t.list(sh.t.group({
                "decision index": sh.prop(sh.t.simple("Integer")),
                "state number": sh.prop(sh.t.simple("State Number")),
                "decision": sh.prop(sh.t.simple("Integer")),
                "non greedy": sh.prop(sh.t.simple("boolean")),
            }))),
            "rule to start state": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                "rule index": sh.prop(sh.t.simple("Integer")),
                "start state number": sh.prop(sh.t.simple("State Number")),
                "rule name": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })))),
            "rule to stop state": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                "rule index": sh.prop(sh.t.simple("Integer")),
                "stop state number": sh.prop(sh.t.simple("State Number")),
                "rule name": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })))),
            "mode name to start state": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.group({
                "state number": sh.prop(sh.t.simple("State Number")),
            })))),
            "rule to token type": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                "rule index": sh.prop(sh.t.simple("Integer")),
                "token type": sh.prop(sh.t.simple("Integer")),
                "rule name": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })))),
            "lexer actions": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                "action index": sh.prop(sh.t.simple("Integer")),
                "action type": sh.prop(sh.t.text_global("Text Value")),
                "is position dependent": sh.prop(sh.t.simple("boolean")),
                "channel": sh.prop(sh.t.optional(sh.t.simple("Integer"))),
                "mode": sh.prop(sh.t.optional(sh.t.simple("Integer"))),
                "type": sh.prop(sh.t.optional(sh.t.simple("Integer"))),
            })))),
        })),

        "Decision Info": sh.module_(sh.t.group({
            "decision": sh.prop(sh.t.simple("Integer")),
            "non greedy": sh.prop(sh.t.simple("boolean")),
        })),
    }
)