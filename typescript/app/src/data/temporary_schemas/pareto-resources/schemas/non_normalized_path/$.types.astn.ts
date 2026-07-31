
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {

        "Non Normalized Path": sh.module_(sh.t.group({
            "leading slash": sh.prop(sh.t.simple("boolean")),
            "segments": sh.prop(sh.t.list(sh.t.state({
                "parent": sh.toption(sh.t.nothing()),
                "child": sh.toption(sh.t.text_global("text")),
                "current": sh.toption(sh.t.nothing()),
                "nothing": sh.toption(sh.t.nothing()),
            }))),
            "trailing slash": sh.prop(sh.t.simple("boolean")),
        }))
    }
)


