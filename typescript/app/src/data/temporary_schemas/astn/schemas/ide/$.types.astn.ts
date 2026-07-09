
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Text Edits": sh.module_(sh.t.list(sh.t.state({
            "insert": sh.toption(sh.t.group({
                "location": sh.prop(sh.t.component("Relative Location")),
                "text": sh.prop(sh.t.text_global("text")),
            })),
            "replace": sh.toption(sh.t.group({
                "range": sh.prop(sh.t.component("Relative Range")),
                "text": sh.prop(sh.t.text_global("text")),
            })),
            "delete": sh.toption(sh.t.group({
                "range": sh.prop(sh.t.component("Relative Range")),
            })),
        }))),

        "Relative Range": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.component("Relative Location")),
            "end": sh.prop(sh.t.component("Relative Location")),
        })),

        "ID Value Pairs To Be Sorted": sh.module_(sh.t.dictionary(sh.t.text_global("text"))),

        "Relative Location": sh.module_(sh.t.group({
            "line": sh.prop(sh.t.simple("Natural")),
            "column": sh.prop(sh.t.simple("Natural")), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    },
)


