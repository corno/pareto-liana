
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Position": sh.module_(sh.t.group({
            "line": sh.prop(sh.t.simple("Natural")),
            "character": sh.prop(sh.t.simple("Natural")),
        })),

        "Range FE": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.component("Position")),
            "end": sh.prop(sh.t.component("Position")),
        })),

    }
)