import * as _pi from 'pareto-core/dist/interface'

import {
    modules,
    t,
    module_,
    n,
    prop,
    toption,
    text,
} from "../../../../../shorthands/schema"
import * as g_ from "../../../../../interface/generated/liana/schemas/schema/data/unresolved"

export const $: g_.Modules = modules(
    {
        "Serialization Tree": module_(t.group({
            "serializationFormatVersion": prop(t.text_local(text('single line'))),
            "languages": prop(t.list(t.group({
                "key": prop(t.text_local(text('single line'))),
                "version": prop(t.text_local(text('single line'))),
            }))),
            "root node id": prop(t.text_local(text('single line'))),
            "node tree": prop(t.component("Node")),
        })),

        "Node": module_(t.group({
            "range": prop(t.component_external("location", "Range")),
            "classifier": prop(t.text_local(text('single line'))),
            "properties": prop(t.dictionary(t.text_local(text('single line')))),
            "containments": prop(t.dictionary(t.dictionary(t.component("Node")))),
            "references": prop(t.dictionary(t.component("Targets"))),
            "annotations": prop(t.list(t.text_local(text('single line')))),
        })),

        "Targets": module_(t.list(t.group({
            "resolveInfo": prop(t.text_local(text('single line'))),
            "reference": prop(t.optional(t.text_local(text('single line')))),
        }))),
    }
)