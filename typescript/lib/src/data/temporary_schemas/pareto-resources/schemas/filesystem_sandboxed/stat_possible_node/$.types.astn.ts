
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.component_external("path", "Node Path")),

        "Result": sh.module_(sh.t.state({
            "does not exist": sh.toption(sh.t.nothing()),
            "file": sh.toption(sh.t.nothing()),
            "directory": sh.toption(sh.t.nothing()),
        })),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),
    }
)


