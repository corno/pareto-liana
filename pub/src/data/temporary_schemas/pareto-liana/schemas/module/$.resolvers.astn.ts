import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, al, av, gvs, vst, ovi, state } from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {
        "Operations": resolver(r.dictionary(r.state_group({
            "operation": state(r.group({
                "type parameters": r.component_external("schema", "Type Parameters", {}, {}),
                "context": r.component_external("schema", "Type Node", {
                    "globals": av.optional(ovi.not_set()),
                    "type parameters": av.required(gvs.sibling("type parameters", [vst.component()])),
                    "imports": av.optional(ovi.not_set()),
                }, {
                    "noncircular sibling types": al.not_set(),
                    "possibly circular dependent sibling types": al.not_set(),
                }),
                "parameters": r.dictionary(r.component_external("schema", "Type Node", {
                    "globals": av.optional(ovi.not_set()),
                    "type parameters": av.required(gvs.sibling("type parameters", [vst.component()])),
                    "imports": av.optional(ovi.not_set()),
                }, {
                    "noncircular sibling types": al.not_set(),
                    "possibly circular dependent sibling types": al.not_set(),
                })),
                "result": r.component_external("schema", "Type Node", {
                    "globals": av.optional(ovi.not_set()),
                    "type parameters": av.required(gvs.sibling("type parameters", [vst.component()])),
                    "imports": av.optional(ovi.not_set()),
                }, {
                    "noncircular sibling types": al.not_set(),
                    "possibly circular dependent sibling types": al.not_set(),
                }),
            })),
            "set": state(r.component("Operations", null, null))
        }))),

        "Module": resolver(r.group({
            "schema tree": r.component_external("schema", "Schema Tree", {}, {
                "sibling schemas": al.empty_stack(),
            }),
            "operations": r.component("Operations", {
                //"globals": avs.sibling("operation globals", [])
            }, {}),
        })),
    })