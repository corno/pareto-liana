import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Module": module_(t.group({
            "omit (de)serializer": prop(t.boolean()),
            "schema tree": prop(t.component_external("schema", "Schema Tree")),
        })),
    }
)