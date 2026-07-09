
import * as sh from "lib/shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "args": sh.prop(sh.t.list(sh.t.text_global("text"))),
            "working directory": sh.prop(sh.t.optional(sh.t.component_external("path", "Context Path"))),
        })),

        "Error": sh.module_(sh.t.state({
            "failed to spawn": sh.toption(sh.t.group({
                "message": sh.prop(sh.t.component_external("terminal output", "Message")),
            })),
            "non zero exit code": sh.toption(sh.t.group({
                "exit code": sh.prop(sh.t.optional(sh.t.simple("Integer"))),
                "stderr": sh.prop(sh.t.component_external("terminal output", "Message")),
            })),
        })),

        "Result": sh.module_(sh.t.group({
            "stdout": sh.prop(sh.t.component_external("terminal output", "Message")),
        })),
    }
)


