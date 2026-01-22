import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Parameters": type(t.group({
            "program": prop(t.text_local(text('single line'))),
            "args": prop(t.list(t.text_local(text('single line')))),
        })),

        "Error": type(t.state_group({
            "failed to spawn": tstate(t.group({
                "message": prop(t.component_external("terminal output", "Message")),
            })),
            "non zero exit code": tstate(t.group({
                "exit code": prop(t.optional(t.number_local(n.integer()))),
                "stderr": prop(t.component_external("terminal output", "Message")),
            })),
        })),
    }
)


