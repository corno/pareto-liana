
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {
        "Semantic Version": sh.module_(sh.t.group({
            "major": sh.prop(sh.t.text_global("Text Value")),
            "minor": sh.prop(sh.t.text_global("Text Value")),
            "patch": sh.prop(sh.t.text_global("Text Value")),
            "pre-release identifiers": sh.prop(sh.t.list(sh.t.component("Number or Text"))),
            "build identifiers": sh.prop(sh.t.list(sh.t.text_global("Text Value"))),
        })),
        "Number or Text": sh.module_(sh.t.state({
            "numeric": sh.toption(sh.t.text_global("Text Value")), //is this correct?
            "alphanumeric": sh.toption(sh.t.text_global("Text Value")),
        })),
    }
)


