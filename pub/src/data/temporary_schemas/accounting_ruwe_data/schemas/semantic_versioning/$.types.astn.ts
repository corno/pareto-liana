import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    text,
    t,
    module_,
    prop,
    toption,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Semantic Version": module_(t.group({
            "major": prop(t.text_global("Text Value")),
            "minor": prop(t.text_global("Text Value")),
            "patch": prop(t.text_global("Text Value")),
            "pre-release identifiers": prop(t.list(t.component("Number or Text"))),
            "build identifiers": prop(t.list(t.text_global("Text Value"))),
        })),
        "Number or Text": module_(t.state({
            "numeric": toption(t.text_global("Text Value")), //is this correct?
            "alphanumeric": toption(t.text_global("Text Value")),
        })),
    }
)


