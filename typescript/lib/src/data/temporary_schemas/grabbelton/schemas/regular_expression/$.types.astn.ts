import * as p_di from 'pareto-core/dist/data/interface'

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
        "Regular Expression": module_(t.group({
            "characters": prop(t.dictionary(t.simple("Character"))),
            "sequence": prop(t.component("Sequence")),
        })),

        "Sequence": module_(t.list(t.group({
            "type": prop(t.state({
                "literal": toption(t.text_global("Text Value")),
                "character class": toption(t.group({
                    "negated": prop(t.simple("boolean")),
                    "ranges": prop(t.list(t.state({
                        "literal": toption(t.simple("Character")), //should be a reference to a character in the dictionary
                        "range": toption(t.group({
                            "from": prop(t.simple("Character")),
                            "to": prop(t.simple("Character")),
                        })),
                    }))),
                })),
                "group": toption(t.group({
                    "expression": prop(t.component("Sequence")),
                })),
                "alternation": toption(t.list(t.component("Sequence"))),
            })),
            "quantifier": prop(t.optional(t.state({
                "optional": toption(t.nothing()), // ?
                "multiple": toption(t.nothing()), // *
                "one or more": toption(t.nothing()), // +
                // "exact": t.number_local(n.natural(null)), // {n}
                // "between": t.group({
                //     "min": t.number_local(n.natural(null)), // {n,m}
                //     "max": t.number_local(n.natural(null)),
                // }),

            }))),
        }))),
    }
)


