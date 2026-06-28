
import * as sh from "../../../../../../shorthands/schema/manual"

export const $ = sh.modules(
    {

        "Document": sh.module_(sh.t.group({
            "declaration": sh.prop(sh.t.optional(sh.t.group({
                "attributes": sh.prop(sh.t.component("Attributes")),
            }))),
            "children": sh.prop(sh.t.component("Children")),
        })),
        "Attributes": sh.module_(sh.t.dictionary(sh.t.text_global("Text Value"))),
        "Children": sh.module_(sh.t.list(sh.t.state({
            "cdata": sh.toption(sh.t.text_global("Text Value")),
            "comment": sh.toption(sh.t.text_global("Text Value")),
            "element": sh.toption(sh.t.component("Element")),
            "processing instruction": sh.toption(sh.t.group({
                "target": sh.prop(sh.t.text_global("Text Value")),
                "data": sh.prop(sh.t.text_global("Text Value")),
            })),
            "text": sh.toption(sh.t.text_global("Text Value")),
            "entity reference": sh.toption(sh.t.text_global("Text Value")),
        }))),
        "Element": sh.module_(sh.t.group({
            "name": sh.prop(sh.t.text_global("Text Value")),
            "attributes": sh.prop(sh.t.component("Attributes")),
            //"mixed": sh.t.boolean(),
            "children": sh.prop(sh.t.component("Children")),
        })),
    }
)


