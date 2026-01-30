import * as _pi from 'pareto-core/dist/interface'

import {
    text,
    modules,
    n,
    t,
    tr,
    type,
    prop,
    tstate as toption,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Module Set": type(t.dictionary(t.state({
            "module": toption(t.component("Module")),
            "set": toption(t.component_cyclic("Module Set")),
        }))),

        "Module": type(t.group({
            "imports": prop(t.component("Imports")),
            "types": prop(t.dictionary(t.state({
                "data": toption(t.component_cyclic("Value")),
                "algorithm": toption(t.group({
                    "result": prop(t.component_cyclic("Value")),
                    "context": prop(t.component_cyclic("Value")),
                    "type": prop(t.state({
                        "transformer": toption(t.group({
                        })),
                        "refiner": toption(t.group({
                            "error": prop(t.optional(t.component_cyclic("Value"))),
                            "lookups": prop(t.optional(t.dictionary(t.state({
                                "acyclic": toption(t.component_cyclic("Value")),
                                "cyclic": toption(t.component_cyclic("Value")),
                                "stack": toption(t.component_cyclic("Value")),
                            })))),
                        }))
                    })),
                    "parameters": prop(t.optional(t.dictionary(t.component_cyclic("Value")))),
                })),
            }))),
        })),

        "Imports": type(t.dictionary(t.group({
            "type": prop(t.state({
                "external": toption(t.text_global("TBD")),
                "ancestor": toption(t.group({
                    "number of steps": prop(t.number_local(n.natural(null))),
                    "dependency": prop(t.text_global("TBD")),
                })),
                "sibling": toption(t.text_global("TBD")),
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
        }))),

        "Value": type(t.state({
            "boolean": toption(t.nothing()),
            "component": toption(t.group({
                "location": prop(t.component("Module Reference")),
            })),
            "dictionary": toption(t.component_cyclic("Value")),
            "group": toption(t.dictionary(t.component_cyclic("Value"))),
            "list": toption(t.component_cyclic("Value")),
            "nothing": toption(t.nothing()),
            "number": toption(t.state({
                "exact": toption(t.state({
                    "natural": prop(t.nothing()),
                    "integer": prop(t.nothing()),
                })),
                "approximation": toption(t.nothing()),
            })),
            "optional": toption(t.component_cyclic("Value")),
            "reference": toption(t.group({
                "location": prop(t.component("Module Reference")),
                "sub selection": prop(t.list(t.state({
                    "dictionary": toption(t.nothing()),
                    "group": toption(t.text_global("TBD")),
                    "list": toption(t.nothing()),
                    "optional": toption(t.nothing()),
                    "state": toption(t.text_global("TBD")),
                }))),
                "cyclic": prop(t.boolean()),
            })),
            "state": toption(t.dictionary(t.component_cyclic("Value"))),
            "text": toption(t.nothing()),
        })),

        "Module Reference": type(t.state({
            "import": toption(t.group({
                "import": prop(t.text_global("TBD")),
                "type": prop(t.text_global("TBD")),
            })),
            "local": toption(t.text_global("TBD")),
        }))

    }
)