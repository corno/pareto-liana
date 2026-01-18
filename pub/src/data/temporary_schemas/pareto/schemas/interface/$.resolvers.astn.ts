import * as _pi from 'pareto-core-interface'

import { resolvers, r, resolver, sig, state } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {
        "Module Set": resolver(r.dictionary(r.state_group({
            "module": state(r.component("Module", {}, {})),
            "set": state(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "types": r.dictionary(r.state_group({
                "data": state(r.component("Type", {}, {})),
                "algorithm": state(r.group({
                    "result": r.component("Type", {}, {}),
                    "context": r.component("Type", {}, {}),
                    "type": r.state_group({
                        "transformer": state(r.group({
                        })),
                        "refiner": state(r.group({
                            "error": r.optional(r.component("Type", {}, {})),
                            "lookups": r.optional(r.dictionary(r.state_group({
                                "acyclic": state(r.component("Type", {}, {})),
                                "cyclic": state(r.component("Type", {}, {})),
                                "stack": state(r.component("Type", {}, {})),
                            }))),
                        })),
                    }),
                    "parameters": r.optional(r.dictionary(r.component("Type", {}, {}))),
                })),
            })),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "type": r.state_group({
                "external": state(r.text()),
                "ancestor": state(r.group({
                    "number of steps": r.number(),
                    "dependency": r.text(),
                })),
                "sibling": state(r.text()),
            }),
            "tail": r.list(r.text()),
        }))),

        "Type": resolver(r.state_group({

            "boolean": state(r.nothing()),
            "component": state(r.group({
                "location": r.state_group({
                    "import": state(r.group({
                        "import": r.text(),
                        "type": r.text(),
                    })),
                    "sibling": state(r.text()),
                }),
            })),
            "dictionary": state(r.component("Type", {}, {})),
            "group": state(r.dictionary(r.component("Type", {}, {}))),
            "list": state(r.component("Type", {}, {})),
            "nothing": state(r.nothing()),

            "number": state(r.state_group({
                "exact": state(r.state_group({
                    "natural": state(r.nothing()),
                    "integer": state(r.nothing()),
                })),
                "approximation": state(r.nothing()),
            })),
            "optional": state(r.component("Type", {}, {})),
            "reference": state(r.group({
                "location": r.state_group({
                    "import": state(r.group({
                        "import": r.text(),
                        "type": r.text(),
                    })),
                    "sibling": state(r.group({
                        "sibling": r.text(),
                        "circular dependent": r.boolean(),
                    })),
                }),
                "sub selection": r.list(r.state_group({
                    "dictionary": state(r.nothing()),
                    "group": state(r.text()),
                    "list": state(r.nothing()),
                    "optional": state(r.nothing()),
                    "state group": state(r.text()),
                })),
            })),
            "state group": state(r.dictionary(r.component("Type", {}, {}))),
            "text": state(r.nothing()),
        })),

    })