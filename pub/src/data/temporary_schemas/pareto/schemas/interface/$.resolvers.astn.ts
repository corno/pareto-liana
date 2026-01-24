import * as _pi from 'pareto-core/dist/interface'

import { resolvers, r, resolver, sig, state as option } from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Resolvers = resolvers(
    {
        "Module Set": resolver(r.dictionary(r.state({
            "module": option(r.component("Module", {}, {})),
            "set": option(r.component("Module Set", {}, {})),
        }))),

        "Module": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "types": r.dictionary(r.state({
                "data": option(r.component("Type Node", {}, {})),
                "algorithm": option(r.group({
                    "result": r.component("Type Node", {}, {}),
                    "context": r.component("Type Node", {}, {}),
                    "type": r.state({
                        "transformer": option(r.group({
                        })),
                        "refiner": option(r.group({
                            "error": r.optional(r.component("Type Node", {}, {})),
                            "lookups": r.optional(r.dictionary(r.state({
                                "acyclic": option(r.component("Type Node", {}, {})),
                                "cyclic": option(r.component("Type Node", {}, {})),
                                "stack": option(r.component("Type Node", {}, {})),
                            }))),
                        })),
                    }),
                    "parameters": r.optional(r.dictionary(r.component("Type Node", {}, {}))),
                })),
            })),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "type": r.state({
                "external": option(r.text()),
                "ancestor": option(r.group({
                    "number of steps": r.number(),
                    "dependency": r.text(),
                })),
                "sibling": option(r.text()),
            }),
            "tail": r.list(r.text()),
        }))),

        "Type Node": resolver(r.state({

            "boolean": option(r.nothing()),
            "component": option(r.group({
                "location": r.component("Type Reference", {}, {}),
            })),
            "dictionary": option(r.component("Type Node", {}, {})),
            "group": option(r.dictionary(r.component("Type Node", {}, {}))),
            "list": option(r.component("Type Node", {}, {})),
            "nothing": option(r.nothing()),

            "number": option(r.state({
                "exact": option(r.state({
                    "natural": option(r.nothing()),
                    "integer": option(r.nothing()),
                })),
                "approximation": option(r.nothing()),
            })),
            "optional": option(r.component("Type Node", {}, {})),
            "reference": option(r.group({
                "location": r.component("Type Reference", {}, {}),
                "sub selection": r.list(r.state({
                    "dictionary": option(r.nothing()),
                    "group": option(r.text()),
                    "list": option(r.nothing()),
                    "optional": option(r.nothing()),
                    "state": option(r.text()),
                })),
                "cyclic": r.boolean(),
            })),
            "state": option(r.dictionary(r.component("Type Node", {}, {}))),
            "text": option(r.nothing()),
        })),

        "Type Reference": resolver(r.state({
            "import": option(r.group({
                "import": r.text(),
                "type": r.text(),
            })),
            "local": option(r.text()),
        })),

    })