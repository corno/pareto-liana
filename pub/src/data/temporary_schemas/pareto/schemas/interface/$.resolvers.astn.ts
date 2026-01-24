import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, sig, state } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {
        "Module Set": resolver(r.dictionary(r.state({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "types": r.dictionary(r.state({
                "data": state(r.component("Type Node", {}, {})),
                "algorithm": state(r.group({
                    "result": r.component("Type Node", {}, {}),
                    "context": r.component("Type Node", {}, {}),
                    "type": r.state({
                        "transformer": state(r.group({
                        })),
                        "refiner": state(r.group({
                            "error": r.optional(r.component("Type Node", {}, {})),
                            "lookups": r.optional(r.dictionary(r.state({
                                "acyclic": state(r.component("Type Node", {}, {})),
                                "cyclic": state(r.component("Type Node", {}, {})),
                                "stack": state(r.component("Type Node", {}, {})),
                            }))),
                        })),
                    }),
                    "parameters": r.optional(r.dictionary(r.component("Type Node", {}, {}))),
                })),
            })),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "type": r.state({
                "external": state(r.text()),
                "ancestor": state(r.group({
                    "number of steps": r.number(),
                    "dependency": r.text(),
                })),
                "sibling": state(r.text()),
            }),
            "tail": r.list(r.text()),
        }))),

        "Type Node": resolver(r.state({

            "boolean": state(r.nothing()),
            "component": state(r.group({
                "location": r.state({
                    "import": state(r.group({
                        "import": r.text(),
                        "type": r.text(),
                    })),
                    "local": state(r.text()),
                }),
            })),
            "dictionary": state(r.component("Type Node", {}, {})),
            "group": state(r.dictionary(r.component("Type Node", {}, {}))),
            "list": state(r.component("Type Node", {}, {})),
            "nothing": state(r.nothing()),

            "number": state(r.state({
                "exact": state(r.state({
                    "natural": state(r.nothing()),
                    "integer": state(r.nothing()),
                })),
                "approximation": state(r.nothing()),
            })),
            "optional": state(r.component("Type Node", {}, {})),
            "reference": state(r.state({
                "cyclic": state(r.group({
                    "sibling": r.text(),
                })),
                "acyclic": state(r.group({
                    "location": r.state({
                        "import": state(r.group({
                            "import": r.text(),
                            "type": r.text(),
                        })),
                        "local": state(r.text()),
                    }),
                    "sub selection": r.list(r.state({
                        "dictionary": state(r.nothing()),
                        "group": state(r.text()),
                        "list": state(r.nothing()),
                        "optional": state(r.nothing()),
                        "state": state(r.text()),
                    })),
                })),
            })),
            "state": state(r.dictionary(r.component("Type Node", {}, {}))),
            "text": state(r.nothing()),
        })),

    })