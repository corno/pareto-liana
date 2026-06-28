
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Regular Expression": sh.module_(sh.t.group({
            "characters": sh.prop(sh.t.dictionary(sh.t.simple("Character"))),
            "sequence": sh.prop(sh.t.component("Sequence")),
        })),

        "Sequence": sh.module_(sh.t.list(sh.t.group({
            "type": sh.prop(sh.t.state({
                "literal": sh.toption(sh.t.text_global("Text Value")),
                "character class": sh.toption(sh.t.group({
                    "negated": sh.prop(sh.t.simple("boolean")),
                    "ranges": sh.prop(sh.t.list(sh.t.state({
                        "literal": sh.toption(sh.t.simple("Character")), //should be a reference to a character in the dictionary
                        "range": sh.toption(sh.t.group({
                            "from": sh.prop(sh.t.simple("Character")),
                            "to": sh.prop(sh.t.simple("Character")),
                        })),
                    }))),
                })),
                "group": sh.toption(sh.t.group({
                    "expression": sh.prop(sh.t.component("Sequence")),
                })),
                "alternation": sh.toption(sh.t.list(sh.t.component("Sequence"))),
            })),
            "quantifier": sh.prop(sh.t.optional(sh.t.state({
                "optional": sh.toption(sh.t.nothing()), // ?
                "multiple": sh.toption(sh.t.nothing()), // *
                "one or more": sh.toption(sh.t.nothing()), // +
                // "exact": sh.t.number_local(n.natural(null)), // {n}
                // "between": sh.t.group({
                //     "min": sh.t.number_local(n.natural(null)), // {n,m}
                //     "max": sh.t.number_local(n.natural(null)),
                // }),

            }))),
        }))),
    }
)


