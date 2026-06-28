
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "DFA": sh.module_(sh.t.group({
            "decision": sh.prop(sh.t.simple("Integer")),
            "atn start state": sh.prop(sh.t.simple("State Number")),
            "is precedence dfa": sh.prop(sh.t.simple("boolean")),
            "states": sh.prop(sh.t.list(sh.t.group({
                "state number": sh.prop(sh.t.simple("Integer")),
                "is accept state": sh.prop(sh.t.simple("boolean")),
                "prediction": sh.prop(sh.t.optional(sh.t.simple("Integer"))),
                "requires full context": sh.prop(sh.t.simple("boolean")),
                "edges": sh.prop(sh.t.list(sh.t.group({
                    "symbol": sh.prop(sh.t.simple("Integer")),
                    "target state": sh.prop(sh.t.simple("Integer")),
                }))),
                "predicates": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                    "alt": sh.prop(sh.t.simple("Integer")),
                    "predicate": sh.prop(sh.t.text_global("Text Value")),
                })))),
                "configs": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                    "state": sh.prop(sh.t.simple("State Number")),
                    "alt": sh.prop(sh.t.simple("Integer")),
                    "semantic context": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
                })))),
            }))),
        })),
    }
)
