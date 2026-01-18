import * as _pi from 'pareto-core-interface'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"


export const $: g_.Types = types(
    {
        "Errors": type(t.list(t.group({
            "range": prop(t.component("Range")),
            "type": prop(t.state_group({
                "error": tstate(t.state_group({
                    "invalid value type": tstate(t.group({
                        "expected": prop(t.list(t.state_group({
                            "text": tstate(t.nothing()),
                            "verbose group": tstate(t.nothing()),
                            "concise group": tstate(t.nothing()),
                            "dictionary": tstate(t.nothing()),
                            "not set": tstate(t.nothing()),
                            "set": tstate(t.nothing()),
                            "list": tstate(t.nothing()),
                            "state": tstate(t.nothing()),
                        }))),
                    })),
                    "duplicate property": tstate(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "missing property": tstate(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "superfluous property": tstate(t.group({
                        "name": prop(t.text_local(text('single line'))),
                    })),
                    "state": tstate(t.state_group({
                        "more than 2 elements": tstate(t.nothing()),
                        "missing state name": tstate(t.nothing()),
                        "state is not a string": tstate(t.nothing()),
                        "missing value": tstate(t.nothing()),
                        "unknown state": tstate(t.group({
                            "found": prop(t.text_local(text('single line'))),
                            "expected": prop(t.dictionary(t.nothing())),
                        })),
                        "missing data marker": tstate(t.nothing()),
                    })),
                })),
                "warning": tstate(t.state_group({
                    "expected apostrophed string": tstate(t.nothing()),
                    "expected quoted string": tstate(t.nothing()),
                    "expected backticked string": tstate(t.nothing()),
                    "expected undelimited string": tstate(t.nothing()),
                })),
            })),
        }))),
        
        "Location": type(t.group({
            "relative": prop(t.component("Relative Location")),
            "absolute": prop(t.number_local(n.natural())),
        })),

        "Relative Location": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),

        // "Document Range": type(t.group({
        //     "document": t.text_local(text('single line')),
        //     "range": t.component("Range"),
        // })),

        "Range": type(t.group({
            "start": prop(t.component("Location")),
            "end": prop(t.component("Location")),
        })),

    }
)