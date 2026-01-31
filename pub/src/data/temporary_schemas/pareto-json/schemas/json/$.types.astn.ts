import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Document": module_(t.component("Value")),

        "Value": module_(t.state({
            "array": toption(t.list(t.component_cyclic("Value"))),
            "object": toption(t.state({
                "key value array": toption(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component_cyclic("Value"))
                }))),
                "dictionary": toption(t.dictionary(t.component_cyclic("Value"))),
            })),
            "number": toption(t.state({
                //depending on the source, one needs to be chosen.
                "integer": toption(t.number_local(n.integer(null))),
                "float": toption(t.number_local(n.approximation(16))),
            })),
            "string": toption(t.text_global("Text Value")),
            "boolean": toption(t.boolean()),
            "null": toption(t.nothing()),
        })),
        
    }
)
