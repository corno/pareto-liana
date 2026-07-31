import * as sh from "lib/schemas/resolver/shorthands/manual"


export const $ = sh.resolver_modules(
    {
        "Package Set": sh.resolver(sh.r.dictionary(sh.r.state({
            "package": sh.option(sh.r.component("Package", {}, {})),
            "set": sh.option(sh.r.component("Package Set", {}, {})),
        }))),

        "Package": sh.resolver(sh.r.group({
            "imports": sh.r.component("Imports", {}, {}),
            "content": sh.r.state({
                "data modules": sh.option(sh.r.dictionary(sh.r.component("Value", {}, {}))),
                "functions": sh.option(sh.r.dictionary(sh.r.group({
                    "result": sh.r.component("Value", {}, {}),
                    "context": sh.r.component("Value", {}, {}),
                    "type": sh.r.state({
                        "transformer": sh.option(sh.r.nothing()),
                        "refiner": sh.option(sh.r.group({
                            "error": sh.r.optional(sh.r.component("Value", {}, {})),
                            "lookups": sh.r.optional(sh.r.dictionary(sh.r.state({
                                "acyclic": sh.option(sh.r.component("Value", {}, {})),
                                "cyclic": sh.option(sh.r.component("Value", {}, {})),
                                "stack": sh.option(sh.r.component("Value", {}, {})),
                            }))),
                        })),
                    }),
                    "parameters": sh.r.optional(sh.r.dictionary(sh.r.component("Value", {}, {}))),
                }))),
            }),
        })),

        "Imports": sh.resolver(sh.r.dictionary(sh.r.group({
            "type": sh.r.state({
                "external": sh.option(sh.r.text()),
                "ancestor": sh.option(sh.r.group({
                    "number of steps": sh.r.simple(),
                    "dependency": sh.r.text(),
                })),
                "sibling": sh.option(sh.r.text()),
            }),
            "tail": sh.r.list(sh.r.text()),
        }))),

        "Value": sh.resolver(sh.r.state({

            "boolean": sh.option(sh.r.nothing()),
            "component": sh.option(sh.r.group({
                "location": sh.r.component("Module Reference", {}, {}),
            })),
            "dictionary": sh.option(sh.r.component("Value", {}, {})),
            "group": sh.option(sh.r.dictionary(sh.r.component("Value", {}, {}))),
            "list": sh.option(sh.r.component("Value", {}, {})),
            "nothing": sh.option(sh.r.nothing()),

            "number": sh.option(sh.r.state({
                "exact": sh.option(sh.r.state({
                    "natural": sh.option(sh.r.nothing()),
                    "integer": sh.option(sh.r.nothing()),
                })),
                "approximation": sh.option(sh.r.nothing()),
            })),
            "optional": sh.option(sh.r.component("Value", {}, {})),
            "reference": sh.option(sh.r.group({
                "location": sh.r.component("Module Reference", {}, {}),
                "sub selection": sh.r.list(sh.r.state({
                    "dictionary": sh.option(sh.r.nothing()),
                    "group": sh.option(sh.r.text()),
                    "list": sh.option(sh.r.nothing()),
                    "optional": sh.option(sh.r.nothing()),
                    "state": sh.option(sh.r.text()),
                })),
                "cyclic": sh.r.simple(),
            })),
            "state": sh.option(sh.r.dictionary(sh.r.component("Value", {}, {}))),
            "text": sh.option(sh.r.nothing()),
        })),

        "Module Reference": sh.resolver(sh.r.state({
            "import": sh.option(sh.r.group({
                "import": sh.r.text(),
                "type": sh.r.text(),
            })),
            "local": sh.option(sh.r.text()),
        })),

    })