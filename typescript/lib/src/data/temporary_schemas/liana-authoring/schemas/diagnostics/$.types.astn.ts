
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Diagnostics": sh.module_(sh.t.list(sh.t.component("Diagnostic"))),

        "Diagnostic": sh.module_(sh.t.group({
            "severity": sh.prop(sh.t.state({
                "error": sh.toption(sh.t.nothing()),
                "warning": sh.toption(sh.t.nothing()),
                "information": sh.toption(sh.t.nothing()),
                "hint": sh.toption(sh.t.nothing()),
            })),
            "range": sh.prop(sh.t.optional(sh.t.component_external("location", "Possible Range"))), //this is optional because some diagnostics might not be related to the context file (e.g. schema files or included files)
            "message": sh.prop(sh.t.text_global("text")),
            "related information": sh.prop(sh.t.optional(sh.t.list(sh.t.group({
                "location": sh.prop(sh.t.group({
                    "file path": sh.prop(sh.t.component_external("path unrestricted", "Node Path")),
                    "range": sh.prop(sh.t.component_external("location", "Possible Range")),
                })),
                "message": sh.prop(sh.t.text_global("text")),
            })))),
            "type": sh.prop(sh.t.state({
                "semantic": sh.toption(sh.t.nothing()),
                "deserialize": sh.toption(sh.t.nothing()),
                "schema": sh.toption(sh.t.nothing()),
            }))
        })),


        //are these below still needed?
        "Result": sh.module_(sh.t.group({
            "diagnostics": sh.prop(sh.t.component("Diagnostics")),
        })),

        "Parameters": sh.module_(sh.t.group({
            "content": sh.prop(sh.t.text_global("multi line text")),
            "file path": sh.prop(sh.t.component_external("path unrestricted", "Node Path")),
            "tab size": sh.prop(sh.t.simple("Natural")),
        })),
    }
)