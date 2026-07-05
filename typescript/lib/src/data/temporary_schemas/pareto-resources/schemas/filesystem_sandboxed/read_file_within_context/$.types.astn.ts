
import * as sh from "../../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.component_external("path", "Node Path")),

        "Result": sh.module_(sh.t.component_external("list of characters", "List of Characters")),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),

    }
)


