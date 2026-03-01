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
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"


export const $: g_.Modules = modules(
    {
        "Errors": module_(t.list(t.group({
            "range": prop(t.component_external("location", "Range")),
            "type": prop(t.state({
                "error": toption(t.state({
                    "invalid value type": toption(t.group({
                        "expected": prop(t.list(t.state({
                            "text": toption(t.nothing()),
                            "verbose group": toption(t.nothing()),
                            "concise group": toption(t.nothing()),
                            "dictionary": toption(t.nothing()),
                            "not set": toption(t.nothing()),
                            "set": toption(t.nothing()),
                            "list": toption(t.nothing()),
                            "state": toption(t.nothing()),
                        }))),
                    })),
                    "duplicate property": toption(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "duplicate entry": toption(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "missing property": toption(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "missing property value": toption(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "superfluous property": toption(t.group({
                        "name": prop(t.optional(t.text_local(text('single line')))),
                    })),
                    "state": toption(t.state({
                        "more than 2 items": toption(t.nothing()),
                        "missing option name": toption(t.nothing()),
                        "option name is not a text": toption(t.nothing()),
                        "missing value": toption(t.nothing()),
                        "unknown option": toption(t.group({
                            "found": prop(t.text_local(text('single line'))),
                            "expected": prop(t.dictionary(t.nothing())),
                        })),
                        "missing data marker": toption(t.nothing()),
                    })),
                })),
                "warning": toption(t.state({
                    "expected apostrophed string": toption(t.nothing()),
                    "expected quoted string": toption(t.nothing()),
                    "expected backticked string": toption(t.nothing()),
                    "expected undelimited string": toption(t.nothing()),
                })),
            })),
        }))),

    }
)