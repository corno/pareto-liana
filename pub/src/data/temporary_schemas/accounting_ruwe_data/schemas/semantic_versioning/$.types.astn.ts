import * as _pi from 'pareto-core-interface'

import {
    types,
    text,
    t,
    tr,
    type,
    prop,
    tstate,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types  = types(
    {
        "Semantic Version": type(t.group({
            "major": prop(t.text_global("Text Value")),
            "minor": prop(t.text_global("Text Value")),
            "patch": prop(t.text_global("Text Value")),
            "pre-release identifiers": prop(t.list(t.component("Number or Text"))),
            "build identifiers": prop(t.list(t.text_global("Text Value"))),
        })),
        "Number or Text": type(t.state_group({
            "numeric": tstate(t.text_global("Text Value")), //is this correct?
            "alphanumeric": tstate(t.text_global("Text Value")),
        })),
    }
)


