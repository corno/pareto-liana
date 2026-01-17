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
        "DFA": type(t.group({
            "decision": prop(t.number_global("Integer")),
            "atn start state": prop(t.number_global("State Number")),
            "is precedence dfa": prop(t.boolean()),
            "states": prop(t.list(t.group({
                "state number": prop(t.number_global("Integer")),
                "is accept state": prop(t.boolean()),
                "prediction": prop(t.optional(t.number_global("Integer"))),
                "requires full context": prop(t.boolean()),
                "edges": prop(t.list(t.group({
                    "symbol": prop(t.number_global("Integer")),
                    "target state": prop(t.number_global("Integer")),
                }))),
                "predicates": prop(t.optional(t.list(t.group({
                    "alt": prop(t.number_global("Integer")),
                    "predicate": prop(t.text_global("Text Value")),
                })))),
                "configs": prop(t.optional(t.list(t.group({
                    "state": prop(t.number_global("State Number")),
                    "alt": prop(t.number_global("Integer")),
                    "semantic context": prop(t.optional(t.text_global("Text Value"))),
                })))),
            }))),
        })),
    }
)
