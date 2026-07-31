
import * as sh from "lib/schemas/schema/shorthands/manual"


export const $ = sh.modules(
    {
        "Errors": sh.module_(sh.t.list(sh.t.group({
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "type": sh.prop(sh.t.state({
                "value": sh.toption(sh.t.state({
                    "invalid type": sh.toption(sh.t.group({
                        "expected": sh.prop(sh.t.list(sh.t.state({
                            "dictionary": sh.toption(sh.t.nothing()),
                            "group": sh.toption(sh.t.nothing()),
                            "list": sh.toption(sh.t.nothing()),
                            "nothing": sh.toption(sh.t.nothing()),
                            "optional": sh.toption(sh.t.nothing()),
                            "state": sh.toption(sh.t.nothing()),
                            "text": sh.toption(sh.t.nothing()),
                        }))),
                    })),
                    "missing": sh.toption(sh.t.nothing()),
                })),
                "dictionary": sh.toption(sh.t.state({
                    "duplicate entry": sh.toption(sh.t.group({
                        "name": sh.prop(sh.t.text_global("text")),
                    })),
                })),
                "group": sh.toption(sh.t.state({
                    "duplicate property": sh.toption(sh.t.group({
                        "name": sh.prop(sh.t.text_global("text")),
                    })),
                    "missing property": sh.toption(sh.t.group({
                        "name": sh.prop(sh.t.text_global("text")),
                    })),
                    "missing property value": sh.toption(sh.t.group({
                        "name": sh.prop(sh.t.text_global("text")),
                    })),
                    "superfluous property": sh.toption(sh.t.group({
                        "name": sh.prop(sh.t.optional(sh.t.text_global("text"))),
                    })),
                })),
                "state": sh.toption(sh.t.state({
                    "more than 2 items in list": sh.toption(sh.t.nothing()),
                    "missing option name": sh.toption(sh.t.nothing()),
                    "option name is not a text": sh.toption(sh.t.nothing()),
                    "missing value": sh.toption(sh.t.nothing()),
                    "unknown option": sh.toption(sh.t.group({
                        "found": sh.prop(sh.t.text_global("text")),
                        "expected": sh.prop(sh.t.dictionary(sh.t.nothing())),
                    })),
                    "missing option": sh.toption(sh.t.nothing()),
                })),
            })),
        }))),


        "Warnings": sh.module_(sh.t.list(sh.t.group({
            "range": sh.prop(sh.t.component_external("location", "Range")),
            "type": sh.prop(sh.t.state({
                "expected apostrophed text": sh.toption(sh.t.nothing()),
                "expected quoted text": sh.toption(sh.t.nothing()),
                "expected backticked text": sh.toption(sh.t.nothing()),
                "expected undelimited text": sh.toption(sh.t.nothing()),
                "expected a group": sh.toption(sh.t.nothing()),
            })),
        }))),

    }
)