
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Node Path": sh.module_(sh.t.group({
            "context": sh.prop(sh.t.component("Context Path")),
            "node": sh.prop(sh.t.text_global("text")),
        })),

        "Context Path": sh.module_(sh.t.group({
            "start": sh.prop(sh.t.nothing()), //to make sure it is not castable to a unrestricted context path
            "subpath": sh.prop(sh.t.component("Context Subpath")),
        })),

        "Context Subpath": sh.module_(sh.t.list(sh.t.text_global("text"))),

    }
)


