
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.component_external("path", "Node Path")),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "unknown": sh.toption(sh.t.nothing()), //FIX this
            }))
        })),

        "Result": sh.module_(sh.t.component("Node Type")),

        "Node Type": sh.module_(sh.t.state({
            "does not exist": sh.toption(sh.t.nothing()),
            "file": sh.toption(sh.t.nothing()),
            "directory": sh.toption(sh.t.nothing()),
        })),
    }
)


