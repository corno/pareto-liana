
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Document": sh.module_(sh.t.component("Value")),

        "Value": sh.module_(sh.t.state({
            "array": sh.toption(sh.t.list(sh.t.component("Value"))),
            "object": sh.toption(sh.t.list(sh.t.group({
                "key": sh.prop(sh.t.text_global("Text Value")),
                "value": sh.prop(sh.t.component("Value"))
            }))),
            "number": sh.toption(sh.t.state({
                //FIX, this should be one type, not two
                "integer": sh.toption(sh.t.simple("Integer")),
                "float": sh.toption(sh.t.simple("Approximation")),
            })),
            "string": sh.toption(sh.t.text_global("Text Value")),
            "boolean": sh.toption(sh.t.simple("boolean")),
            "null": sh.toption(sh.t.nothing()),
        })),

    }
)
