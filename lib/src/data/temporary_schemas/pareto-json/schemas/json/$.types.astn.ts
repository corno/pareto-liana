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
            "array": toption(t.list(t.component("Value"))),
            "object": toption(t.state({
                "key value array": toption(t.list(t.group({
                    "key": prop(t.text_global("Text Value")),
                    "value": prop(t.component("Value"))
                }))),
                "dictionary": toption(t.dictionary(t.component("Value"))),
            })),
            "number": toption(t.state({
                //depending on the source, one needs to be chosen.
                "integer": toption(t.simple("Integer")),
                "float": toption(t.simple("Approximation")),
            })),
            "string": toption(t.text_global("Text Value")),
            "boolean": toption(t.simple_boolean()),
            "null": toption(t.nothing()),
        })),
        
    }
)
