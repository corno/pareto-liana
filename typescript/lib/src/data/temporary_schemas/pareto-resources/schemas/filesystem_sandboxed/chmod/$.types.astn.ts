import * as p_di from 'pareto-core/dist/data/interface'

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
            "path": prop(t.component_external("path", "Node Path")),
            "mode": prop(t.group({
                "owner": prop(t.component("Permissions")),
                "group": prop(t.component("Permissions")),
                "others": prop(t.component("Permissions")),
                "special bits": prop(t.optional(t.group({
                    "setuid": prop(t.simple("boolean")),
                    "setgid": prop(t.simple("boolean")),
                    "sticky": prop(t.simple("boolean")),
                }))),
            })),
        })),

        "Permissions": module_(t.group({
            "read": prop(t.simple("boolean")),
            "write": prop(t.simple("boolean")),
            "execute": prop(t.simple("boolean")),
        })),

        "Error": module_(t.component_external("unrestricted", "Error")),
    }
)


