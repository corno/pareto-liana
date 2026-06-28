

import * as sh from "../../../../../shorthands/schema/manual"



export const $ = sh.modules(
    {
        "Package Set": sh.module_(sh.t.dictionary(sh.t.state({
            "package": sh.toption(sh.t.component("Package")),
            "set": sh.toption(sh.t.component("Package Set")),
        }))),

        "Package": sh.module_(sh.t.group({
            "imports": sh.prop(sh.t.component("Imports")),
            "content": sh.prop(sh.t.state({
                "data modules": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
                "functions": sh.toption(sh.t.dictionary(sh.t.group({
                    "result": sh.prop(sh.t.component("Value")),
                    "context": sh.prop(sh.t.component("Value")),
                    "type": sh.prop(sh.t.state({
                        "transformer": sh.toption(sh.t.nothing()),
                        "refiner": sh.toption(sh.t.group({
                            "error": sh.prop(sh.t.optional(sh.t.component("Value"))),
                            "lookups": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.state({
                                "acyclic": sh.toption(sh.t.component("Value")),
                                "cyclic": sh.toption(sh.t.component("Value")),
                                "stack": sh.toption(sh.t.component("Value")),
                            })))),
                        }))
                    })),
                    "parameters": sh.prop(sh.t.optional(sh.t.dictionary(sh.t.component("Value")))),
                })))
            }))
        })),

        "Imports": sh.module_(sh.t.dictionary(sh.t.group({
            "type": sh.prop(sh.t.state({
                "external": sh.toption(sh.t.text_global("TBD")),
                "ancestor": sh.toption(sh.t.group({
                    "number of steps": sh.prop(sh.t.simple("Natural")),
                    "dependency": sh.prop(sh.t.text_global("TBD")),
                })),
                "sibling": sh.toption(sh.t.text_global("TBD")),
            })),
            "tail": sh.prop(sh.t.list(sh.t.text_global("TBD"))),
        }))),

        "Value": sh.module_(sh.t.state({
            "boolean": sh.toption(sh.t.nothing()),
            "component": sh.toption(sh.t.group({
                "location": sh.prop(sh.t.component("Module Reference")),
            })),
            "dictionary": sh.toption(sh.t.component("Value")),
            "group": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            "list": sh.toption(sh.t.component("Value")),
            "nothing": sh.toption(sh.t.nothing()),
            "number": sh.toption(sh.t.state({
                "exact": sh.toption(sh.t.state({
                    "natural": sh.toption(sh.t.nothing()),
                    "integer": sh.toption(sh.t.nothing()),
                })),
                "approximation": sh.toption(sh.t.nothing()),
            })),
            "optional": sh.toption(sh.t.component("Value")),
            "reference": sh.toption(sh.t.group({
                "location": sh.prop(sh.t.component("Module Reference")),
                "sub selection": sh.prop(sh.t.list(sh.t.state({
                    "dictionary": sh.toption(sh.t.nothing()),
                    "group": sh.toption(sh.t.text_global("TBD")),
                    "list": sh.toption(sh.t.nothing()),
                    "optional": sh.toption(sh.t.nothing()),
                    "state": sh.toption(sh.t.text_global("TBD")),
                }))),
                "cyclic": sh.prop(sh.t.simple("boolean")),
            })),
            "state": sh.toption(sh.t.dictionary(sh.t.component("Value"))),
            "text": sh.toption(sh.t.nothing()),
        })),

        "Module Reference": sh.module_(sh.t.state({
            "import": sh.toption(sh.t.group({
                "import": sh.prop(sh.t.text_global("TBD")),
                "type": sh.prop(sh.t.text_global("TBD")),
            })),
            "local": sh.toption(sh.t.text_global("TBD")),
        }))

    }
)