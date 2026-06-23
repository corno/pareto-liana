

import { resolver_modules, r, resolver, option as option } from "../../../../../shorthands/resolver/manual"


export const $ = resolver_modules(
    {
        "Package Set": resolver(r.dictionary(r.state({
            "package": option(r.component("Package", {}, {})),
            "set": option(r.component("Package Set", {}, {})),
        }))),

        "Package": resolver(r.group({
            "imports": r.component("Imports", {}, {}),
            "content": r.state({
                "data modules": option(r.dictionary(r.component("Value", {}, {}))),
                "functions": option(r.dictionary(r.group({
                    "result": r.component("Value", {}, {}),
                    "context": r.component("Value", {}, {}),
                    "type": r.state({
                        "transformer": option(r.nothing()),
                        "refiner": option(r.group({
                            "error": r.optional(r.component("Value", {}, {})),
                            "lookups": r.optional(r.dictionary(r.state({
                                "acyclic": option(r.component("Value", {}, {})),
                                "cyclic": option(r.component("Value", {}, {})),
                                "stack": option(r.component("Value", {}, {})),
                            }))),
                        })),
                    }),
                    "parameters": r.optional(r.dictionary(r.component("Value", {}, {}))),
                }))),
            }),
        })),

        "Imports": resolver(r.dictionary(r.group({
            "type": r.state({
                "external": option(r.text()),
                "ancestor": option(r.group({
                    "number of steps": r.simple(),
                    "dependency": r.text(),
                })),
                "sibling": option(r.text()),
            }),
            "tail": r.list(r.text()),
        }))),

        "Value": resolver(r.state({

            "boolean": option(r.nothing()),
            "component": option(r.group({
                "location": r.component("Module Reference", {}, {}),
            })),
            "dictionary": option(r.component("Value", {}, {})),
            "group": option(r.dictionary(r.component("Value", {}, {}))),
            "list": option(r.component("Value", {}, {})),
            "nothing": option(r.nothing()),

            "number": option(r.state({
                "exact": option(r.state({
                    "natural": option(r.nothing()),
                    "integer": option(r.nothing()),
                })),
                "approximation": option(r.nothing()),
            })),
            "optional": option(r.component("Value", {}, {})),
            "reference": option(r.group({
                "location": r.component("Module Reference", {}, {}),
                "sub selection": r.list(r.state({
                    "dictionary": option(r.nothing()),
                    "group": option(r.text()),
                    "list": option(r.nothing()),
                    "optional": option(r.nothing()),
                    "state": option(r.text()),
                })),
                "cyclic": r.simple(),
            })),
            "state": option(r.dictionary(r.component("Value", {}, {}))),
            "text": option(r.nothing()),
        })),

        "Module Reference": resolver(r.state({
            "import": option(r.group({
                "import": r.text(),
                "type": r.text(),
            })),
            "local": option(r.text()),
        })),

    })