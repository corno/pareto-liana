import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "ATN": module_(t.group({
            "grammar name": prop(t.text_global("Text Value")),
            "grammar type": prop(t.state({
                "lexer": toption(t.nothing()),
                "parser": toption(t.nothing()),
                "unknown": toption(t.nothing()),
            })),
            "max token type": prop(t.simple("Integer")),
            "states": prop(t.list(t.group({
                "state number": prop(t.simple("State Number")),
                "type": prop(t.state({
                    "null": toption(t.nothing()),
                    "normal": toption(t.group({
                        "rule index": prop(t.simple("Integer")),
                        "transitions": prop(t.list(t.group({
                            "target": prop(t.simple("State Number")),
                            "type": prop(t.state({
                                "atom": toption(t.group({
                                    "label": prop(t.simple("Integer")),
                                })),
                                "set": toption(t.group({
                                    "set": prop(t.text_global("Text Value")),
                                })),
                                "range": toption(t.group({
                                    "from": prop(t.simple("Integer")),
                                    "to": prop(t.simple("Integer")),
                                })),
                                "rule": toption(t.group({
                                    "rule index": prop(t.simple("Integer")),
                                    "precedence": prop(t.simple("Integer")),
                                    "follow state": prop(t.optional(t.simple("State Number"))),
                                })),
                                "predicate": toption(t.group({
                                    "rule index": prop(t.simple("Integer")),
                                    "pred index": prop(t.simple("Integer")),
                                    "is ctx dependent": prop(t.simple("boolean")),
                                })),
                                "action": toption(t.group({
                                    "rule index": prop(t.simple("Integer")),
                                    "action index": prop(t.simple("Integer")),
                                    "is ctx dependent": prop(t.simple("boolean")),
                                })),
                                "epsilon": toption(t.nothing()),
                                "wildcard": toption(t.nothing()),
                                "unknown": toption(t.nothing()),
                            })),
                        }))),
                        "state type": prop(t.state({
                            "rule start": toption(t.group({
                                "is left recursive rule": prop(t.simple("boolean")),
                                "stop state number": prop(t.optional(t.simple("State Number"))),
                            })),
                            "rule stop": toption(t.nothing()),
                            "tokens start": toption(t.nothing()),
                            "plus block start": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                                "loop back state number": prop(t.optional(t.simple("State Number"))),
                            })),
                            "star block start": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "plus loopback": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "star loopback": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "loop end": toption(t.nothing()),
                            "block start": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "block end": toption(t.group({
                                "start state number": prop(t.optional(t.simple("State Number"))),
                            })),
                            "basic": toption(t.nothing()),
                            "decision": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "unknown": toption(t.nothing()),
                        })),
                    })),
                })),
            }))),
            "decision to state": prop(t.list(t.group({
                "decision index": prop(t.simple("Integer")),
                "state number": prop(t.simple("State Number")),
                "decision": prop(t.simple("Integer")),
                "non greedy": prop(t.simple("boolean")),
            }))),
            "rule to start state": prop(t.optional(t.list(t.group({
                "rule index": prop(t.simple("Integer")),
                "start state number": prop(t.simple("State Number")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "rule to stop state": prop(t.optional(t.list(t.group({
                "rule index": prop(t.simple("Integer")),
                "stop state number": prop(t.simple("State Number")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "mode name to start state": prop(t.optional(t.dictionary(t.group({
                "state number": prop(t.simple("State Number")),
            })))),
            "rule to token type": prop(t.optional(t.list(t.group({
                "rule index": prop(t.simple("Integer")),
                "token type": prop(t.simple("Integer")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "lexer actions": prop(t.optional(t.list(t.group({
                "action index": prop(t.simple("Integer")),
                "action type": prop(t.text_global("Text Value")),
                "is position dependent": prop(t.simple("boolean")),
                "channel": prop(t.optional(t.simple("Integer"))),
                "mode": prop(t.optional(t.simple("Integer"))),
                "type": prop(t.optional(t.simple("Integer"))),
            })))),
        })),

        "Decision Info": module_(t.group({
            "decision": prop(t.simple("Integer")),
            "non greedy": prop(t.simple("boolean")),
        })),
    }
)