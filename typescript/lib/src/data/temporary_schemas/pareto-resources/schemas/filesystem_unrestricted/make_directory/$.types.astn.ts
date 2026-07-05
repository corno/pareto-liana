
import * as sh from "../../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "delete existing": sh.prop(sh.t.simple("boolean")),
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
        })),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "directory already exists": sh.toption(sh.t.nothing()),
                "permission denied": sh.toption(sh.t.nothing()),
            }))
        })),

    }
)


