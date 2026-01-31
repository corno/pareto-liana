import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    text,
    n,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Document": module_(t.group({
            "header": prop(t.optional(t.component("Value"))),
            "content": prop(t.component("Value")),
        })),

        "Value": module_(t.group({
            "metadata": prop(t.group({
                "comments": prop(t.list(t.text_local(text('single line')))),
            })),
            "data": prop(t.state({
                "missing": toption(t.nothing()),
                "include": toption(t.group({
                    "path": prop(t.text_local(text('single line'))),
                })),
                "concrete": toption(t.group({
                    "type": prop(t.state({
                        "dictionary": toption(t.dictionary(t.optional(t.component("Value")))),
                        "group": toption(t.state({
                            "concise": toption(t.list(t.component("Value"))),
                            "verbose": toption(t.dictionary(t.optional(t.component("Value")))),
                        })),
                        "list": toption(t.list(t.component("Value"))),
                        "nothing": toption(t.nothing()),
                        "optional": toption(t.state({
                            "not set": toption(t.nothing()),
                            "set": toption(t.component("Value")),
                        })),
                        "state": toption(t.state({
                            "missing data": toption(t.nothing()),
                            "set": toption(t.group({
                                "option": prop(t.text_global("Text Value")),
                                "value": prop(t.component("Value"))
                            }))
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
                })),
            }))
        })),
    }
)


