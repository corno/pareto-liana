import * as _pi from 'pareto-core-interface'

import {
    text,
    types,
    n,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"

import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {
        "Module Set": type(t.dictionary(t.state_group({
            "module": tstate(t.component("Module")),
            "set": tstate(t.component_cyclic("Module Set")),
        }))),

        "Module": type(t.group({
            "imports": prop(t.component("Imports")),
            "types": prop(t.dictionary(t.state_group({
                "data": tstate(t.component_cyclic("Type")),
                "algorithm": tstate(t.group({
                    "result": prop(t.component_cyclic("Type")),
                    "context": prop(t.component_cyclic("Type")),
                    "type": prop(t.state_group({
                        "transformer": tstate(t.group({
                        })),
                        "refiner": tstate(t.group({
                            "error": prop(t.optional(t.component_cyclic("Type"))),
                            "lookups": prop(t.optional(t.dictionary(t.state_group({
                                "acyclic": tstate(t.component_cyclic("Type")),
                                "cyclic": tstate(t.component_cyclic("Type")),
                                "stack": tstate(t.component_cyclic("Type")),
                            })))),
                        }))
                    })),
                    "parameters": prop(t.optional(t.dictionary(t.component_cyclic("Type")))),
                })),
            }))),
        })),

        "Imports": type(t.dictionary(t.group({
            "type": prop(t.state_group({
                "external": tstate(t.text_global("TBD")),
                "ancestor": tstate(t.group({
                    "number of steps": prop(t.number_local(n.natural())),
                    "dependency": prop(t.text_global("TBD")),
                })),
                "sibling": tstate(t.text_global("TBD")),
            })),
            "tail": prop(t.list(t.text_global("TBD"))),
        }))),

        "Type": type(t.state_group({

            "boolean": tstate(t.nothing()),
            "component": tstate(t.group({
                "location": prop(t.state_group({
                    "import": tstate(t.group({
                        "import": prop(t.text_global("TBD")),
                        "type": prop(t.text_global("TBD")),
                    })),
                    "sibling": tstate(t.text_global("TBD")),
                })),
            })),
            "dictionary": tstate(t.component_cyclic("Type")),
            "group": tstate(t.dictionary(t.component_cyclic("Type"))),
            "list": tstate(t.component_cyclic("Type")),
            "nothing": tstate(t.nothing()),
            "number": tstate(t.state_group({
                "exact": tstate(t.state_group({
                    "natural": prop(t.nothing()),
                    "integer": prop(t.nothing()),
                })),
                "approximation": tstate(t.nothing()),
            })),
            "optional": tstate(t.component_cyclic("Type")),
            "reference": tstate(t.group({
                "location": prop(t.state_group({
                    "import": tstate(t.group({
                        "import": prop(t.text_global("TBD")),
                        "type": prop(t.text_global("TBD")),
                    })),
                    "sibling": tstate(t.group({
                        "sibling": prop(t.text_global("TBD")),
                        "circular dependent": prop(t.boolean()),
                    })),
                })),
                "sub selection": prop(t.list(t.state_group({
                    "dictionary": tstate(t.nothing()),
                    "group": tstate(t.text_global("TBD")),
                    "list": tstate(t.nothing()),
                    "optional": tstate(t.nothing()),
                    "state group": tstate(t.text_global("TBD")),
                }))),
            })),
            "state group": tstate(t.dictionary(t.component_cyclic("Type"))),
            "text": tstate(t.nothing()),
        })),

    }
)