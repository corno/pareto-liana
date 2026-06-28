
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Graph": sh.module_(sh.t.group({
            "attributes": sh.prop(sh.t.component_external("attributes", "Attributes")),
            "nodes": sh.prop(sh.t.dictionary(sh.t.group({
                "attributes": sh.prop(sh.t.component_external("attributes", "Attributes"))
            }))),
            "edges": sh.prop(sh.t.list(sh.t.group({
                "from": sh.prop(sh.t.text_global("text")),
                "to": sh.prop(sh.t.text_global("text")),
                "attributes": sh.prop(sh.t.component_external("attributes", "Attributes"))
            }))),
        })),
    }
)
