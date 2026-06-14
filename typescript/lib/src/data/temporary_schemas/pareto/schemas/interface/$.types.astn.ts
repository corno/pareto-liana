import * as p_di from 'pareto-core/dist/data/interface'

import {
    text,
    modules,
    n,
    t,
    module_,
    prop,
    toption as toption,
} from "../../../../../shorthands/schema"



export const $ = modules(
    {
        "Package Set": module_(t.dictionary(t.state({
            "package": toption(t.component("Package")),
            "set": toption(t.component("Package Set")),
        }))),

        "Package": module_(t.group({
            "imports": prop(t.component("Imports")),
            "content": prop(t.state({
                "data modules": toption(t.dictionary(t.component("Value"))),
                "functions": toption(t.dictionary(t.group({
                    "result": prop(t.component("Value")),
                    "context": prop(t.component("Value")),
                    "type": prop(t.state({
                        "transformer": toption(t.nothing()),
                        "refiner": toption(t.group({
                            "error": prop(t.optional(t.component("Value"))),
                            "lookups": prop(t.optional(t.dictionary(t.state({
                                "acyclic": toption(t.component("Value")),
                                "cyclic": toption(t.component("Value")),
                                "stack": toption(t.component("Value")),
                            })))),
                        }))
                    })),
                    "parameters": prop(t.optional(t.dictionary(t.component("Value")))),
                })))
            }))
        })),

        "Imports": module_(t.dictionary(t.group({
            "type": prop(t.state({
                "external": toption(t.text_global("TBD")),
                "ancestor": toption(t.group({
                    "number of steps": prop(t.simple("Natural")),
                    "dependency": prop(t.text_global("TBD")),
                })),
                "sibling": toption(t.text_global("TBD")),
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
        }))),

        "Value": module_(t.state({
            "boolean": toption(t.nothing()),
            "component": toption(t.group({
                "location": prop(t.component("Module Reference")),
            })),
            "dictionary": toption(t.component("Value")),
            "group": toption(t.dictionary(t.component("Value"))),
            "list": toption(t.component("Value")),
            "nothing": toption(t.nothing()),
            "number": toption(t.state({
                "exact": toption(t.state({
                    "natural": toption(t.nothing()),
                    "integer": toption(t.nothing()),
                })),
                "approximation": toption(t.nothing()),
            })),
            "optional": toption(t.component("Value")),
            "reference": toption(t.group({
                "location": prop(t.component("Module Reference")),
                "sub selection": prop(t.list(t.state({
                    "dictionary": toption(t.nothing()),
                    "group": toption(t.text_global("TBD")),
                    "list": toption(t.nothing()),
                    "optional": toption(t.nothing()),
                    "state": toption(t.text_global("TBD")),
                }))),
                "cyclic": prop(t.simple("boolean")),
            })),
            "state": toption(t.dictionary(t.component("Value"))),
            "text": toption(t.nothing()),
        })),

        "Module Reference": module_(t.state({
            "import": toption(t.group({
                "import": prop(t.text_global("TBD")),
                "type": prop(t.text_global("TBD")),
            })),
            "local": toption(t.text_global("TBD")),
        }))

    }
)