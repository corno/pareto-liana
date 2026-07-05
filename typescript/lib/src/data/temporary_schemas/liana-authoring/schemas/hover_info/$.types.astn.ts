
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {

        "Hover Texts": sh.module_(sh.t.list(sh.t.text_global("text"))),

    }
)