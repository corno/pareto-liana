import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Parameters": module_(t.group({
            "program": prop(t.text_local(text('single line'))),
            "args": prop(t.list(t.text_local(text('single line')))),
        })),

        "Result": module_(t.state({
            "success": toption(t.group({
                "stdout": prop(t.component_external("terminal output", "Message")),
            })),
            "error": toption(t.component("Error")),
        })),

        "Error": module_(t.state({
            "failed to spawn": toption(t.group({
                "message": prop(t.component_external("terminal output", "Message")),
            })),
            "non zero exit code": toption(t.group({
                "exit code": prop(t.optional(t.number_local(n.integer(null)))),
                "stderr": prop(t.component_external("terminal output", "Message")),
            })),
        })),
    }
)


