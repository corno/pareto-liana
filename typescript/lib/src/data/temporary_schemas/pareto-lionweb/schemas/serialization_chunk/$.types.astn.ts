
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        
        "Serialization Chunk": sh.module_(sh.t.group({
            "serializationFormatVersion": sh.prop(sh.t.text_global("text")),
            "languages": sh.prop(sh.t.list(sh.t.group({
                "key": sh.prop(sh.t.text_global("text")),
                "version": sh.prop(sh.t.text_global("text")),
            }))),
            "nodes": sh.prop(sh.t.list(sh.t.group({
                "id": sh.prop(sh.t.text_global("text")),
                "range": sh.prop(sh.t.component_external("location", "Range")),
                "parent": sh.prop(sh.t.optional(sh.t.text_global("text"))),
                "classifier": sh.prop(sh.t.component("Meta Pointer")),
                "properties": sh.prop(sh.t.list(sh.t.group({
                    "property": sh.prop(sh.t.component("Meta Pointer")),
                    "value": sh.prop(sh.t.text_global("text")),
                }))),
                "references": sh.prop(sh.t.list(sh.t.group({
                    "reference": sh.prop(sh.t.component("Meta Pointer")),
                    "targets": sh.prop(sh.t.component("Targets")),
                }))),
                "containments": sh.prop(sh.t.list(sh.t.group({
                    "containment": sh.prop(sh.t.component("Meta Pointer")),
                    "children": sh.prop(sh.t.list(sh.t.text_global("text"))),
                }))),
                "annotations": sh.prop(sh.t.list(sh.t.text_global("text"))),
            }))),
        })),

        "Targets": sh.module_(sh.t.list(sh.t.group({
            "resolveInfo": sh.prop(sh.t.text_global("text")),
            "reference": sh.prop(sh.t.optional(sh.t.text_global("text"))),
        }))),

        "Meta Pointer": sh.module_(sh.t.group({
            "language": sh.prop(sh.t.text_global("text")),
            "key": sh.prop(sh.t.text_global("text")),
            "version": sh.prop(sh.t.text_global("text")),
        })),
    }
)

