import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Decision": type(t.group({
            "decision number": prop(t.number_local(n.integer(null))),
            "atn decision state": prop(t.number_local(n.integer(null))),
            "alternatives": prop(t.dictionary(t.group({
                "alternative number": prop(t.number_local(n.integer(null))),
                "token sets": prop(t.dictionary(t.group({
                    "context depth": prop(t.number_local(n.integer(null))),
                    "intervals": prop(t.dictionary(t.group({
                        "min": prop(t.number_local(n.integer(null))),
                        "max": prop(t.number_local(n.integer(null))),
                    }))),
                }))),
            }))),
        })),
    }
)
