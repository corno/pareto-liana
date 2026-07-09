
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Sort Parameters": sh.module_(sh.t.group({
            "position": sh.prop(sh.t.component_external("location", "Position")),
        })),

    }
)