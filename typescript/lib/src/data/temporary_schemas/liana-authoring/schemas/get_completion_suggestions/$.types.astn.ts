
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Result": sh.module_(sh.t.group({
            "completion suggestions": sh.prop(sh.t.component_external("completion suggestions", "Completion Suggestions")),
        })),

        "Parameters": sh.module_(sh.t.group({
            "content": sh.prop(sh.t.text_global("multi line text")),
            "source": sh.prop(sh.t.group({
                "file path": sh.prop(sh.t.component_external("path unrestricted", "Node Path")),
                "tab size": sh.prop(sh.t.simple("Natural")),
            })),
            "position": sh.prop(sh.t.component_external("location", "Position")),
            "indent": sh.prop(sh.t.text_global("text")),
        })),

    }
)