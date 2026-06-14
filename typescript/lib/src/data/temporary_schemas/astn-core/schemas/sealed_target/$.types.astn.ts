import * as p_di from 'pareto-core/dist/data/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {

        "Document": module_(t.component("Value")),

        "Value": module_(t.state({
            "list": toption(t.list(t.component("Value"))),
            "dictionary": toption(t.dictionary(t.component("Value"))),
            "group": toption(t.state({
                "verbose": toption(t.dictionary(t.component("Value"))),
            })),
            "nothing": toption(t.nothing()),
            "optional": toption(t.state({
                "not set": toption(t.nothing()),
                "set": toption(t.component("Value")),
            })),
            "state": toption(t.group({
                "option": prop(t.text_global("Text Value")),
                "value": prop(t.component("Value"))
            })),
            "text": toption(t.group({
                "value": prop(t.text_global("Text Value")),
                "delimiter": prop(t.state({
                    "none": toption(t.nothing()),
                    "quote": toption(t.nothing()),
                    "apostrophe": toption(t.nothing()),
                })),
            })),
        })),
    }
)


