
import * as sh from "../../../../../../shorthands/schema/manual"


export const $ = sh.modules(
    {
        "Parameters": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "mode": sh.prop(sh.t.group({
                "owner": sh.prop(sh.t.component("Permissions")),
                "group": sh.prop(sh.t.component("Permissions")),
                "others": sh.prop(sh.t.component("Permissions")),
                "special bits": sh.prop(sh.t.optional(sh.t.group({
                    "setuid": sh.prop(sh.t.simple("boolean")),
                    "setgid": sh.prop(sh.t.simple("boolean")),
                    "sticky": sh.prop(sh.t.simple("boolean")),
                }))),
            })),
        })),

        "Permissions": sh.module_(sh.t.group({
            "read": sh.prop(sh.t.simple("boolean")),
            "write": sh.prop(sh.t.simple("boolean")),
            "execute": sh.prop(sh.t.simple("boolean")),
        })),

        "Error": sh.module_(sh.t.group({
            "path": sh.prop(sh.t.component_external("path", "Node Path")),
            "type": sh.prop(sh.t.state({
                "path does not exist": sh.toption(sh.t.nothing()),
                "permission denied": sh.toption(sh.t.nothing()),
                "invalid mode": sh.toption(sh.t.nothing()),
            }))
        })),
    }
)


