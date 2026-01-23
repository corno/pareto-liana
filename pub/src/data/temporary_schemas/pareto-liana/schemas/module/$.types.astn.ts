import * as _pi from 'pareto-core/dist/interface'

import {
    types,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Module": type(t.group({
            "omit (de)serializer": prop(t.boolean()),
            "schema tree": prop(t.component_external("schema", "Schema Tree")),
        })),
    }
)