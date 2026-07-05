
import * as sh from "../../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Node Path": sh.module_(sh.t.group({
            "context": sh.prop(sh.t.component("Context Path")),
            "node": sh.prop(sh.t.text_global("text")),
        })),

        "Context Path": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.component("Start")),
            "subpath": sh.prop(sh.t.component("Context Subpath")),
        })),

        "Context Subpath": sh.module_(sh.t.list(sh.t.text_global("text"))),

        "Start": sh.module_(sh.t.state({
            "absolute": sh.toption(sh.t.nothing()),
            "relative": sh.toption(sh.t.group({
                "up steps": sh.prop(sh.t.component("Up Steps")),
            })),
        })),

        "Up Steps": sh.module_(sh.t.simple("Natural")),
        
    }
)


