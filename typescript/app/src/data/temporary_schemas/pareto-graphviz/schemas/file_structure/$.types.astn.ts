
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Directory": sh.module_(sh.t.dictionary(
            sh.t.state({
                "file": sh.toption(sh.t.component_external("high level", "Graph")),
                "directory": sh.toption(sh.t.component("Directory")),
            })
        )),
    }
)
