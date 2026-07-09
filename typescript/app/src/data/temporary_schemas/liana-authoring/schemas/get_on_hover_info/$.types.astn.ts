
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Result": sh.module_(sh.t.group({
            "contents": sh.prop(sh.t.group({
                "hover texts": sh.prop(sh.t.component_external("hover info", "Hover Texts")),
            })),
        })),

        "Parameters": sh.module_(sh.t.group({
            "content": sh.prop(sh.t.text_global("multi line text")),
            "source": sh.prop(sh.t.group({
                "file path": sh.prop(sh.t.component_external("path unrestricted", "Node Path")),
                "tab size": sh.prop(sh.t.simple("Natural")),
            })),
            "position": sh.prop(sh.t.component_external("location", "Position")),
        })),

    }
)