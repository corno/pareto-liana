import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    text,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Parameters": module_(t.group({
            "source": prop(t.group({
                "document resource identifier": prop(t.text_global("text")),
                "tab size": prop(t.simple("Natural")),
            })),
            "target": prop(t.group({
                "indentation": prop(t.text_global("text")),
                "newline": prop(t.text_global("text")),
            })),
        })),

    }
)