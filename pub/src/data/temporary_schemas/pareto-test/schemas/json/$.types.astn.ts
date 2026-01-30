import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Document": module_(t.component("Value")),

        "Value": module_(t.state({
            "array": tstate(t.list(t.component_cyclic("Value"))),
            "object": tstate(t.state({
                "key value array": tstate(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component_cyclic("Value"))
                }))),
                "dictionary": tstate(t.dictionary(t.component_cyclic("Value"))),
            })),
            "number": tstate(t.state({
                "integer": tstate(t.number_local(n.integer(null))),
                "float": tstate(t.number_local(n.approximation(16))),
            })),
            "string": tstate(t.text_global("Text Value")),
            "boolean": tstate(t.boolean()),
            "null": tstate(t.nothing()),
        })),
    }
)
