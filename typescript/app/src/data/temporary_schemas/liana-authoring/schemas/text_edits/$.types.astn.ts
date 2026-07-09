
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Text Edits": sh.module_(sh.t.list(sh.t.state({
            "replace": sh.toption(sh.t.group({
                "range": sh.prop(sh.t.component_external("location", "Range")),
                "text": sh.prop(sh.t.text_global("multi line text")),
            })),
            "delete": sh.toption(sh.t.group({
                "range": sh.prop(sh.t.component_external("location", "Range")),
            })),
            "insert": sh.toption(sh.t.group({
                "location": sh.prop(sh.t.component_external("location", "Location")),
                "text": sh.prop(sh.t.text_global("multi line text")),
            })),
        }))),

    }
)