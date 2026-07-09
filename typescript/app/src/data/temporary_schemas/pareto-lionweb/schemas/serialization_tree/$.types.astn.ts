
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Serialization Tree": sh.module_(sh.t.group({
            "serializationFormatVersion": sh.prop(sh.t.text_global("text")),
            "languages": sh.prop(sh.t.list(sh.t.group({
                "key": sh.prop(sh.t.text_global("text")),
                "version": sh.prop(sh.t.text_global("text")),
            }))),
            "root node id": sh.prop(sh.t.text_global("text")),
            "node tree": sh.prop(sh.t.component("Node")),
        })),

        "Node": sh.module_(sh.t.group({
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "classifier": sh.prop(sh.t.text_global("text")),
            "properties": sh.prop(sh.t.dictionary(sh.t.text_global("text"))),
            "containments": sh.prop(sh.t.dictionary(sh.t.dictionary(sh.t.component("Node")))),
            "references": sh.prop(sh.t.dictionary(sh.t.component("Targets"))),
            "annotations": sh.prop(sh.t.list(sh.t.text_global("text"))),
        })),

        "Targets": sh.module_(sh.t.list(sh.t.group({
            "resolveInfo": sh.prop(sh.t.text_global("text")),
            "reference": sh.prop(sh.t.optional(sh.t.text_global("text"))),
        }))),
    }
)