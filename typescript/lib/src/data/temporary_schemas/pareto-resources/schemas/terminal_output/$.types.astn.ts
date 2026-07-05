
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Message": sh.module_(sh.t.group({
            "lines": sh.prop(sh.t.list(sh.t.text_global("text"))),
            "raw": sh.prop(sh.t.text_global("multi line text")),
        })),
    }
)


