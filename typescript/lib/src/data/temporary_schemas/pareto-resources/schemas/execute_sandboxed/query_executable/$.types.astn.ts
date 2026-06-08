import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../../shorthands/schema"


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "args": prop(t.list(t.text_global("text"))),
            "working directory": prop(t.optional(t.component_external("path", "Context Path"))),
        })),

        "Error": module_(t.state({
            "failed to spawn": toption(t.group({
                "message": prop(t.component_external("terminal output", "Message")),
            })),
            "non zero exit code": toption(t.group({
                "exit code": prop(t.optional(t.simple("Integer"))),
                "stderr": prop(t.component_external("terminal output", "Message")),
            })),
        })),

        "Result": module_(t.group({
            "stdout": prop(t.component_external("terminal output", "Message")),
        })),
    }
)


