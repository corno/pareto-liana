
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Result": sh.module_(sh.t.component_external("text edits", "Text Edits")),

        "Error": sh.module_(sh.t.group({
            "message": sh.prop(sh.t.text_global("text")),
        })),

        "Parameters": sh.module_(sh.t.group({
            "options": sh.prop(sh.t.group({
                "insert spaces": sh.prop(sh.t.simple("boolean")),
                "preserve delimiters": sh.prop(sh.t.simple("boolean")),
                "preserve final newline state": sh.prop(sh.t.simple("boolean")),
                "preserve commas": sh.prop(sh.t.simple("boolean")),
                "indent string": sh.prop(sh.t.text_global("text")),
            })),
        })),

    }
)