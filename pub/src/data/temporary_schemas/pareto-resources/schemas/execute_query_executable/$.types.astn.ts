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
            "args": prop(t.list(t.text_local(text('single line')))),
        })),

        "Error": type(t.state_group({
            "failed to spawn": tstate(t.group({
                "message": prop(t.group({
                    "lines": prop(t.list(t.text_local(text('single line')))),
                    "raw": prop(t.text_local(text('multi line'))),
                })),
            })),
            "non zero exit code": tstate(t.group({
                "exit code": prop(t.optional(t.number_local(n.integer()))),
                "stderr": prop(t.group({
                    "lines": prop(t.list(t.text_local(text('single line')))),
                    "raw": prop(t.text_local(text('multi line'))),
                })),
            })),
        })),

        "Result": type(t.group({
            "stdout": prop(t.group({
                "lines": prop(t.list(t.text_local(text('single line')))),
                "raw": prop(t.text_local(text('multi line'))),
            })),
        })),
    }
)


