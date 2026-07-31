
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Result": sh.module_(sh.t.text_global("text")),

        // "Error": sh.module_(sh.t.state({

        // })),

        "Parameters": sh.module_(sh.t.group({
            "content": sh.prop(sh.t.text_global("multi line text")),
            "source": sh.prop(sh.t.group({
                "file path": sh.prop(sh.t.component_external("path unrestricted", "Node Path")),
                "tab size": sh.prop(sh.t.simple("Natural")),
            })),
            "target": sh.prop(sh.t.group({
                "indentation": sh.prop(sh.t.text_global("text")),
                "newline": sh.prop(sh.t.text_global("text")),
            })),
        })),

    }
)