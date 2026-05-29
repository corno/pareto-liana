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

        "Directory": module_(t.state({
            "dictionary": toption(t.component("Directory")),
            "group": toption(t.dictionary(t.state({
                "directory": toption(t.component("Directory")),
                "file": toption(t.state({
                    "manual": toption(t.nothing()),
                    "generated": toption(t.group({
                        "commit to git": prop(t.simple("boolean"))
                    })),
                })),
            }))),
            "wildcards": toption(t.group({
                "required directories": prop(t.simple("Natural")),
                "additional directories allowed": prop(t.simple("boolean")),
                "extensions": prop(t.list(t.text_global("text"))),
                "warn": prop(t.simple("boolean")),
            })),
            "freeform": toption(t.nothing()),
            "ignore": toption(t.nothing()),
            "generated": toption(t.group({
                "commit to git": prop(t.simple("boolean"))
            })),
        })),
    }
)
