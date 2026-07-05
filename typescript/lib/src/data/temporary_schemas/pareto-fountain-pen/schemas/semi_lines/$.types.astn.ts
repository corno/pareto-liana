
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Lines": sh.module_(sh.t.list(sh.t.group({
            "text": sh.prop(sh.t.text_global("Output")),
            "indentation": sh.prop(sh.t.simple("Natural"))
        }))),
    }
)


