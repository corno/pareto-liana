import * as sh from "../../../../../shorthands/schema"

export const $ = sh.modules(
    {
        "Lines": sh.module_(sh.t.list(sh.t.text_global("Output"))),
    }
)


