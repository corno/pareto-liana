
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Sort Parameters": sh.module_(sh.t.group({
            "position": sh.prop(sh.t.component_external("location", "Position")),
        })),

    }
)