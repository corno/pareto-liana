import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    text,
    n,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Document": type(t.group({
            "header": prop(t.optional(t.component("Value"))),
            "content": prop(t.component("Value")),
        })),

        "Value": type(t.group({
            "metadata": prop(t.group({
                "comments": prop(t.list(t.text_local(text('single line')))),
            })),
            "data": prop(t.state_group({
                "missing": tstate(t.nothing()),
                "include": tstate(t.group({
                    "path": prop(t.text_local(text('single line'))),
                })),
                "concrete": tstate(t.group({
                    "type": prop(t.state_group({
                        "dictionary": tstate(t.dictionary(t.optional(t.component_cyclic("Value")))),
                        "group": tstate(t.state_group({
                            "concise": tstate(t.list(t.component_cyclic("Value"))),
                            "verbose": tstate(t.dictionary(t.optional(t.component_cyclic("Value")))),
                        })),
                        "list": tstate(t.list(t.component_cyclic("Value"))),
                        "nothing": tstate(t.nothing()),
                        "optional": tstate(t.state_group({
                            "not set": tstate(t.nothing()),
                            "set": tstate(t.component_cyclic("Value")),
                        })),
                        "state group": tstate(t.state_group({
                            "missing data": tstate(t.nothing()),
                            "set": tstate(t.group({
                                "state": prop(t.text_global("Text Value")),
                                "value": prop(t.component_cyclic("Value"))
                            }))
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
                })),
            }))
        })),
    }
)


