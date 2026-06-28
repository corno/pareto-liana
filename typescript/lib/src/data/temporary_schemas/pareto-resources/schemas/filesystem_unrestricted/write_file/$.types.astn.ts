
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "data": sh.prop(sh.t.component_external("list of characters", "List of Characters")),
        })),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "permission denied": sh.toption(sh.t.nothing()),
            }))
        })),
    }
)


