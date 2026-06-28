
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "ID": sh.module_(sh.t.group({
            "key": sh.prop(sh.t.text_global("text")),
            "id": sh.prop(sh.t.text_global("text")),
            "source": sh.prop(sh.t.optional(sh.t.component_external("location", "Range"))),
        })),
        "Raw Reference": sh.module_(sh.t.group({
            "resolveInfo": sh.prop(sh.t.text_global("text")),
            "reference": sh.prop(sh.t.optional(sh.t.text_global("text"))),
        })),
        "Singular Reference": sh.module_(sh.t.component("Raw Reference")),
        "References": sh.module_(sh.t.list(sh.t.component("Raw Reference"))),
        "Optional Reference": sh.module_(sh.t.optional(sh.t.component("Raw Reference"))),
    }
)