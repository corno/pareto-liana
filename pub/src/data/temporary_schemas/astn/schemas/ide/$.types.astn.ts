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
        "Text Edits": type(t.list(t.state_group({
            "insert": tstate(t.group({
                "location": prop(t.component("Relative Location")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "replace": tstate(t.group({
                "range": prop(t.component("Relative Range")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "delete": tstate(t.group({
                "range": prop(t.component("Relative Range")),
            })),
        }))),

        "Relative Range": type(t.group({
            "start": prop(t.component("Relative Location")),
            "end": prop(t.component("Relative Location")),
        })),

        "Key Value Pairs To Be Sorted": type(t.dictionary(t.text_local(text('single line')))),

        "Relative Location": type(t.group({
            "line": prop(t.number_local(n.natural())),
            "column": prop(t.number_local(n.natural())), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    },
)


