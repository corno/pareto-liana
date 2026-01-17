import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Parameters": type(t.group({
            "source": prop(t.component_external("path", "Node Path")),
            "target": prop(t.component_external("path", "Node Path")),
            "options": prop(t.group({
                "recursive": prop(t.optional(t.boolean())),
                "force": prop(t.optional(t.boolean())),
                "errorOnExist": prop(t.optional(t.boolean())),
            })),
        })),

        "Error": type(t.state_group({
            "source does not exist": tstate(t.nothing()),
            "node is not a file": tstate(t.nothing()),
            "permission denied": tstate(t.nothing()),
            "file too large": tstate(t.nothing()),
            "device not ready": tstate(t.nothing()),
        })),
    }
)


