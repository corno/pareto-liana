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
        "DFA": module_(t.group({
            "decision": prop(t.simple("Integer")),
            "atn start state": prop(t.simple("State Number")),
            "is precedence dfa": prop(t.boolean()),
            "states": prop(t.list(t.group({
                "state number": prop(t.simple("Integer")),
                "is accept state": prop(t.boolean()),
                "prediction": prop(t.optional(t.simple("Integer"))),
                "requires full context": prop(t.boolean()),
                "edges": prop(t.list(t.group({
                    "symbol": prop(t.simple("Integer")),
                    "target state": prop(t.simple("Integer")),
                }))),
                "predicates": prop(t.optional(t.list(t.group({
                    "alt": prop(t.simple("Integer")),
                    "predicate": prop(t.text_global("Text Value")),
                })))),
                "configs": prop(t.optional(t.list(t.group({
                    "state": prop(t.simple("State Number")),
                    "alt": prop(t.simple("Integer")),
                    "semantic context": prop(t.optional(t.text_global("Text Value"))),
                })))),
            }))),
        })),
    }
)
