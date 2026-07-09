
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Document": sh.module_(sh.t.group({
            "doc type": sh.prop(sh.t.optional(sh.t.group({
                "name": sh.prop(sh.t.text_global("text")),
            }))),
            "root": sh.prop(sh.t.component("Element")),
        })),

        "Element": sh.module_(sh.t.group({
            "name": sh.prop(sh.t.component("Qualified Name")),
            "attributes": sh.prop(sh.t.list(sh.t.group({
                "name": sh.prop(sh.t.component("Qualified Name")),
                "value": sh.prop(sh.t.text_global("text")),
            }))),
            "content type": sh.prop(sh.t.state({
                "empty": sh.toption(sh.t.group({})),
                "text only": sh.toption(sh.t.group({
                    "value": sh.prop(sh.t.text_global("text")),
                })),
                "mixed": sh.toption(sh.t.component("Mixed Content")),
                "nodes only": sh.toption(sh.t.group({
                    "children": sh.prop(sh.t.list(sh.t.component("Node"))),
                })),

            })),
        })),

        "Mixed Content": sh.module_(sh.t.list(sh.t.state({
            "node": sh.toption(sh.t.component("Node")),
            "text": sh.toption(sh.t.group({
                "value": sh.prop(sh.t.text_global("text")),
            })),
        }))),

        "Qualified Name": sh.module_(sh.t.group({
            "namespace prefix": sh.prop(sh.t.optional(sh.t.text_global("text"))),
            "local name": sh.prop(sh.t.text_global("text")),
        })),

        "Node": sh.module_(sh.t.state({
            "element": sh.toption(sh.t.component("Element")),
            "comment": sh.toption(sh.t.text_global("text")),
            "cdata": sh.toption(sh.t.text_global("text")),
            "processing instruction": sh.toption(sh.t.group({
                "target": sh.prop(sh.t.text_global("text")),
                "data": sh.prop(sh.t.text_global("text")),
            })),
        }))

    }
)