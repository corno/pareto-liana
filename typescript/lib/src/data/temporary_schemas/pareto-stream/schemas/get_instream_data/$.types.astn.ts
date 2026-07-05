
import * as sh from "../../../../../shorthands/schema/manual.js"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.nothing()),
        
        "Result": sh.module_(sh.t.text_global("multi line text")),
    }
)


