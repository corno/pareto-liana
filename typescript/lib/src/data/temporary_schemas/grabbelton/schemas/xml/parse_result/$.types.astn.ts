
import * as sh from "../../../../../../shorthands/schema/manual.js"

export const $ = sh.modules(
    {


        "Tokenizer Result": sh.module_(sh.t.group({
            "leading whitespace": sh.prop(sh.t.text_global("Text Value")),
            "tokens": sh.prop(sh.t.list(sh.t.component("Annotated Token"))),
        })),

        "Token": sh.module_(sh.t.state({
            "<": sh.toption(sh.t.nothing()),
            "/": sh.toption(sh.t.nothing()),
            ">": sh.toption(sh.t.nothing()),
            "/>": sh.toption(sh.t.nothing()),
            "?": sh.toption(sh.t.nothing()),
            "=": sh.toption(sh.t.nothing()),
            "string": sh.toption(sh.t.text_global("Text Value")),
            "comment": sh.toption(sh.t.text_global("Text Value")),
            "identifier": sh.toption(sh.t.text_global("Text Value")),
            "text node": sh.toption(sh.t.text_global("Text Value")),
            "invalid": sh.toption(sh.t.nothing()),

        })),

        "Annotation": sh.module_(sh.t.group({
            "position": sh.prop(sh.t.simple("Natural")),
            "line": sh.prop(sh.t.simple("Natural")),
            "column": sh.prop(sh.t.simple("Natural")),
        })),


        "Annotated Token": sh.module_(sh.t.group({
            "type": sh.prop(sh.t.component("Token")),
            "annotation": sh.prop(sh.t.component("Annotation")),
            "trailing whitespace": sh.prop(sh.t.text_global("Text Value")),
        })),

        "Document": sh.module_(sh.t.group({
            "declaration": sh.prop(sh.t.optional(sh.t.group({
                "attributes": sh.prop(sh.t.component("Attributes")),
            }))),
            "children": sh.prop(sh.t.component("Content")),
        })),
        "Attributes": sh.module_(sh.t.dictionary(sh.t.text_global("Text Value"))),
        "Content": sh.module_(sh.t.group({
            "preceding chardata": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            "nodes": sh.prop(sh.t.list(sh.t.group({
                "type": sh.prop(sh.t.state({
                    "cdata": sh.toption(sh.t.text_global("Text Value")),
                    "comment": sh.toption(sh.t.text_global("Text Value")),
                    "element": sh.toption(sh.t.component("Element")),
                    "processing instruction": sh.toption(sh.t.group({
                        "target": sh.prop(sh.t.text_global("Text Value")),
                        "data": sh.prop(sh.t.text_global("Text Value")),
                    })),
                    "entity reference": sh.toption(sh.t.text_global("Text Value")),
                })),
                "trailing chardata": sh.prop(sh.t.optional(sh.t.text_global("Text Value"))),
            })))
        })),
        "Element": sh.module_(sh.t.group({
            "name": sh.prop(sh.t.text_global("Text Value")),
            "attributes": sh.prop(sh.t.component("Attributes")),
            //"mixed": sh.t.boolean(),
            "children": sh.prop(sh.t.component("Content")),
        })),
    }
)


