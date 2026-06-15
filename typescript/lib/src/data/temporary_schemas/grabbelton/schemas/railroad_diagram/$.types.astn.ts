



import {
    n,
    modules,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"

export const $ = modules(
    {

        "Grammar": module_(t.group({
            "productions": prop(t.component("Productions")),
            //"main rule": t.text_global("text")
        })),
        "Production": module_(t.state({
            "choice": toption(t.component("Choice")),
            "link": toption(t.text_global("url")),
        })),
        "Choice": module_(t.list(t.component("Composite Expression"))),
        "Composite Expression": module_(t.state({
            "item list": toption(t.list(t.component("Item"))),
            "special": toption(t.group({
                "preceding item": prop(t.component("Item")),
                "character": prop(t.state({
                    "minus": toption(t.nothing()), //matches any string that matches the preceding item, but does not the succeeding item
                    "double star": toption(t.nothing()), //shorthand: 'A ** B' becomes '(A ( B A )* )?'
                    "double plus": toption(t.nothing()), //shorthand: 'A ++ B' becomes 'A ( B A )*'
                })),
                "succeeding item": prop(t.component("Item")),
            })),
        })),
        "Item": module_(t.group({
            "primary": prop(t.component("Primary")),
            "occurence": prop(t.state({
                "once": toption(t.nothing()),
                "zero or more": toption(t.nothing()),
                "one or more": toption(t.nothing()),
                "optional": toption(t.nothing()),
            })),
        })),
        "Primary": module_(t.state({
            // "reference": t.reference("Productions", []), FIXME: make schema constrained first
            "literal": toption(t.text_global("text")),
            "character code": toption(t.simple("Natural")),
            // "character class": t.group({
            //     "negated": t.boolean(),
            //     "type" : t.state({
            //         "char": t.nothing(),
            //     }),
            // }),
            "choice": toption(t.component("Choice")),

        })),
        "Productions": module_(t.dictionary(t.component("Production"))),


    }
)


