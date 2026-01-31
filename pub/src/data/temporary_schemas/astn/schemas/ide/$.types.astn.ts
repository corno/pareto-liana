import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    n,
    text,
    t,
    vp,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Text Edits": module_(t.list(t.state({
            "insert": toption(t.group({
                "location": prop(t.component("Relative Location")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "replace": toption(t.group({
                "range": prop(t.component("Relative Range")),
                "text": prop(t.text_local(text('single line'))),
            })),
            "delete": toption(t.group({
                "range": prop(t.component("Relative Range")),
            })),
        }))),

        "Relative Range": module_(t.group({
            "start": prop(t.component("Relative Location")),
            "end": prop(t.component("Relative Location")),
        })),

        "ID Value Pairs To Be Sorted": module_(t.dictionary(t.text_local(text('single line')))),

        "Relative Location": module_(t.group({
            "line": prop(t.number_local(n.natural(null))),
            "column": prop(t.number_local(n.natural(null))), //this value takes the width of a tab into account, if you don't want that, configure the tab width to be 1
        })),
    },
)


