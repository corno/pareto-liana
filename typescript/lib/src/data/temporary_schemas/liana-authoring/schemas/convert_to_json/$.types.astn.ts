
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Parameters": sh.module_(sh.t.group({
            "source": sh.prop(sh.t.group({
                "document resource identifier": sh.prop(sh.t.text_global("text")),
                "tab size": sh.prop(sh.t.simple("Natural")),
            })),
            "target": sh.prop(sh.t.group({
                "indentation": sh.prop(sh.t.text_global("text")),
                "newline": sh.prop(sh.t.text_global("text")),
            })),
        })),

    }
)