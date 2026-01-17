import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "ATN": type(t.group({
            "grammar name": prop(t.text_global("Text Value")),
            "grammar type": prop(t.state_group({
                "lexer": tstate(t.nothing()),
                "parser": tstate(t.nothing()),
                "unknown": tstate(t.nothing()),
            })),
            "max token type": prop(t.number_global("Integer")),
            "states": prop(t.list(t.group({
                "state number": prop(t.number_global("State Number")),
                "type": prop(t.state_group({
                    "null": tstate(t.nothing()),
                    "normal": tstate(t.group({
                        "rule index": prop(t.number_global("Integer")),
                        "transitions": prop(t.list(t.group({
                            "target": prop(t.number_global("State Number")),
                            "type": prop(t.state_group({
                                "atom": tstate(t.group({
                                    "label": prop(t.number_global("Integer")),
                                })),
                                "set": tstate(t.group({
                                    "set": prop(t.text_global("Text Value")),
                                })),
                                "range": tstate(t.group({
                                    "from": prop(t.number_global("Integer")),
                                    "to": prop(t.number_global("Integer")),
                                })),
                                "rule": tstate(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "precedence": prop(t.number_global("Integer")),
                                    "follow state": prop(t.optional(t.number_global("State Number"))),
                                })),
                                "predicate": tstate(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "pred index": prop(t.number_global("Integer")),
                                    "is ctx dependent": prop(t.boolean()),
                                })),
                                "action": tstate(t.group({
                                    "rule index": prop(t.number_global("Integer")),
                                    "action index": prop(t.number_global("Integer")),
                                    "is ctx dependent": prop(t.boolean()),
                                })),
                                "epsilon": tstate(t.nothing()),
                                "wildcard": tstate(t.nothing()),
                                "unknown": tstate(t.nothing()),
                            })),
                        }))),
                        "state type": prop(t.state_group({
                            "rule start": tstate(t.group({
                                "is left recursive rule": prop(t.boolean()),
                                "stop state number": prop(t.optional(t.number_global("State Number"))),
                            })),
                            "rule stop": tstate(t.nothing()),
                            "tokens start": tstate(t.nothing()),
                            "plus block start": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                                "loop back state number": prop(t.optional(t.number_global("State Number"))),
                            })),
                            "star block start": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "plus loopback": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "star loopback": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "loop end": tstate(t.nothing()),
                            "block start": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "block end": tstate(t.group({
                                "start state number": prop(t.optional(t.number_global("State Number"))),
                            })),
                            "basic": tstate(t.nothing()),
                            "decision": tstate(t.group({
                                "decision info": prop(t.component("Decision Info")),
                            })),
                            "unknown": tstate(t.nothing()),
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

        "Decision Info": type(t.group({
            "decision": prop(t.number_global("Integer")),
            "non greedy": prop(t.boolean()),
        })),
    }
)