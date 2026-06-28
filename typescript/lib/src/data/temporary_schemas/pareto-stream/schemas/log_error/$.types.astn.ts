
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "message": sh.prop(sh.t.component_external("fountain pen", "Paragraph")),
        })),

        "Error": sh.module_(sh.t.nothing()) //I'm not aware of any errors that could occur at this time
        
    }
)


