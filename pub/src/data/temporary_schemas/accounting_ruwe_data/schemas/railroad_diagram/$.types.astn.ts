import * as _pi from 'pareto-core/dist/interface'

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

import {
    n,
    modules,
    text,
    t,
    tr,
    module_,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

export const $: g_.Modules = modules(
    {

        "Grammar": module_(t.group({
            "productions": prop(t.component("Productions")),
            //"main rule": t.text_local(text('single line'))
        })),
        "Production": module_(t.state({
            "choice": tstate(t.component("Choice")),
            "link": tstate(t.text_global("url")),
        })),
        "Choice": module_(t.list(t.component("Composite Expression"))),
        "Composite Expression": module_(t.state({
            "item list": tstate(t.list(t.component("Item"))),
            "special": tstate(t.group({
                "preceding item": prop(t.component("Item")),
                "character": prop(t.state({
                    "minus": tstate(t.nothing()), //matches any string that matches the preceding item, but does not the succeeding item
                    "double star": tstate(t.nothing()), //shorthand: 'A ** B' becomes '(A ( B A )* )?'
                    "double plus": tstate(t.nothing()), //shorthand: 'A ++ B' becomes 'A ( B A )*'
                })),
                "succeeding item": prop(t.component("Item")),
            })),
        })),
        "Item": module_(t.group({
            "primary": prop(t.component("Primary")),
            "occurence": prop(t.state({
                "once": tstate(t.nothing()),
                "zero or more": tstate(t.nothing()),
                "one or more": tstate(t.nothing()),
                "optional": tstate(t.nothing()),
            })),
        })),
        "Primary": module_(t.state({
            // "reference": t.reference("Productions", []), FIXME: make schema constrained first
            "literal": tstate(t.text_local(text('single line'))),
            "character code": tstate(t.number_local(n.natural(null))),
            // "character class": t.group({
            //     "negated": t.boolean(),
            //     "type" : t.state({
            //         "char": t.nothing(),
            //     }),
            // }),
            "choice": tstate(t.component_cyclic("Choice")),

        })),
        "Productions": module_(t.dictionary(t.component_cyclic("Production"))),


    }
)


