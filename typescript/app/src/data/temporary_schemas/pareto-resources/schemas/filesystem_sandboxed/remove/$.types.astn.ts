
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Context Path")),
            "error if not exists": sh.prop(sh.t.simple("boolean")),
        })),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),
        
    }
)


