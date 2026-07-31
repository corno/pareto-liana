
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.component_external("path", "Node Path")),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "file does not exist": sh.toption(sh.t.nothing()),
                "node is not a file": sh.toption(sh.t.nothing()),
                "permission denied": sh.toption(sh.t.nothing()),
                "file too large": sh.toption(sh.t.nothing()),
                "device not ready": sh.toption(sh.t.nothing()),
            }))
        })),

        "Result": sh.module_(sh.t.component_external("list of characters", "List of Characters")),

    }
)


