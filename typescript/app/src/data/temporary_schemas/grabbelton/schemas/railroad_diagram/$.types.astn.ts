
import * as sh from "lib/shorthands/schema/manual"

export const $ = sh.modules(
    {

        "Grammar": sh.module_(sh.t.group({
            "productions": sh.prop(sh.t.component("Productions")),
            //"main rule": sh.t.text_global("text")
        })),
        "Production": sh.module_(sh.t.state({
            "choice": sh.toption(sh.t.component("Choice")),
            "link": sh.toption(sh.t.text_global("url")),
        })),
        "Choice": sh.module_(sh.t.list(sh.t.component("Composite Expression"))),
        "Composite Expression": sh.module_(sh.t.state({
            "item list": sh.toption(sh.t.list(sh.t.component("Item"))),
            "special": sh.toption(sh.t.group({
                "preceding item": sh.prop(sh.t.component("Item")),
                "character": sh.prop(sh.t.state({
                    "minus": sh.toption(sh.t.nothing()), //matches any string that matches the preceding item, but does not the succeeding item
                    "double star": sh.toption(sh.t.nothing()), //shorthand: 'A ** B' becomes '(A ( B A )* )?'
                    "double plus": sh.toption(sh.t.nothing()), //shorthand: 'A ++ B' becomes 'A ( B A )*'
                })),
                "succeeding item": sh.prop(sh.t.component("Item")),
            })),
        })),
        "Item": sh.module_(sh.t.group({
            "primary": sh.prop(sh.t.component("Primary")),
            "occurence": sh.prop(sh.t.state({
                "once": sh.toption(sh.t.nothing()),
                "zero or more": sh.toption(sh.t.nothing()),
                "one or more": sh.toption(sh.t.nothing()),
                "optional": sh.toption(sh.t.nothing()),
            })),
        })),
        "Primary": sh.module_(sh.t.state({
            // "reference": sh.t.reference("Productions", []), FIXME: make schema constrained first
            "literal": sh.toption(sh.t.text_global("text")),
            "character code": sh.toption(sh.t.simple("Natural")),
            // "character class": sh.t.group({
            //     "negated": sh.t.boolean(),
            //     "type" : sh.t.state({
            //         "char": sh.t.nothing(),
            //     }),
            // }),
            "choice": sh.toption(sh.t.component("Choice")),

        })),
        "Productions": sh.module_(sh.t.dictionary(sh.t.component("Production"))),


    }
)


