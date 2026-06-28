
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.nothing()),

        "Result": sh.module_(sh.t.component_external("list of characters", "List of Characters")),

        "Error": sh.module_(sh.t.component_external("unrestricted", "Error")),

    }
)


