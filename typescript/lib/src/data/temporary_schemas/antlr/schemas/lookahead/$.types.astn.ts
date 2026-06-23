

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema/manual"


export const $ = modules(
    {
        "Decision": module_(t.group({
            "decision number": prop(t.simple("Integer")),
            "atn decision state": prop(t.simple("Integer")),
            "alternatives": prop(t.dictionary(t.group({
                "alternative number": prop(t.simple("Integer")),
                "token sets": prop(t.dictionary(t.group({
                    "context depth": prop(t.simple("Integer")),
                    "intervals": prop(t.dictionary(t.group({
                        "min": prop(t.simple("Integer")),
                        "max": prop(t.simple("Integer")),
                    }))),
                }))),
            }))),
        })),
    }
)
