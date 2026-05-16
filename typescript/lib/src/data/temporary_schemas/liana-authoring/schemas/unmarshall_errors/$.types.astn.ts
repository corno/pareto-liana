import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"


export const $ = modules(
    {
        "Errors": module_(t.list(t.group({
            "range": prop(t.component_external("location", "Range")),
            "type": prop(t.state({
                "value": toption(t.state({
                    "invalid type": toption(t.group({
                        "expected": prop(t.list(t.state({
                            "dictionary": toption(t.nothing()),
                            "group": toption(t.nothing()),
                            "list": toption(t.nothing()),
                            "nothing": toption(t.nothing()),
                            "optional": toption(t.nothing()),
                            "state": toption(t.nothing()),
                            "text": toption(t.nothing()),
                        }))),
                    })),
                    "missing": toption(t.nothing()),
                })),
                "dictionary": toption(t.state({
                    "duplicate entry": toption(t.group({
                        "name": prop(t.text_global("text")),
                    })),
                })),
                "group": toption(t.state({
                    "duplicate property": toption(t.group({
                        "name": prop(t.text_global("text")),
                    })),
                    "missing property": toption(t.group({
                        "name": prop(t.text_global("text")),
                    })),
                    "missing property value": toption(t.group({
                        "name": prop(t.text_global("text")),
                    })),
                    "superfluous property": toption(t.group({
                        "name": prop(t.optional(t.text_global("text"))),
                    })),
                })),
                "state": toption(t.state({
                    "more than 2 items in list": toption(t.nothing()),
                    "missing option name": toption(t.nothing()),
                    "option name is not a text": toption(t.nothing()),
                    "missing value": toption(t.nothing()),
                    "unknown option": toption(t.group({
                        "found": prop(t.text_global("text")),
                        "expected": prop(t.dictionary(t.nothing())),
                    })),
                    "missing option": toption(t.nothing()),
                })),
            })),
        }))),


        "Warnings": module_(t.list(t.group({
            "range": prop(t.component_external("location", "Range")),
            "type": prop(t.state({
                "expected apostrophed text": toption(t.nothing()),
                "expected quoted text": toption(t.nothing()),
                "expected backticked text": toption(t.nothing()),
                "expected undelimited text": toption(t.nothing()),
                "expected a group": toption(t.nothing()),
            })),
        }))),

    }
)