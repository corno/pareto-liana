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

        "Result": module_(t.text_local(text('single line'))),

        // "Error": module_(t.state({

        // })),

        "Parameters": module_(t.group({
            "content": prop(t.text_local(text('multi line'))),
        })),

    }
)