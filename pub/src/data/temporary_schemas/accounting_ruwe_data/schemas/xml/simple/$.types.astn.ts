import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    tstate,
} from "../../../../../../shorthands/schema"
import * as g_ from "../../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {

        "Document": module_(t.group({
            "declaration": prop(t.optional(t.group({
                "attributes": prop(t.component("Attributes")),
            }))),
            "children": prop(t.component("Children")),
        })),
        "Attributes": module_(t.dictionary(t.text_global("Text Value"))),
        "Children": module_(t.list(t.state({
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
        "Element": module_(t.group({
            "name": prop(t.text_global("Text Value")),
            "attributes": prop(t.component("Attributes")),
            //"mixed": t.boolean(),
            "children": prop(t.component_cyclic("Children")),
        })),
    }
)


