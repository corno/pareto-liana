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
            "program": prop(t.text_local(text('single line'))),
            "args": prop(t.list(t.text_local(text('single line')))),
        })),

        "Result": type(t.state_group({
            "success": tstate(t.group({
                "stdout": prop(t.text_local(text('multi line'))),
            })),
            "error": tstate(t.component("Error")),
        })),

        "Error": type(t.state_group({
            "failed to spawn": tstate(t.group({
                "message": prop(t.text_local(text('single line'))),
            })),
            "non zero exit code": tstate(t.group({
                "exit code": prop(t.optional(t.number_local(n.integer()))),
                "stderr": prop(t.text_local(text('multi line'))),
            })),
        })),
    }
)


