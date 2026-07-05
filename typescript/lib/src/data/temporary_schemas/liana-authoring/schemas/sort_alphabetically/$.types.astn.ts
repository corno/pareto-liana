
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Sort Parameters": sh.module_(sh.t.group({
            "position": sh.prop(sh.t.component_external("location", "Position")),
        })),

    }
)