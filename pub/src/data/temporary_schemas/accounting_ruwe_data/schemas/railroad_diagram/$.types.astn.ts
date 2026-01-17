import * as _pi from 'pareto-core-interface'

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

import {
    n,
    types,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

export const $: g_.Types = types(
    {

        "Grammar": type(t.group({
            "productions": prop(t.component("Productions")),
            //"main rule": t.text_local(text('single line'))
        })),
        "Production": type(t.state_group({
            "choice": tstate(t.component("Choice")),
            "link": tstate(t.text_global("url")),
        })),
        "Choice": type(t.list(t.component("Composite Expression"))),
        "Composite Expression": type(t.state_group({
            "item list": tstate(t.list(t.component("Item"))),
            "special": tstate(t.group({
                "preceding item": prop(t.component("Item")),
                "character": prop(t.state_group({
                    "minus": tstate(t.nothing()), //matches any string that matches the preceding item, but does not the succeeding item
                    "double star": tstate(t.nothing()), //shorthand: 'A ** B' becomes '(A ( B A )* )?'
                    "double plus": tstate(t.nothing()), //shorthand: 'A ++ B' becomes 'A ( B A )*'
                })),
                "succeeding item": prop(t.component("Item")),
            })),
        })),
        "Item": type(t.group({
            "primary": prop(t.component("Primary")),
            "occurence": prop(t.state_group({
                "once": tstate(t.nothing()),
                "zero or more": tstate(t.nothing()),
                "one or more": tstate(t.nothing()),
                "optional": tstate(t.nothing()),
            })),
        })),
        "Primary": type(t.state_group({
            // "reference": t.reference("Productions", []), FIXME: make schema constrained first
            "literal": tstate(t.text_local(text('single line'))),
            "character code": tstate(t.number_local(n.natural())),
            // "character class": t.group({
            //     "negated": t.boolean(),
            //     "type" : t.state_group({
            //         "char": t.nothing(),
            //     }),
            // }),
            "choice": tstate(t.component_cyclic("Choice")),

        })),
        "Productions": type(t.dictionary(t.component_cyclic("Production"))),


    }
)


