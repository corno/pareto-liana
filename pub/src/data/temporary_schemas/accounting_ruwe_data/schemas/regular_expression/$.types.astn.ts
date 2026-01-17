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
        "Regular Expression": type(t.group({
            "characters": prop(t.dictionary(t.number_local(n.positive_natural()))),
            "sequence": prop(t.component_cyclic("Sequence")),
        })),

        "Sequence": type(t.list(t.group({
            "type": prop(t.state_group({
                "literal": tstate(t.text_global("Text Value")),
                "character class": tstate(t.group({
                    "negated": prop(t.boolean()),
                    "ranges": prop(t.list(t.state_group({
                        "literal": tstate(t.number_global("Character")), //should be a reference to a character in the dictionary
                        "range": tstate(t.group({
                            "from": prop(t.number_global("Character")),
                            "to": prop(t.number_global("Character")),
                        })),
                    }))),
                })),
                "group": tstate(t.group({
                    "expression": prop(t.component_cyclic("Sequence")),
                })),
                "alternation": tstate(t.list(t.component_cyclic("Sequence"))),
            })),
            "quantifier": prop(t.optional(t.state_group({
                "optional": tstate(t.nothing()), // ?
                "multiple": tstate(t.nothing()), // *
                "one or more": tstate(t.nothing()), // +
                // "exact": t.number_local(n.natural()), // {n}
                // "between": t.group({
                //     "min": t.number_local(n.natural()), // {n,m}
                //     "max": t.number_local(n.natural()),
                // }),

            }))),
        }))),
    }
)


