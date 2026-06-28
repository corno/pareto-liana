
import * as sh from "../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {

        "Completion Suggestions": sh.module_(sh.t.optional(sh.t.group({
            "type": sh.prop(sh.t.state({
                "missing value": sh.toption(sh.t.nothing()),
                "missing option": sh.toption(sh.t.nothing()),
                "reference": sh.toption(sh.t.nothing()),
                "property name": sh.toption(sh.t.nothing()),
                "option name": sh.toption(sh.t.nothing()),
            })),
            "suggestions": sh.prop(sh.t.list(sh.t.group({
                "label": sh.prop(sh.t.text_global("text")),
                "insert text": sh.prop(sh.t.text_global("text")),
                "documentation": sh.prop(sh.t.text_global("multi line text")),
            })))
        }))),

    }
)