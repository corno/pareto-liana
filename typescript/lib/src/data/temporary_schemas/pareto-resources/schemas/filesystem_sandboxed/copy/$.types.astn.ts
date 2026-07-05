
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

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),
        
    }
)


