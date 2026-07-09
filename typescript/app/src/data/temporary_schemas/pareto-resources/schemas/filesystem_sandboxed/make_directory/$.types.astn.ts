
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "delete existing": sh.prop(sh.t.simple("boolean")),
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
        })),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),

    }
)


