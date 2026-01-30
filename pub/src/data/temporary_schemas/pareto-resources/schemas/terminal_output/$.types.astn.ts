import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Message": module_(t.group({
            "lines": prop(t.list(t.text_local(text('single line')))),
            "raw": prop(t.text_local(text('multi line'))),
        })),
    }
)


