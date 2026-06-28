
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Document": sh.module_(sh.t.component("Value")),

        "Value": sh.module_(sh.t.state({
            "list": sh.toption(sh.t.list(sh.t.component("Value"))),
            "dictionary": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            "group": sh.toption(sh.t.state({
                "verbose": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            })),
            "nothing": sh.toption(sh.t.nothing()),
            "optional": sh.toption(sh.t.state({
                "not set": sh.toption(sh.t.nothing()),
                "set": sh.toption(sh.t.component("Value")),
            })),
            "state": sh.toption(sh.t.group({
                "option": sh.prop(sh.t.text_global("Text Value")),
                "value": sh.prop(sh.t.component("Value"))
            })),
            "text": sh.toption(sh.t.group({
                "value": sh.prop(sh.t.text_global("Text Value")),
                "delimiter": sh.prop(sh.t.state({
                    "none": sh.toption(sh.t.nothing()),
                    "quote": sh.toption(sh.t.nothing()),
                    "apostrophe": sh.toption(sh.t.nothing()),
                })),
            })),
        })),
    }
)


