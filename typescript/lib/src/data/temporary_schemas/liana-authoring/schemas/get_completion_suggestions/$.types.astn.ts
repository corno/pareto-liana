

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Result": module_(t.group({
            "completion suggestions": prop(t.component_external("completion suggestions", "Completion Suggestions")),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_global("multi line text")),
            "source": prop(t.group({
                "file path": prop(t.component_external("path unrestricted", "Node Path")),
                "tab size": prop(t.simple("Natural")),
            })),
            "position": prop(t.component_external("location", "Position")),
            "indent": prop(t.text_global("text")),
        })),

    }
)