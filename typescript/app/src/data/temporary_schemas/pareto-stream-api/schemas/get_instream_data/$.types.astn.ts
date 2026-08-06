
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.nothing()),
        
        "Result": sh.module_(sh.t.text_global("multi line text")),
    }
)


