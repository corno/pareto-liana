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

        "Directory": type(t.state_group({
            "dictionary": tstate(t.component_cyclic("Directory")),
            "group": tstate(t.dictionary(t.state_group({
                "directory": tstate(t.component_cyclic("Directory")),
                "file": tstate(t.state_group({
                    "manual": tstate(t.nothing()),
                    "generated": tstate(t.group({
                        "commit to git": prop(t.boolean())
                    })),
                })),
            }))),
            "wildcards": tstate(t.group({
                "required directories": prop(t.number_local(n.natural())),
                "additional directories allowed": prop(t.boolean()),
                "extensions": prop(t.list(t.text_local(text('single line')))),
                "warn": prop(t.boolean()),
            })),
            "freeform": tstate(t.nothing()),
            "ignore": tstate(t.nothing()),
            "generated": prop(t.group({
                "commit to git": prop(t.boolean())
            })),
        })),
    }
)
