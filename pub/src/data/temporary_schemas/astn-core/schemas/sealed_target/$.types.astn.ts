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
            "list": toption(t.list(t.component_cyclic("Value"))),
            "dictionary": toption(t.dictionary(t.component_cyclic("Value"))),
            "group": toption(t.state({
                "verbose": toption(t.dictionary(t.component_cyclic("Value"))),
            })),
            "nothing": toption(t.nothing()),
            "optional": toption(t.state({
                "not set": toption(t.nothing()),
                "set": toption(t.component_cyclic("Value")),
            })),
            "state": toption(t.group({
                "option": prop(t.text_global("Text Value")),
                "value": prop(t.component_cyclic("Value"))
            })),
            "text": toption(t.group({
                "value": prop(t.text_global("Text Value")),
                "delimiter": prop(t.state({
                    "none": toption(t.nothing()),
                    "quote": toption(t.nothing()),
                    "backtick": toption(t.nothing()),
                })),
            })),
        })),
    }
)


