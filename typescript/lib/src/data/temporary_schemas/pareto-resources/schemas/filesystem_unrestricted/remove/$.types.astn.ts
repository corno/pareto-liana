
import * as sh from "../../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Context Path")),
            "error if not exists": sh.prop(sh.t.simple("boolean")),
        })),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Context Path")),
            "type": sh.prop(sh.t.state({
                "node does not exist": sh.toption(sh.t.nothing()),
                "permission denied": sh.toption(sh.t.nothing()),
            }))
        })),
    }
)


