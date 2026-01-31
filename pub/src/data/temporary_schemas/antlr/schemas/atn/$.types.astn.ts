import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "ATN": module_(t.group({
            "grammar name": prop(t.text_global("Text Value")),
            "grammar type": prop(t.state({
                "lexer": toption(t.nothing()),
                "parser": toption(t.nothing()),
                "unknown": toption(t.nothing()),
            })),
            "max token type": prop(t.number_global("Integer")),
            "states": prop(t.list(t.group({
                "state number": prop(t.number_global("State Number")),
                "type": prop(t.state({
                    "null": toption(t.nothing()),
                    "normal": toption(t.group({
                        "rule index": prop(t.number_global("Integer")),
                        "transitions": prop(t.list(t.group({
                            "target": prop(t.number_global("State Number")),
                            "type": prop(t.state({
                                "atom": toption(t.group({
                                    "label": prop(t.number_global("Integer")),
                                })),
                                "set": toption(t.group({
                                    "set": prop(t.text_global("Text Value")),
                                })),
                                "range": toption(t.group({
                                    "from": prop(t.number_global("Integer")),
                                    "to": prop(t.number_global("Integer")),
                                })),
                                "rule": toption(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "precedence": prop(t.number_global("Integer")),
                                    "follow state": prop(t.optional(t.number_global("State Number"))),
                                })),
                                "predicate": toption(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "pred index": prop(t.number_global("Integer")),
                                    "is ctx dependent": prop(t.boolean()),
                                })),
                                "action": toption(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "action index": prop(t.number_global("Integer")),
                                    "is ctx dependent": prop(t.boolean()),
                                })),
                                "epsilon": toption(t.nothing()),
                                "wildcard": toption(t.nothing()),
                                "unknown": toption(t.nothing()),
                            })),
                        }))),
                        "state type": prop(t.state({
                            "rule start": toption(t.group({
                                "is left recursive rule": prop(t.boolean()),
                                "stop state number": prop(t.optional(t.number_global("State Number"))),
                            })),
                            "rule stop": toption(t.nothing()),
                            "tokens start": toption(t.nothing()),
                            "plus block start": toption(t.group({
                                "decision info": prop(t.component("Decision Info")),
                                "loop back state number": prop(t.optional(t.number_global("State Number"))),
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
                                "start state number": prop(t.optional(t.number_global("State Number"))),
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
                "decision index": prop(t.number_global("Integer")),
                "state number": prop(t.number_global("State Number")),
                "decision": prop(t.number_global("Integer")),
                "non greedy": prop(t.boolean()),
            }))),
            "rule to start state": prop(t.optional(t.list(t.group({
                "rule index": prop(t.number_global("Integer")),
                "start state number": prop(t.number_global("State Number")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "rule to stop state": prop(t.optional(t.list(t.group({
                "rule index": prop(t.number_global("Integer")),
                "stop state number": prop(t.number_global("State Number")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "mode name to start state": prop(t.optional(t.dictionary(t.group({
                "state number": prop(t.number_global("State Number")),
            })))),
            "rule to token type": prop(t.optional(t.list(t.group({
                "rule index": prop(t.number_global("Integer")),
                "token type": prop(t.number_global("Integer")),
                "rule name": prop(t.optional(t.text_global("Text Value"))),
            })))),
            "lexer actions": prop(t.optional(t.list(t.group({
                "action index": prop(t.number_global("Integer")),
                "action type": prop(t.text_global("Text Value")),
                "is position dependent": prop(t.boolean()),
                "channel": prop(t.optional(t.number_global("Integer"))),
                "mode": prop(t.optional(t.number_global("Integer"))),
                "type": prop(t.optional(t.number_global("Integer"))),
            })))),
        })),

        "Decision Info": module_(t.group({
            "decision": prop(t.number_global("Integer")),
            "non greedy": prop(t.boolean()),
        })),
    }
)