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

        "Error": type(t.state_group({
            "failed to spawn": tstate(t.group({
                "message": prop(t.text_local(text('single line'))),
            })),
            "non zero exit code": tstate(t.group({
                "exit code": prop(t.optional(t.number_local(n.integer()))),
                "stderr": prop(t.text_local(text('multi line'))),
                /**
                 * this smelly variant provides the stdout as well, even though it should
                 * not be necessary for error handling, but there are tools that output
                 * important information to stdout even when they fail (looking at you tsc)
                 */
                "stdout": prop(t.text_local(text('multi line'))),
            })),
        })),
    }
)


