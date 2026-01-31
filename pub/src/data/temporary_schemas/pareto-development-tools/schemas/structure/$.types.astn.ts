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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Directory": module_(t.state({
            "dictionary": toption(t.component("Directory")),
            "group": toption(t.dictionary(t.state({
                "directory": toption(t.component("Directory")),
                "file": toption(t.state({
                    "manual": toption(t.nothing()),
                    "generated": toption(t.group({
                        "commit to git": prop(t.boolean())
                    })),
                })),
            }))),
            "wildcards": toption(t.group({
                "required directories": prop(t.number_local(n.natural(null))),
                "additional directories allowed": prop(t.boolean()),
                "extensions": prop(t.list(t.text_local(text('single line')))),
                "warn": prop(t.boolean()),
            })),
            "freeform": toption(t.nothing()),
            "ignore": toption(t.nothing()),
            "generated": toption(t.group({
                "commit to git": prop(t.boolean())
            })),
        })),
    }
)
