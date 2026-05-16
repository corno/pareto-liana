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


export const $ = modules(
    {
        "Parameters": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "mode": prop(t.group({
                "owner": prop(t.component("Permissions")),
                "group": prop(t.component("Permissions")),
                "others": prop(t.component("Permissions")),
                "special bits": prop(t.optional(t.group({
                    "setuid": prop(t.simple_boolean()),
                    "setgid": prop(t.simple_boolean()),
                    "sticky": prop(t.simple_boolean()),
                }))),
            })),
        })),

        "Permissions": module_(t.group({
            "read": prop(t.simple_boolean()),
            "write": prop(t.simple_boolean()),
            "execute": prop(t.simple_boolean()),
        })),

        "Error": module_(t.group({
            "path": prop(t.component_external("path", "Node Path")),
            "type": prop(t.state({
                "path does not exist": toption(t.nothing()),
                "permission denied": toption(t.nothing()),
                "invalid mode": toption(t.nothing()),
            }))
        })),
    }
)


