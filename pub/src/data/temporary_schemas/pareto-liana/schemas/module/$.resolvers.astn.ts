import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, al, av, gvs, vst, ovi, state } from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {
        "Module": resolver(r.group({
            "omit (de)serializer": r.boolean(),
            "schema tree": r.component_external("schema", "Schema Tree", {}, {
                "sibling schemas": al.empty_stack(),
            }),

        })),
    })