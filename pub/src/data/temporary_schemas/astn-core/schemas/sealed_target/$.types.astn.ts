import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Document": type(t.component("Value")),

        "Value": type(t.state_group({
            "list": tstate(t.list(t.component_cyclic("Value"))),
            "dictionary": tstate(t.dictionary(t.component_cyclic("Value"))),
            "group": tstate(t.state_group({
                "verbose": tstate(t.dictionary(t.component_cyclic("Value"))),
            })),
            "nothing": tstate(t.nothing()),
            "optional": tstate(t.state_group({
                "not set": tstate(t.nothing()),
                "set": tstate(t.component_cyclic("Value")),
            })),
            "state group": tstate(t.group({
                "state": prop(t.text_global("Text Value")),
                "value": prop(t.component_cyclic("Value"))
            })),
            "text": tstate(t.group({
                "value": prop(t.text_global("Text Value")),
                "delimiter": prop(t.state_group({
                    "none": tstate(t.nothing()),
                    "quote": tstate(t.nothing()),
                    "backtick": tstate(t.nothing()),
                })),
            })),
        })),
    }
)


