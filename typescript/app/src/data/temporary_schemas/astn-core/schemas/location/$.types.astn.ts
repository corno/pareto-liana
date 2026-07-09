
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Range": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.component("Location")),
            "end": sh.prop(sh.t.component("Location")),
        })),

        "Possible Range": sh.module_(sh.t.state({
            "range": sh.toption(sh.t.component("Range")),
            "end of document": sh.toption(sh.t.group({
                "end": sh.prop(sh.t.component("Location"))
            })),
        })),

        "Location": sh.module_(sh.t.group({
            "relative": sh.prop(sh.t.component("Relative Location")),
            "absolute": sh.prop(sh.t.simple("Natural")),
        })),

        "Relative Location": sh.module_(sh.t.group({
            "line": sh.prop(sh.t.simple("Natural")),
            "column": sh.prop(sh.t.simple("Natural")), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

    }
)