import * as p_di from 'pareto-core/dist/data/interface'

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
        "Diagnostics": module_(t.list(t.component("Diagnostic"))),

        "Diagnostic": module_(t.group({
            "severity": prop(t.state({
                "error": toption(t.nothing()),
                "warning": toption(t.nothing()),
                "information": toption(t.nothing()),
                "hint": toption(t.nothing()),
            })),
            "range": prop(t.optional(t.component_external("location", "Possible Range"))), //this is optional because some diagnostics might not be related to the context file (e.g. schema files or included files)
            "message": prop(t.text_global("text")),
            "related information": prop(t.optional(t.list(t.group({
                "location": prop(t.group({
                    "file path": prop(t.component_external("path unrestricted", "Node Path")),
                    "range": prop(t.component_external("location", "Possible Range")),
                })),
                "message": prop(t.text_global("text")),
            })))),
            "type": prop(t.state({
                "semantic": toption(t.nothing()),
                "deserialize": toption(t.nothing()),
                "schema": toption(t.nothing()),
            }))
        })),


        //are these below still needed?
        "Result": module_(t.group({
            "diagnostics": prop(t.component("Diagnostics")),
        })),

        "Parameters": module_(t.group({
            "content": prop(t.text_global("multi line text")),
            "file path": prop(t.component_external("path unrestricted", "Node Path")),
            "tab size": prop(t.simple("Natural")),
        })),
    }
)