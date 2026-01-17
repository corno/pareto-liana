import * as _pi from 'pareto-core-interface'

import {
    types,
    t,
    type,
    n,
    prop,
    tstate,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/pareto/schemas/schema/data/unresolved"

export const $: g_.Types = types(
    {

        "Document": type(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Children")),
        })),
        "Attributes": type(t.dictionary(t.text_global("Text Value"))),
        "Children": type(t.list(t.state_group({
            "cdata": tstate(t.text_global("Text Value")),
            "comment": tstate(t.text_global("Text Value")),
            "element": tstate(t.component_cyclic("Element")),
            "processing instruction": tstate(t.group({
                "target": prop(t.text_global("Text Value")),
                "data": prop(t.text_global("Text Value")),
            })),
            "text": tstate(t.text_global("Text Value")),
            "entity reference": tstate(t.text_global("Text Value")),
        }))),
        "Element": type(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Children")),
        })),
    }
)


