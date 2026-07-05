
import * as sh from "../../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "source": sh.prop(sh.t.component_external("path", "Node Path")),
            "target": sh.prop(sh.t.component_external("path", "Node Path")),
            "options": sh.prop(sh.t.group({
                "recursive": sh.prop(sh.t.simple("boolean")),
                "force": sh.prop(sh.t.simple("boolean")),
                "errorOnExist": sh.prop(sh.t.simple("boolean")),
            })),
        })),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "source does not exist": sh.toption(sh.t.nothing()),
                "node is not a file": sh.toption(sh.t.nothing()),
                "permission denied": sh.toption(sh.t.nothing()),
                "file too large": sh.toption(sh.t.nothing()),
                "device not ready": sh.toption(sh.t.nothing()),
            }))
        })),
    }
)


