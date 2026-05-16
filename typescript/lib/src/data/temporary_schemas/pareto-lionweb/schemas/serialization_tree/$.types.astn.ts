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


export const $ = modules(
    {
        "Serialization Tree": module_(t.group({
            "serializationFormatVersion": prop(t.text_global("text")),
            "languages": prop(t.list(t.group({
                "key": prop(t.text_global("text")),
                "version": prop(t.text_global("text")),
            }))),
            "root node id": prop(t.text_global("text")),
            "node tree": prop(t.component("Node")),
        })),

        "Node": module_(t.group({
            "range": prop(t.component_external("location", "Range")),
            "classifier": prop(t.text_global("text")),
            "properties": prop(t.dictionary(t.text_global("text"))),
            "containments": prop(t.dictionary(t.dictionary(t.component("Node")))),
            "references": prop(t.dictionary(t.component("Targets"))),
            "annotations": prop(t.list(t.text_global("text"))),
        })),

        "Targets": module_(t.list(t.group({
            "resolveInfo": prop(t.text_global("text")),
            "reference": prop(t.optional(t.text_global("text"))),
        }))),
    }
)