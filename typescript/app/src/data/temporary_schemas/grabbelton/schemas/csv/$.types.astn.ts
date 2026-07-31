
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Annotation": sh.module_(sh.t.group({
            "position": sh.prop(sh.t.simple("Natural")),
            "line": sh.prop(sh.t.simple("Natural")),
            "column": sh.prop(sh.t.simple("Natural")),
        })),

        "Data Set": sh.module_(sh.t.group({
            "lines": sh.prop(sh.t.list(sh.t.group({
                "fields": sh.prop(sh.t.list(sh.t.group({
                    "annotation": sh.prop(sh.t.component("Annotation")),
                    "value": sh.prop(sh.t.text_global("text")),
                })))
            }))),
            "ends with unterminated string": sh.prop(sh.t.simple("boolean")),
        })),
    }
)


